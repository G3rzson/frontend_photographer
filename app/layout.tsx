import type { Metadata } from "next";
import "./globals.css";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";
import Header from "@/features/Header/Components/Header";
import Footer from "@/features/Footer/Footer";
import { ThemeProvider } from "next-themes";
import { Toaster } from "@/components/ui/sonner";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Photographer Portfolio",
  description:
    "Modern és elegáns portfólió weboldal fotósok számára, hogy bemutathassák munkáikat és vonzzák az ügyfeleket.",
  metadataBase: new URL("https://frontend-photographer.vercel.app"),
  openGraph: {
    title: "Fotós Portfólió - Profi Fotók",
    description: "Portfólió a legjobb fotókkal",
    url: "https://frontend-photographer.vercel.app",
    images: ["/og-image.png"], // optimális méret: 1200x630 px
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="hu"
      suppressHydrationWarning
      className={cn("font-sans", geist.variable)}
    >
      <body className="min-h-screen flex flex-col">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />
          <main className="flex flex-col grow md:w-4/5 w-full mx-auto sm:px-0 p-4">
            {children}
          </main>
          <Footer />
          <Toaster position="top-right" />
        </ThemeProvider>
      </body>
    </html>
  );
}
