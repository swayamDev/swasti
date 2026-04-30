import type { Metadata } from "next";
import { Libre_Caslon_Display, Libre_Franklin } from "next/font/google";
import "./globals.css";

const libreFranklin = Libre_Franklin({
  variable: "--font-libre-franklin",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const libreCaslonDisplay = Libre_Caslon_Display({
  variable: "--font-libre-caslon-display",
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

export const metadata: Metadata = {
  title: "Swasti | AI/ML Engineer & Data Scientist",
  description:
    "Portfolio of Swasti — AI/ML Engineer specializing in machine learning, deep learning, NLP, and data engineering. Building intelligent systems with Python, TensorFlow, and modern AI tools.",
  keywords: [
    "AI",
    "Machine Learning",
    "Data Science",
    "NLP",
    "TensorFlow",
    "Python",
  ],
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.svg",
      },
    ],
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${libreFranklin.variable} ${libreCaslonDisplay.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
