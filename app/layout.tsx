import type { Metadata } from "next";
import Script from "next/script";
import { JetBrains_Mono, Manrope, Sora } from "next/font/google";
import { FaWhatsapp } from "react-icons/fa";
import { Footer } from "./components";
import { Header } from "./header";
import { PremiumCursor } from "./components/premium-cursor";
import { BackgroundEffect } from "./components/background-effects";
import "./globals.css";



const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: "variable",
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: "variable",
  display: "swap",
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: "variable",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Luvio Labs | Software, AI Automation & Growth",
  description:
    "Luvio Labs builds high-performance software, AI automation, and digital growth systems for ambitious businesses.",
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }, { url: "/favicon.ico", sizes: "48x48" }],
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      data-theme="dark"
      className={`${sora.variable} ${manrope.variable} ${jetBrainsMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="shortcut icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/favicon.svg" />
      </head>
      <body suppressHydrationWarning>
        <Script
          id="theme-init"
          strategy="beforeInteractive"
          // set initial theme as early as possible (before React hydrates)
          dangerouslySetInnerHTML={{
            __html: `(() => {
  try {
    const stored = localStorage.getItem('theme');
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const theme = stored === 'light' || stored === 'dark'
      ? stored
      : (prefersDark ? 'dark' : 'light');

    // Only set if different to reduce DOM churn during hydration.
    const current = document.documentElement.getAttribute('data-theme');
    if (current !== theme) document.documentElement.setAttribute('data-theme', theme);
  } catch (e) {}
})();`,
          }}
        />
        <noscript />

        <BackgroundEffect />
        <Header />
        <main>{children}</main>
        <PremiumCursor />
        <Footer />
        <a
          className="floating-whatsapp"
          href="https://api.whatsapp.com/send/?phone=94766433434&text&type=phone_number&app_absent=0"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          data-whatsapp-button
        >
          <FaWhatsapp
            className="floating-whatsapp__icon"
            aria-hidden="true"
            focusable="false"
          />
        </a>
      </body>
    </html>
  );
}

