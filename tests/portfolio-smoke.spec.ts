import { readdirSync, readFileSync } from "node:fs";
import { resolve } from "node:path";
import { expect, test } from "@playwright/test";
import {
  fieldEntries,
  primitives,
  productSurfaces,
  resolvedPrimitives,
  resolvedSurfaces,
} from "../app/content";
import { cases } from "../app/data";
import {
  fieldSessions,
  homeCases,
  homeLedger,
  homeRetro,
} from "../app/home-content";

const caseRoutes = [
  "/objects/beeper",
  "/objects/mint-club",
  "/objects/hunt-town",
  "/objects/tradefish",
  "/objects/base-world",
  "/objects/taptato",
];
const widths = [320, 375, 414, 768, 1440];
const caseSlugs = new Set(cases.map((item) => item.slug));

test("home returns successfully and exposes selected work", async ({
  page,
}) => {
  const response = await page.goto("/");
  expect(response?.status()).toBe(200);
  await expect(
    page.getByText("Tony Park", { exact: true }).first(),
  ).toBeVisible();
  await expect(
    page.getByRole("link", { name: "Selected work ↓" }),
  ).toHaveAttribute("href", "#work");
});

test("wiki returns successfully and links home", async ({ page }) => {
  const response = await page.goto("/wiki");
  expect(response?.status()).toBe(200);
  await expect(
    page.getByRole("link", { name: "TONY PARK INDEX", exact: true }),
  ).toBeVisible();
  await expect(
    page.getByText("Primitive glossary", { exact: true }),
  ).toBeVisible();
  await expect(page.locator('a[href="/"]').first()).toBeVisible();
});

test("case routes return successfully", async ({ request }) => {
  for (const route of caseRoutes) {
    const response = await request.get(route);
    expect(response.status(), route).toBe(200);
  }
});

test("robots and sitemap return successfully and sitemap includes wiki", async ({
  request,
}) => {
  const robots = await request.get("/robots.txt");
  expect(robots.status()).toBe(200);

  const sitemap = await request.get("/sitemap.xml");
  expect(sitemap.status()).toBe(200);
  expect(await sitemap.text()).toContain("/wiki");
});

test("retired case slugs redirect (308) to their new targets", async ({
  request,
}) => {
  const redirects: Array<[string, string]> = [
    ["/objects/far-cards", "/objects/mint-club"],
    ["/objects/taptato-base-world", "/objects/taptato"],
  ];
  for (const [from, to] of redirects) {
    const response = await request.get(from, { maxRedirects: 0 });
    expect(response.status(), from).toBe(308);
    expect(response.headers()["location"], from).toBe(to);
  }
});

test("sitemap lists the split-case URLs and drops the retired slugs", async ({
  request,
}) => {
  const sitemap = await (await request.get("/sitemap.xml")).text();
  expect(sitemap).toContain("/objects/base-world");
  expect(sitemap).toContain("/objects/taptato");
  expect(sitemap).not.toContain("/objects/far-cards");
  expect(sitemap).not.toContain("/objects/taptato-base-world");
});

for (const route of ["/", "/wiki"]) {
  for (const width of widths) {
    test(`${route} has no horizontal overflow at ${width}px`, async ({
      page,
    }) => {
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
    expect(resolvedPrimitives.every((item) => item.example.length > 0)).toBe(
      true,
    );
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
          page
            .getByText(item.name, { exact: true })
            .filter({ visible: true })
            .first(),
          `${item.name} on ${route}`,
        ).toBeVisible();
      }
    }
  });

  test("no route file re-declares shared content arrays", () => {
    const routeFiles = ["app/page.tsx", "app/wiki/page.tsx"];
    for (const file of routeFiles) {
      const source = readFileSync(resolve(process.cwd(), file), "utf8");
      expect(source, file).not.toMatch(
        /^const (primitives|fieldEntries|productSurfaces)\b/m,
      );
    }
  });

  // Positioning guard (Tony's QA answers, highest authority): the public title is
  // "Product Engineer" — never "AI × Web3 Product Engineer" in a title/role — and
  // proof discipline forbids the "55 commits across 6 repos" claim. The banned-title
  // regex intentionally requires a capitalized "Product Engineer" suffix so the
  // legitimate lowercase best-fit domain chip ("AI x Web3 product") stays allowed.
  const bannedIdentityTitle = /AI\s*[×x]\s*Web3\s+Product Engineer/i;
  const bannedCommitClaim = /55\s+(public\s+)?commits/i;

  test("shipped copy keeps the Product Engineer identity and no banned claims", () => {
    const shippedFiles = [
      "app/layout.tsx",
      "app/page.tsx",
      "app/wiki/page.tsx",
    ];
    for (const file of shippedFiles) {
      const source = readFileSync(resolve(process.cwd(), file), "utf8");
      expect(
        source,
        `${file} must not use the "AI × Web3 Product Engineer" title (public title is "Product Engineer")`,
      ).not.toMatch(bannedIdentityTitle);
      expect(
        source,
        `${file} must not claim "55 commits" (evidence discipline)`,
      ).not.toMatch(bannedCommitClaim);
    }
  });

  test("home renders the Product Engineer identity, not the regressed title", async ({
    page,
  }) => {
    // Home only: the static scan above already covers app/wiki/page.tsx source,
    // and adding a /wiki navigation here just widens the cold-compile flake
    // surface (see the reciprocal view-switch test + the gate-cold memory note).
    await page.goto("/");
    const title = await page.title();
    expect(title, "home <title>").toMatch(/Product Engineer/i);
    expect(title, "home <title>").not.toMatch(bannedIdentityTitle);
    const body = (await page.locator("body").innerText()).replace(/\s+/g, " ");
    expect(body, "home body").not.toMatch(bannedIdentityTitle);
    expect(body, "home body").not.toMatch(bannedCommitClaim);
  });
});

test("view switch is reciprocal at 320px", async ({ page }) => {
  await page.setViewportSize({ width: 320, height: 900 });

  await page.goto("/");
  const toIndex = page.locator('.v4-nav a[href="/wiki"]');
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

test.describe("home sections", () => {
  test("selected work renders every case with the shared schema", async ({
    page,
  }) => {
    await page.goto("/");
    await expect(page.locator(".v4-case")).toHaveCount(homeCases.en.length);
    const first = page.locator(".v4-case").first();
    for (const label of ["Problem", "Owned", "Boundary", "Impact", "Learned"]) {
      await expect(
        first.locator(".v4-schema-label", { hasText: label }),
        label,
      ).toBeVisible();
    }
  });

  test("postmortems and ledger render with linked receipts", async ({
    page,
  }) => {
    await page.goto("/");
    await expect(page.locator(".v4-retro")).toHaveCount(homeRetro.en.length);
    const rows = page.locator(".v4-ledger-row");
    await expect(rows).toHaveCount(homeLedger.length);
    const hrefs = await rows.evaluateAll((nodes) =>
      nodes.map((node) => node.getAttribute("href")),
    );
    for (const href of hrefs) {
      expect(href, `ledger link ${href}`).toMatch(/^https?:\/\//);
    }
  });

  test("every field session links to a public receipt", async ({ page }) => {
    await page.goto("/");
    const links = page.locator(".v4-sessions a");
    await expect(links).toHaveCount(fieldSessions.length);
    const hrefs = await links.evaluateAll((nodes) =>
      nodes.map((node) => node.getAttribute("href")),
    );
    for (const href of hrefs) {
      expect(href, `field session ${href}`).toMatch(/^https?:\/\//);
    }
  });

  test("hire module exposes the contact actions", async ({ page }) => {
    await page.goto("/");
    const hire = page.locator("#hire");
    await expect(
      hire.locator("a[href='mailto:tony.base.eth@gmail.com']"),
    ).toBeVisible();
    await expect(
      hire.locator("a[href='https://x.com/tonymfer']"),
    ).toBeVisible();
    await expect(
      hire.locator("a[href='https://github.com/tonymfer']"),
    ).toBeVisible();
  });

  test("attention receipt prints when the hire section scrolls into view", async ({
    page,
  }) => {
    await page.goto("/");
    await expect(page.locator(".v4-receipt")).toHaveCount(0);
    await page.locator(".v4-receipt-col").scrollIntoViewIfNeeded();
    await expect(page.getByText("ATTENTION RECEIVED")).toBeVisible();
    await expect(page.locator(".v4-receipt-line")).toHaveCount(6);
  });

  test("language toggle swaps hero copy between EN and KR", async ({
    page,
  }) => {
    await page.goto("/");
    const heading = page.locator("h1");
    await expect(heading).toContainText("I build products");
    await page.locator(".v4-lang-toggle").click();
    await expect(heading).toContainText("시장이 아직 플레이북을");
    await expect(page.getByText("LIVE · 회사", { exact: true })).toBeVisible();
    await page.locator(".v4-lang-toggle").click();
    await expect(heading).toContainText("I build products");
  });
});

test.describe("case page images", () => {
  test("no case-page component renders a raw img element", () => {
    // Boards were extracted out of CaseMotion, so scanning that file alone would
    // let ported <img> tags escape enforcement. Scan every .tsx under the route dir.
    const dir = resolve(process.cwd(), "app/objects/[slug]");
    const tsxFiles = readdirSync(dir).filter((file) => file.endsWith(".tsx"));
    expect(
      tsxFiles.length,
      "case-page tsx scan is not vacuous",
    ).toBeGreaterThan(1);
    for (const file of tsxFiles) {
      const source = readFileSync(resolve(dir, file), "utf8");
      expect(source, file).not.toMatch(/<img\b/);
    }
  });

  test("a conforming case renders the full Wall/Fork/Resolution/Impact arc", async ({
    page,
  }) => {
    // Beeper is authored with all four canonical narrative keys, so it must render
    // the arc (not the field-notes fallback). The all-or-nothing conformance is
    // guarded by asserting each canonical step is present exactly once.
    await page.goto("/objects/beeper");
    const arc = page.locator(".narrative-arc");
    await expect(arc).toBeVisible();
    await expect(arc.locator(".narrative-step")).toHaveCount(4);
    for (const key of ["wall", "fork", "resolution", "impact"]) {
      await expect(arc.locator(`.step-${key}`), key).toHaveCount(1);
    }
  });

  test("case hero is a prioritized responsive image with stable dimensions", async ({
    page,
  }) => {
    await page.goto("/objects/beeper");
    const hero = page.locator(".case-image-wrap img");
    await expect(hero).toHaveAttribute("srcset", /\/_next\/image/);
    // The hero is above the fold, so it must not be deferred behind lazy loading.
    await expect(hero).not.toHaveAttribute("loading", "lazy");

    const box = await hero.boundingBox();
    expect(box?.width).toBeGreaterThan(0);
    expect(box?.height).toBeGreaterThan(0);
    await expect(async () => {
      const natural = await hero.evaluate(
        (image) => (image as HTMLImageElement).naturalWidth,
      );
      expect(natural).toBeGreaterThan(0);
    }).toPass({ timeout: 15_000 });
  });

  test("Beep Works frontend proof stays legible and loads at every width", async ({
    page,
  }) => {
    for (const width of [390, 1440]) {
      await page.setViewportSize({ width, height: 900 });
      await page.goto("/objects/beeper");

      for (const shot of [".desktop-shot img", ".mobile-shot img"]) {
        const image = page.locator(shot);
        await image.scrollIntoViewIfNeeded();
        await expect(image, `${shot} at ${width}px`).toHaveCSS(
          "object-fit",
          "contain",
        );
        await expect(async () => {
          const natural = await image.evaluate(
            (node) => (node as HTMLImageElement).naturalWidth,
          );
          expect(natural, `${shot} at ${width}px`).toBeGreaterThan(0);
        }).toPass({ timeout: 15_000 });
      }
    }
  });

  test("video receipts keep their external links and load their stills", async ({
    page,
  }) => {
    await page.goto("/objects/beeper");
    const cards = page.locator(".video-card");
    await expect(cards).toHaveCount(4);

    for (const href of [
      "https://x.com/baseapac/status/2062479675461603777",
      "https://x.com/baseapac/status/2062896272944845048",
      "https://x.com/tonymfer/status/1991792691198427618",
      "https://x.com/beeponbase/status/2009487314708517220",
    ]) {
      await expect(page.locator(`.video-card[href="${href}"]`)).toHaveAttribute(
        "rel",
        "noreferrer",
      );
    }

    const stills = cards.locator("img");
    await stills.first().scrollIntoViewIfNeeded();
    await expect(async () => {
      const broken = await stills.evaluateAll((images) =>
        images
          .filter((image) => (image as HTMLImageElement).naturalWidth === 0)
          .map((image) => (image as HTMLImageElement).src),
      );
      expect(broken).toEqual([]);
    }).toPass({ timeout: 15_000 });
  });

  for (const width of [390, 1440]) {
    test(`/objects/beeper has no horizontal overflow at ${width}px`, async ({
      page,
    }) => {
      await page.setViewportSize({ width, height: 900 });
      await page.goto("/objects/beeper");
      const dimensions = await page.evaluate(() => ({
        scrollWidth: document.documentElement.scrollWidth,
        innerWidth: window.innerWidth,
      }));
      expect(dimensions.scrollWidth).toBe(dimensions.innerWidth);
    });
  }
});

test("wiki has semantic section order and no broken local images", async ({
  page,
}) => {
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
      await new Promise((resolve) =>
        requestAnimationFrame(() => resolve(null)),
      );
    }
    window.scrollTo({ top: 0, behavior: "instant" });
  });

  await expect(async () => {
    const settled = await page
      .locator('img[src^="/"]')
      .evaluateAll((images) =>
        images.every((image) => (image as HTMLImageElement).complete),
      );
    expect(settled).toBe(true);
  }).toPass({ timeout: 15_000 });

  // A loaded-but-zero-width image is one that actually failed to decode or 404'd.
  const brokenLocalImages = await page
    .locator('img[src^="/"]')
    .evaluateAll((images) =>
      images
        .filter((image) => (image as HTMLImageElement).naturalWidth === 0)
        .map((image) => (image as HTMLImageElement).src),
    );
  expect(brokenLocalImages).toEqual([]);
});
