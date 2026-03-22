import type { Metadata } from "next";
import "./globals.css";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";
import Header from "@/features/Header/Components/Header";
import Footer from "@/features/Footer/Footer";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Photographer Portfolio",
  description:
    "Modern és elegáns portfólió weboldal fotósok számára, hogy bemutathassák munkáikat és vonzzák az ügyfeleket.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hu" className={cn("font-sans", geist.variable)}>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex flex-col grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
