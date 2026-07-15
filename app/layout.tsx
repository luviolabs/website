import type { Metadata } from "next";
import { JetBrains_Mono, Manrope, Sora } from "next/font/google";
import { Footer } from "./components";
import { Header } from "./header";
import { PremiumCursor } from "./components/premium-cursor";
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
      className={`${sora.variable} ${manrope.variable} ${jetBrainsMono.variable}`}
    >
      <body>
        <script
          // set initial theme as early as possible
          dangerouslySetInnerHTML={{
            __html: `(() => {
  try {
    const stored = localStorage.getItem('theme');
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const theme = stored === 'light' || stored === 'dark' ? stored : (prefersDark ? 'dark' : 'light');
    document.documentElement.setAttribute('data-theme', theme);
  } catch (e) {}
})();`,
          }}
        />
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
        >
          <svg
            className="floating-whatsapp__icon"
            viewBox="0 0 30 30"
            aria-hidden="true"
            focusable="false"
          >
            <path d="M15 3.2c-6.2 0-11.3 5-11.3 11.2 0 2 .5 3.9 1.5 5.6L3 29l9-1.9c1.3.6 2.8.9 4.4.9 6.2 0 11.3-5 11.3-11.2C27.7 8.2 21.7 3.2 15 3.2Z" fill="currentColor" />
            <path d="M10.3 9.7c-.2-.5-.4-.5-.6-.5h-.5c-.2 0-.5.1-.7.4-.2.2-.9.9-.9 2.2 0 1.3.9 2.6 1 2.8.1.2 1.7 2.7 4.1 3.7 2 .8 2.4.7 2.9.6.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.1-1.2-.1-.1-.3-.2-.7-.4-.4-.2-1.9-.9-2.2-1-.3-.1-.5-.1-.7.2-.2.3-.8 1-.9 1.1-.1.2-.3.2-.6.1-.3-.1-1.2-.4-2.3-1.4-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.4.1-.6.1-.1.3-.3.4-.5.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5Z" fill="currentColor" />
          </svg>
        </a>
      </body>
    </html>
  );
}

