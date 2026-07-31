import "./globals.css";
import Navbar from "@/components/layout/navbar/Navbar";
import { Playfair_Display, Parisienne, Inter } from "next/font/google";

const heading = Playfair_Display({
  subsets: ["latin"],
  weight: ["700", "800", "900"],
  variable: "--font-heading",
});

const script = Parisienne({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-script",
});

const body = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`
${heading.variable}
${body.variable}
${script.variable}
`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
