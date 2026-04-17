import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Oak City Media — Web, Video & Photo for Raleigh Businesses",
  description:
    "Hand-coded websites, video production, brand photography, and AI integration for local businesses across the Triangle. No WordPress. No templates. Everything custom.",
  keywords: [
    "web design raleigh",
    "raleigh web designer",
    "local business website",
    "triangle web design",
    "raleigh video production",
    "brand photography raleigh",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&family=DM+Sans:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
