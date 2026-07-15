import type { Metadata } from "next";
import {
  Bricolage_Grotesque,
  Doto,
  IBM_Plex_Mono,
  Instrument_Sans,
} from "next/font/google";
import "./globals.css";

const geistSans = Instrument_Sans({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = IBM_Plex_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600"],
});

const displayFont = Bricolage_Grotesque({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

// LCD face for the HeroPager receipt screen.
const lcdFont = Doto({
  variable: "--font-lcd",
  subsets: ["latin"],
  display: "swap",
  weight: ["500", "700", "900"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://tonypark.xyz";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Tony Park — Product Engineer",
    template: "%s — Tony Park",
  },
  description:
    "Tony Park turns rough crypto and AI primitives into shipped product loops: HUNT / Mint Club surfaces, Beeper, TradeFish, far.cards, TapTato, and Base/Farcaster products backed by public proof.",
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
      "Selected products, demos, video clips, and postmortems from shipped Base/Farcaster, paid attention, and AI-agent product loops.",
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
      "HUNT / Mint Club, Beeper, TradeFish, far.cards, TapTato, and public proof from shipped product loops.",
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
        className={`${geistSans.variable} ${geistMono.variable} ${displayFont.variable} ${lcdFont.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
