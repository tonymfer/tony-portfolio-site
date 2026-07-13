import { expect, test } from "@playwright/test";

const caseRoutes = ["/objects/beeper", "/objects/mint-club", "/objects/hunt-town"];
const widths = [320, 375, 414, 768, 1440];

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
