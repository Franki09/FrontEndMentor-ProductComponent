import type { Metadata } from "next";
import { Geist, Geist_Mono, Montserrat, Fraunces } from "next/font/google";
import "./globals.css";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: "--font-montserrat",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-fraunces",
});

export const metadata: Metadata = {
  title: "Perfume Product Page",
  description: "Frontend Mentor Challenge - Perfume Product Page",
  icons: "/favicon-32x32.png",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} ${montserrat.variable} ${fraunces.variable}`}>
      <body>
        {children}
        <ToastContainer />
      </body>
    </html>
  );
}
