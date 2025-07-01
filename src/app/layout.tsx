import type { Metadata } from "next";
import { Poppins, Anton } from "next/font/google";
import "./globals.css";

const fontPoppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

const fontAnton = Anton({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-anton",
});

export const metadata: Metadata = {
  title: "João Leandro - Portfólio",
  description: "Criando soluções para o mundo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${fontPoppins.className} ${fontAnton.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
