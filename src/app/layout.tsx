import type { Metadata } from "next";
import localFont from "next/font/local";
import { Inter, Caveat, IBM_Plex_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
const instrumentSerif=localFont({src:[{path:"../../fonts/InstrumentSerif-Regular.ttf",weight:"400",style:"normal"},{path:"../../fonts/InstrumentSerif-Italic.ttf",weight:"400",style:"italic"}],variable:"--font-heading"});
const inter=Inter({subsets:["latin"],variable:"--font-body"});const caveat=Caveat({subsets:["latin"],variable:"--font-handwriting"});const ibmPlexMono=IBM_Plex_Mono({subsets:["latin"],weight:["400","500"],variable:"--font-code"});
export const metadata:Metadata={title:"Masie Junior Seremu | Software Engineer",description:"Software engineer building full-stack, mobile and geospatial products for real-world problems.",openGraph:{title:"Masie Junior Seremu | Software Engineer",description:"Full-stack, mobile and geospatial software built around real-world problems.",url:"https://masieseremu.co.za",siteName:"Masie Junior Seremu"}};
export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){return <html lang="en" className={`${inter.variable} ${caveat.variable} ${ibmPlexMono.variable} ${instrumentSerif.variable} antialiased`}><body>{children}<Analytics/></body></html>}