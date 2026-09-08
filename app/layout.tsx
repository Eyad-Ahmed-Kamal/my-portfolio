import type { Metadata } from "next";
import { Inter, Instrument_Serif, JetBrains_Mono } from "next/font/google";
import { SITE_NAME, SITE_URL } from "@/lib/site";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

/** Editorial display face. Used only for section-opening lines, never body copy. */
const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-display",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  alternates: { canonical: "/" },
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
  title: "Eyad Ahmed | AI & Data Science Student · Zagazig University",
  description:
    "Eyad Ahmed — second-year AI & Data Science student at Zagazig University, working toward machine learning, with a foundation in dimensional data modeling, Power BI, DAX, and algorithmic problem solving in C++.",
  keywords: [
    "Eyad Ahmed",
    "Eyad Ahmed Kamal Mostafa",
    "AI Student",
    "Machine Learning",
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
    title: "Eyad Ahmed | AI & Data Science Student · Zagazig University",
    description:
      "Second-year AI & Data Science student at Zagazig University, working toward machine learning, with a foundation in data modeling and algorithms.",
    url: SITE_URL,
    siteName: SITE_NAME,
    images: [
      {
        url: "/uploads/dash-executive-summary.jpg",
        width: 1600,
        height: 901,
        alt: "Executive Summary page of the UK Train Rides Power BI report: 741.9K revenue, 32K rides, 86.8 percent on time",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Eyad Ahmed | AI & Data Science Student · Zagazig University",
    description:
      "Second-year AI & Data Science student working toward machine learning, with a foundation in data modeling and algorithms.",
    images: ["/uploads/dash-executive-summary.jpg"],
  },
};

/**
 * Structured data so search engines and LinkedIn resolve the page to a person
 * rather than an untyped document. Every claim here is one the page already
 * makes in visible copy.
 */
const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Eyad Ahmed Kamal Mostafa",
  alternateName: "Eyad Ahmed",
  url: SITE_URL,
  image: `${SITE_URL}/uploads/eyad_portrait.jpeg`,
  email: "mailto:eyadahmedkamalego76@gmail.com",
  jobTitle: "AI & Data Science Student",
  description:
    "Second-year AI & Data Science student at Zagazig University, working toward machine learning, with a foundation in data modeling and algorithms.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Zagazig",
    addressCountry: "EG",
  },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Zagazig University",
    description: "Faculty of Computers and Information — AI & Data Science",
  },
  knowsAbout: [
    "Data Modeling",
    "Business Intelligence",
    "Power BI",
    "DAX",
    "Star Schema Data Modeling",
    "C++",
    "Python",
  ],
  sameAs: [
    "https://github.com/Eyad-Ahmed-Kamal",
    "https://linkedin.com/in/eyad-ahmed-76ai",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${instrumentSerif.variable} ${jetbrainsMono.variable}`}
    >
      <body className="bg-ground text-ink min-h-screen antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
