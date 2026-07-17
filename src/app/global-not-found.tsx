import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { LocalizedNotFound } from "@/components/localized-not-found";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  display: "swap",
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Page not found | Resolution Hub",
};

export default function GlobalNotFound() {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <LocalizedNotFound />
      </body>
    </html>
  );
}
