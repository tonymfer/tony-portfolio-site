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

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://tony-portfolio-site-zeta.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Tony Park — AI × Web3 Product Engineer",
    template: "%s — Tony Park",
  },
  description:
    "Tony Park turns rough crypto and AI primitives into shipped product loops: HUNT / Mint Club surfaces, Beeper, TradeFish, far.cards, TapTato, and Base/Farcaster products backed by public proof.",
  keywords: ["Tony Park", "tonymfer", "Product Engineer", "Base", "Farcaster", "Beeper", "TradeFish", "AI agents", "Web3 UX"],
  authors: [{ name: "Tony Park", url: "https://x.com/tonymfer" }],
  creator: "Tony Park",
  openGraph: {
    title: "Tony Park — AI × Web3 Product Engineer",
    description:
      "Selected products, demos, video clips, and postmortems from shipped Base/Farcaster, paid attention, and AI-agent product loops.",
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Tony Park portfolio preview" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tony Park — AI × Web3 Product Engineer",
    description: "HUNT / Mint Club, Beeper, TradeFish, far.cards, TapTato, and public proof from shipped product loops.",
    creator: "@tonymfer",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} ${displayFont.variable}`}>{children}</body>
    </html>
  );
}
