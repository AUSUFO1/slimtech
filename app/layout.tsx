import type { Metadata } from "next";
import { Geist, Geist_Mono, Red_Hat_Display } from "next/font/google";
import "./globals.css";

import Header from "@/app/component/splash/Header";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const redHatDisplay = Red_Hat_Display({
  variable: "--font-red-hat",
  subsets: ["latin"],
  weight: ["400", "700", "800"],
  display: "swap",
});

/* SEO METADATA */
export const metadata: Metadata = {
  title: {
    default: "SlimTech Mentorship School",
    template: "%s | SlimTech Mentorship School",
  },
  description:
    "Where Tech Dreams Emerge.",
  keywords: [
    "SlimTech",
    "Tech mentorship",
    "Web development school",
    "Frontend development",
    "Data Analysis mentorship",
    "React training",
    "AI training",
    "Programming school Nigeria",
  ],
  authors: [{ name: "SlimTech" }],
  creator: "SlimTech",
  publisher: "SlimTech",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },

  openGraph: {
    title: "SlimTech Mentorship School",
    description:
      "Where Tech Dreams Emerge. Learn by building real-world projects with expert mentors.",
    url: "https://slimtech.onrender.com/", 
    siteName: "SlimTech Mentorship School",
    images: [
      {
        url: "/images/hero.jpg", 
        width: 1200,
        height: 630,
        alt: "SlimTech Mentorship School",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "https://slimtech.onrender.com/",
    description:
      "Where Tech Dreams Emerge. Learn modern tech skills with hands-on mentorship.",
    images: ["/images/hero.jpg"],
  },
};

/* ROOT LAYOUT */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`
          ${geistSans.variable}
          ${geistMono.variable}
          ${redHatDisplay.variable}
          antialiased
        `}
      >
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
