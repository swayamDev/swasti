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
