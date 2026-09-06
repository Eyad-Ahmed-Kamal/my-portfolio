import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://eyadahmed.me"),
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
  title: "Eyad Ahmed | BI & Star Schema Architect · AI & Data Science",
  description:
    "Portfolio of Eyad Ahmed Kamal Mostafa — AI & Data Science undergraduate at Zagazig University, Business Intelligence & Star Schema Architect, DAX specialist, and ECPC competitive programmer.",
  keywords: [
    "Eyad Ahmed",
    "Eyad Ahmed Kamal Mostafa",
    "Business Intelligence",
    "Power BI",
    "DAX",
    "Star Schema",
    "Data Modeling",
    "AI Data Science",
    "Zagazig University",
    "ECPC",
    "Competitive Programming",
  ],
  authors: [{ name: "Eyad Ahmed Kamal Mostafa" }],
  openGraph: {
    title: "Eyad Ahmed | BI & Star Schema Architect · AI & Data Science",
    description:
      "Turning raw transactional data into governed models executives actually trust. Power BI, DAX, Star Schema, and Algorithmic Rigor.",
    url: "https://eyadahmed.me",
    siteName: "Eyad Ahmed Portfolio",
    images: [
      {
        url: "/uploads/Enhance_image_quality_to_professional_202605301343.jpeg",
        width: 1200,
        height: 630,
        alt: "Eyad Ahmed Kamal Mostafa",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Eyad Ahmed | BI & Star Schema Architect · AI & Data Science",
    description:
      "Turning raw transactional data into governed models executives actually trust.",
    images: ["/uploads/Enhance_image_quality_to_professional_202605301343.jpeg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="bg-[#0B0F17] text-[#E8EDF5] min-h-screen antialiased selection:bg-cyan-500/25 selection:text-white">
        {children}
      </body>
    </html>
  );
}
