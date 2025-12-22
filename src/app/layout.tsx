import type { Metadata } from "next";
import { Inter, Montserrat, Oswald } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
});

export const metadata: Metadata = {
  title: "Adarsh Road Carrier (ARC) | The Future of Logistics",
  description: "Redefining logistics with innovative, cost-effective solutions. FTL, PTL, ODC, and Project Logistics across India.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${montserrat.variable} ${oswald.variable} antialiased font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
