import type { Metadata } from "next";
import { Inter } from "next/font/google";
import type { ReactNode } from "react";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "Renova Gayrimenkul | Güvenilir Emlak Danışmanınız",
  description:
    "Renova Gayrimenkul ile İstanbul'da güvenilir emlak danışmanlığına ulaşın. Güncel ilanlar ve uzman ekip desteğiyle taşınmaz işlemlerinizde yanınızdayız.",
  metadataBase: new URL("https://renovagayrimenkul.com"),
  openGraph: {
    title: "Renova Gayrimenkul",
    description:
      "İstanbul'da güvenilir emlak danışmanlığı ve seçili portföyler. Renova Gayrimenkul uzmanları ile tanışın.",
    url: "https://renovagayrimenkul.com",
    siteName: "Renova Gayrimenkul",
    locale: "tr_TR",
    type: "website"
  }
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="tr">
      <body className={`${inter.className} bg-slate-50 text-slate-900`}>{children}</body>
    </html>
  );
}
