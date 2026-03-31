import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const playfairDisplay = Playfair_Display({subsets:['latin'],variable:'--font-serif'});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

import { SITE_INFO } from "@/lib/portfolio/config/site";

export const metadata: Metadata = {
  title: {
    default: SITE_INFO.name,
    template: `%s | ${SITE_INFO.name}`,
  },
  description: SITE_INFO.description,
  keywords: SITE_INFO.keywords,
};

import { Providers } from "@/components/providers";
import { DuckFollower } from "@/components/custom/portfolio/duck-follower";
import { SiteHeader } from "@/components/custom/portfolio/site-header";
import { SiteFooter } from "@/components/custom/portfolio/site-footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(
        "h-full",
        "antialiased",
        geistSans.variable,
        geistMono.variable,
        "font-serif",
        playfairDisplay.variable
      )}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col font-sans">
        <Providers>
          <div className="group/layout overflow-x-hidden">
            <SiteHeader />
            <main className="max-w-screen overflow-x-hidden px-2">{children}</main>
            <SiteFooter />
            <DuckFollower />
          </div>
        </Providers>
      </body>
    </html>
  );
}
