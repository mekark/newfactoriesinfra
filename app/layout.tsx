import type { Metadata } from "next";

import {
  Geist,
  Geist_Mono,
  Archivo,
  Manrope,
  Inter,
} from "next/font/google";

import Script from "next/script";

import "./globals.css";

import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["700", "900"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["500"],
});

const GTM_ID = "GTM-MV5X72P4";

export const metadata: Metadata = {
  title: "Inbuilt Infra | End-to-End Turnkey Factory Construction",

  description:
    "Precision-driven industrial turnkey projects for global-standard factories, manufacturing plants, and heavy engineering facilities.",

  icons: {
    icon: "/Images/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`
        h-full
        antialiased
        scroll-smooth

        ${geistSans.variable}
        ${geistMono.variable}
        ${archivo.variable}
        ${manrope.variable}
        ${inter.variable}
      `}
    >
      <body className="min-h-full flex flex-col bg-black text-white">
        {/* GOOGLE TAG MANAGER */}
        <Script
          id="google-tag-manager"
          strategy="beforeInteractive"
        >
          {`
            (function(w,d,s,l,i){
              w[l]=w[l]||[];
              w[l].push({
                'gtm.start': new Date().getTime(),
                event:'gtm.js'
              });

              var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),
              dl=l!='dataLayer'?'&l='+l:'';

              j.async=true;

              j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;

              f.parentNode.insertBefore(j,f);

            })(window,document,'script','dataLayer','${GTM_ID}');
          `}
        </Script>

        {/* GTM NOSCRIPT */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{
              display: "none",
              visibility: "hidden",
            }}
          />
        </noscript>

        {/* GLOBAL NAVBAR */}
        <Navbar />

        {/* PAGE CONTENT */}
        {children}
      </body>
    </html>
  );
}