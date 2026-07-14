import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { expect, test } from "@playwright/test";
import {
  fieldEntries,
  primitives,
  productSurfaces,
  proofDeck,
  resolvedPrimitives,
  resolvedSurfaces,
} from "../app/content";
import { cases } from "../app/data";

const caseRoutes = ["/objects/beeper", "/objects/mint-club", "/objects/hunt-town"];
const widths = [320, 375, 414, 768, 1440];
const caseSlugs = new Set(cases.map((item) => item.slug));

test("home returns successfully and exposes selected work", async ({ page }) => {
  const response = await page.goto("/");
  expect(response?.status()).toBe(200);
  await expect(page.getByText("Tony Park", { exact: true }).first()).toBeVisible();
  await expect(page.getByRole("link", { name: "View selected work" })).toHaveAttribute("href", "#objects");
});

test("wiki returns successfully and links home", async ({ page }) => {
  const response = await page.goto("/wiki");
  expect(response?.status()).toBe(200);
  await expect(page.getByRole("link", { name: "TONY PARK INDEX", exact: true })).toBeVisible();
  await expect(page.getByText("Primitive glossary", { exact: true })).toBeVisible();
  await expect(page.locator('a[href="/"]').first()).toBeVisible();
});

test("case routes return successfully", async ({ request }) => {
  for (const route of caseRoutes) {
    const response = await request.get(route);
    expect(response.status(), route).toBe(200);
  }
});

test("robots and sitemap return successfully and sitemap includes wiki", async ({ request }) => {
  const robots = await request.get("/robots.txt");
  expect(robots.status()).toBe(200);

  const sitemap = await request.get("/sitemap.xml");
  expect(sitemap.status()).toBe(200);
  expect(await sitemap.text()).toContain("/wiki");
});

for (const route of ["/", "/wiki"]) {
  for (const width of widths) {
    test(`${route} has no horizontal overflow at ${width}px`, async ({ page }) => {
      await page.setViewportSize({ width, height: 900 });
      await page.goto(route);
      const dimensions = await page.evaluate(() => ({
        scrollWidth: document.documentElement.scrollWidth,
        innerWidth: window.innerWidth,
      }));
      expect(dimensions.scrollWidth).toBe(dimensions.innerWidth);
    });
  }
}

test.describe("shared portfolio content", () => {
  test("every shared case slug and primitive id resolves", () => {
    const primitiveIds = new Set(primitives.map((item) => item.id));

    for (const primitive of primitives) {
      expect(caseSlugs, primitive.id).toContain(primitive.exampleCaseSlug);
    }
    for (const surface of productSurfaces) {
      expect(caseSlugs, surface.caseSlug).toContain(surface.caseSlug);
      expect(primitiveIds, surface.primitiveId).toContain(surface.primitiveId);
    }
    for (const card of proofDeck) {
      expect(caseSlugs, card.caseSlug).toContain(card.caseSlug);
    }
    expect(resolvedPrimitives.every((item) => item.example.length > 0)).toBe(true);
  });

  test("internal case links resolve", async ({ request }) => {
    const hrefs = new Set([
      ...cases.map((item) => `/objects/${item.slug}`),
      ...resolvedSurfaces.map((surface) => surface.caseHref),
    ]);
    for (const href of hrefs) {
      const response = await request.get(href);
      expect(response.status(), href).toBe(200);
    }
  });

  test("no field entry is missing a source URL", () => {
    for (const entry of fieldEntries) {
      expect(entry.href, entry.title).toMatch(/^https?:\/\//);
    }
  });

  test("both views expose the same selected case names", async ({ page }) => {
    for (const route of ["/", "/wiki"]) {
      await page.goto(route);
      for (const item of cases) {
        await expect(
          page.getByText(item.name, { exact: true }).filter({ visible: true }).first(),
          `${item.name} on ${route}`,
        ).toBeVisible();
      }
    }
  });

  test("no route file re-declares shared content arrays", () => {
    const routeFiles = ["app/page.tsx", "app/wiki/page.tsx", "app/HomeMotion.tsx"];
    for (const file of routeFiles) {
      const source = readFileSync(resolve(process.cwd(), file), "utf8");
      expect(source, file).not.toMatch(/^const (primitives|fieldEntries|productSurfaces|proofDeck)\b/m);
    }
  });
});

test("view switch is reciprocal at 320px", async ({ page }) => {
  await page.setViewportSize({ width: 320, height: 900 });

  await page.goto("/");
  const toIndex = page.locator('.mobile-dock a[href="/wiki"]');
  await expect(toIndex).toBeVisible();
  await toIndex.click();
  await page.waitForURL("**/wiki");

  const toVisual = page.locator('.wiki-masthead a[href="/"]');
  await expect(toVisual).toBeVisible();
  await toVisual.click();
  await page.waitForURL((url) => url.pathname === "/");

  for (const route of ["/", "/wiki"]) {
    const response = await page.goto(route);
    expect(response?.status(), route).toBe(200);
    const dimensions = await page.evaluate(() => ({
      scrollWidth: document.documentElement.scrollWidth,
      innerWidth: window.innerWidth,
    }));
    expect(dimensions.scrollWidth, route).toBe(dimensions.innerWidth);
  }
});

test("wiki has semantic section order and no broken local images", async ({ page }) => {
  await page.goto("/wiki");
  await expect(page.locator("h1")).toHaveCount(1);
  await expect(page.locator("h2")).toHaveText([
    "Entries",
    "What the interfaces had to explain",
    "HUNT → Mint Club → Hunt Town",
    "Products taught in rooms",
    "Smaller objects and public traces",
    "Useful for teams building on new rails",
  ]);

  // next/image lazy-loads by default, so images below the fold never start loading
  // until they scroll into view. The page sets `scroll-behavior: smooth`, so scrolling
  // must be forced instant here — an animated scroll would still be in flight when we
  // assert. Bring each image into view to trigger its load, then wait for them to settle.
  await page.locator('img[src^="/"]').evaluateAll(async (images) => {
    for (const image of images) {
      image.scrollIntoView({ behavior: "instant", block: "center" });
      await new Promise((resolve) => requestAnimationFrame(() => resolve(null)));
    }
    window.scrollTo({ top: 0, behavior: "instant" });
  });

  await expect(async () => {
    const settled = await page
      .locator('img[src^="/"]')
      .evaluateAll((images) => images.every((image) => (image as HTMLImageElement).complete));
    expect(settled).toBe(true);
  }).toPass({ timeout: 15_000 });

  // A loaded-but-zero-width image is one that actually failed to decode or 404'd.
  const brokenLocalImages = await page.locator('img[src^="/"]').evaluateAll((images) =>
    images
      .filter((image) => (image as HTMLImageElement).naturalWidth === 0)
      .map((image) => (image as HTMLImageElement).src),
  );
  expect(brokenLocalImages).toEqual([]);
});
