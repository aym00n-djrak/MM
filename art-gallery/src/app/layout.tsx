import Header from "@/components/layout/header";
import "./globals.css";
import { Inter } from "next/font/google";
import { ReactNode } from "react";
import Footer from "@/components/layout/footer";

const inter = Inter({ subsets: ["latin"] });

type RootLayoutProps = {
  children: ReactNode;
}

export default function RootLayout({
  children
}: RootLayoutProps) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
