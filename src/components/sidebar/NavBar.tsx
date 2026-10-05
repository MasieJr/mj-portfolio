"use client";
import { ArrowUpRight } from "lucide-react";
export default function NavBar() {
  return <header className="sticky top-0 z-50 border-b border-black/10 bg-[#f4efe6]/90 backdrop-blur-md">
    <div className="mx-auto flex h-20 max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-12">
      <a href="#home" className="heading-font text-3xl">MJ<span className="text-[#e9501b]">.</span></a>
      <nav className="hidden items-center gap-8 text-sm md:flex"><a className="hover:opacity-55" href="#work">Work</a><a className="hover:opacity-55" href="#about">About</a><a className="hover:opacity-55" href="#stack">Stack</a></nav>
      <a href="https://linkedin.com/in/MasieJr" target="_blank" rel="noreferrer" className="code-font flex items-center gap-2 rounded-full border border-black/20 px-4 py-2 text-xs transition hover:bg-black hover:text-white">Let&apos;s talk <ArrowUpRight size={14}/></a>
    </div>
  </header>;
}