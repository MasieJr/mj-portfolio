import type { Metadata } from "next";
import localFont from "next/font/local";
import { Inter, Caveat, IBM_Plex_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const instrumentSerif = localFont({
  src: [
    {
      path: "../../fonts/InstrumentSerif-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../fonts/InstrumentSerif-Italic.ttf",
      weight: "400",
      style: "italic",
    },
  ],
  variable: "--font-heading",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-handwriting",
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-code",
});

export const metadata: Metadata = {
  title: "Masie Junior Seremu | Software Engineer",
  description:
    "Full-stack software developer specializing in React, Next.js, and mobile applications.",
  openGraph: {
    title: "Masie Junior Seremu",
    description: "Welcome to my digital portfolio.",
    url: "https://masieseremu.co.za",
    siteName: "Masie Junior Seremu",
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
      className={`${inter.variable} ${caveat.variable} ${ibmPlexMono.variable} ${instrumentSerif.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
