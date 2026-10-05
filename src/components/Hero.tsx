import { ArrowDownRight, ArrowUpRight, Download } from "lucide-react";
export default function Hero() {
 return <section id="home" className="border-b border-black/15 py-16 sm:py-24 lg:py-32"><div className="grid gap-14 lg:grid-cols-[1.45fr_.55fr] lg:items-end">
 <div><p className="section-kicker mb-7">Software Engineer · Johannesburg, South Africa</p>
 <h1 className="heading-font max-w-5xl text-[clamp(4rem,9vw,9rem)] leading-[.82] tracking-[-.055em]">I build software for <span className="italic text-[#e9501b]">real-world </span>problems.</h1>
 <p className="mt-10 max-w-2xl text-lg leading-8 text-black/65 sm:text-xl">I&apos;m Masie Junior Seremu. I build full-stack and mobile products—from digitising commercial workflows to making South Africa&apos;s informal public transport easier to navigate.</p>
 <div className="mt-10 flex flex-wrap gap-3"><a href="#work" className="flex items-center gap-2 rounded-full bg-black px-6 py-3 text-sm text-white">Explore my work <ArrowDownRight size={16}/></a><a href="/documents/mj.pdf" target="_blank" className="flex items-center gap-2 rounded-full border border-black/20 px-6 py-3 text-sm">CV <Download size={15}/></a></div></div>
 <div className="lg:pb-2"><div className="border-l border-black/20 pl-6"><div className="mb-10"><span className="mb-3 block h-2.5 w-2.5 rounded-full bg-green-600"/><p className="code-font text-xs uppercase tracking-widest text-black/45">Current status</p><p className="mt-2 text-lg">Open to graduate &amp; junior software engineering opportunities.</p></div><a href="https://github.com/MasieJr" target="_blank" rel="noreferrer" className="code-font inline-flex items-center gap-2 text-sm underline underline-offset-4">github.com/MasieJr <ArrowUpRight size={14}/></a></div></div>
 </div></section>;
}