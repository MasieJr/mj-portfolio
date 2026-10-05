const groups = [
  ["Frontend", "React · Next.js · TypeScript · Tailwind CSS"],
  ["Backend", "Node.js · NestJS · Express · Prisma"],
  ["Data", "PostgreSQL · MySQL · PostGIS · Supabase"],
  ["Mobile & maps", "Flutter · Dart · MapLibre"],
];
export default function About() {
 return <section id="about" className="border-t border-black/15 py-20 sm:py-28">
  <div className="grid gap-14 lg:grid-cols-2">
   <div><p className="section-kicker">About me</p><h2 className="heading-font mt-4 max-w-xl text-5xl leading-[.95] sm:text-7xl">The interesting part is rarely just the code.</h2></div>
   <div className="space-y-6 text-lg leading-8 text-black/65"><p>I&apos;m a Computer Science graduate who enjoys turning messy, real-world problems into useful software. I care about the people using it, the data available, and the constraints that make the problem difficult.</p><p>That&apos;s why my strongest work ranges from digitising an operational workflow at Foto First to mapping and routing South Africa&apos;s informal minibus-taxi network.</p><p className="handwritten pt-4 text-3xl text-[#e9501b]">I engineer the journey.</p></div>
  </div>
  <div id="stack" className="mt-20 border-t border-black/15 pt-8"><p className="section-kicker mb-8">Tools I reach for</p><div className="grid sm:grid-cols-2 lg:grid-cols-4">{groups.map(([title,value],index)=><div key={title} className={"py-6 sm:p-6 border-black/15 "+(index!==0?"border-t sm:border-l sm:border-t-0":"")}><p className="code-font text-xs uppercase tracking-widest text-black/45">{title}</p><p className="mt-4 leading-7">{value}</p></div>)}</div></div>
 </section>
}