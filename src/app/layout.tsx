import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://odds.cn"),
  title: {
    default: "Odds.cn - Compare Sports Betting Odds | Best Lines & Bonuses 2025",
    template: "%s | Odds.cn",
  },
  description: "Compare betting odds from top sportsbooks instantly. Find the best NFL, NBA, MLB, NHL odds. Get exclusive bonuses up to $1,500. Updated in real-time.",
  keywords: "sports betting, odds comparison, betting odds, sportsbook reviews, NFL odds, NBA odds, MLB odds, NHL odds, betting lines, sportsbook bonuses, DraftKings, FanDuel, BetMGM",
  authors: [{ name: "Odds.cn" }],
  creator: "Odds.cn",
  publisher: "Odds.cn",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://odds.cn",
    siteName: "Odds.cn",
    title: "Odds.cn - Compare Sports Betting Odds | Best Lines & Bonuses",
    description: "Compare betting odds from top sportsbooks instantly. Find the best lines and exclusive bonuses up to $1,500.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Odds.cn - Sports Betting Odds Comparison",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Odds.cn - Compare Sports Betting Odds",
    description: "Compare betting odds from top sportsbooks. Find the best lines and bonuses.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google-site-verification-code",
  },
};

// JSON-LD Structured Data
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Odds.cn",
  description: "Compare sports betting odds from top sportsbooks",
  url: "https://odds.cn",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://odds.cn/search?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Odds.cn",
  url: "https://odds.cn",
  logo: "https://odds.cn/logo.png",
  sameAs: [
    "https://twitter.com/oddscn",
    "https://facebook.com/oddscn",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    availableLanguage: ["English"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased bg-zinc-950 text-zinc-100 min-h-screen flex flex-col`}>
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
