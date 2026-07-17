import type { Metadata } from "next";
import localFont from "next/font/local";
import { Inter, Caveat, IBM_Plex_Mono } from "next/font/google";
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
  title: "Mj-Portifolio",
  description: "Personal Website",
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
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
