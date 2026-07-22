import type { Metadata } from "next";
import { Oswald } from "next/font/google";
import PageTransitionOverlay from "@/components/PageTransitionOverlay";
import "./globals.css";

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-oswald",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Auromous — Herbal Skin & Hair Care, Engineered For Global Brands",
  description:
    "Auromous is a B2B supplier of premium herbal cosmetic raw materials — clays, botanical hair care actives, and skincare phyto-actives — with private-label, custom packaging, and worldwide export logistics.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className={oswald.variable}>
      <body>
        {children}
        <PageTransitionOverlay />
      </body>
    </html>
  );
}
