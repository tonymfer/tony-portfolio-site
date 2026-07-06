import type { Metadata } from "next";
import { Geist, Geist_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const displayFont = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://tonypark.xyz";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Tony Park — Product Engineer",
    template: "%s — Tony Park",
  },
  description:
    "Tony Park is a product engineer who reads markets early, shapes the product and brand, designs the interface, and ships public proof — across Mint Club, Hunt Town, Beeper, TradeFish, and Base/Farcaster.",
  keywords: [
    "Tony Park",
    "tonymfer",
    "Product Engineer",
    "Base",
    "Farcaster",
    "Beeper",
    "TradeFish",
    "AI agents",
    "Web3 UX",
  ],
  authors: [{ name: "Tony Park", url: "https://x.com/tonymfer" }],
  creator: "Tony Park",
  openGraph: {
    title: "Tony Park — Product Engineer",
    description:
      "Reads markets early, shapes product and brand, designs the interface, and ships public proof — Base/Farcaster, paid attention, token UX, and AI-agent product work.",
    type: "website",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Tony Park portfolio preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tony Park — Product Engineer",
    description:
      "Market sense, product direction, design taste, and shipped proof — Mint Club, Hunt Town, Beeper, TradeFish, Base/Farcaster.",
    creator: "@tonymfer",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${displayFont.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
