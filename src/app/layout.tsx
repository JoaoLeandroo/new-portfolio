import type { Metadata } from "next";
import { Poppins, Bungee } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const fontPoppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

const fontAnton = Bungee({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-anton",
});

export const metadata: Metadata = {
  title: "João Leandro | Desenvolvedor Full Stack",
  description: "Portfólio de João Leandro, desenvolvedor Full Stack com React, Next.js, TypeScript e Node.js. Conheça aplicações web, APIs e os detalhes de cada projeto.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" data-theme="lofi">
      <body
        className={`${fontPoppins.className} ${fontAnton.variable} antialiased selection:bg-yellow-400 selection:text-black`}
      >
        <div className="flex flex-col min-h-screen">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
