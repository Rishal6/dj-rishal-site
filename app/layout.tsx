import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { brand, siteOrigin } from "@/content/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteOrigin),
  title: {
    default: "DJ Rishal | Chennai DJ for College Fests, Weddings & Events",
    template: "%s"
  },
  description: brand.summary,
  applicationName: brand.name,
  authors: [{ name: brand.name }],
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
