import Image from "next/image";
import { RoughNotation } from "react-rough-notation";

export default function Projects() {
  const projects = [
    {
      id: 1,
      name: "Film-Process",
      description:
        "A full-stack Next.js 15 application for managing commercial film processing orders, customer workflows, and financial reporting.",
      stack: ["Next.js", "PostgreSQL", "Cloudflare"],
      link: "https://film-process.masieseremu.co.za",
      image: "/projects/fotofirst.webp",
      colour: "#008404",
    },
    {
      id: 2,
      name: "UniConnect",
      description:
        "A university platform designed to help university students with day-to-day student life.",
      stack: ["React", "Flutter", "Node.js"],
      link: "https://github.com/MasieJr",
      image: "/projects/uniconnect.webp",
      colour: "#00e5ff",
    },
    {
      id: 3,
      name: "African Logistics",
      description:
        "A full-stack gaming-community website showing information about the VTC - African Logistics.",
      stack: ["Next.js", "API", "Prisma"],
      link: "https://africanlogistics.co.za",
      image: "/projects/alvtc.webp",
      colour: "#ff7700",
    },
  ];

  return (
    <section id="projects">
      <h2 className="text-2xl sm:text-3xl ">
        <RoughNotation animate={false} type="underline" show={true}>
          Things I've built:
        </RoughNotation>
      </h2>

      <div className="relative flex flex-wrap justify-center mt-5 gap-10 ">
        {projects.map((proj) => (
          <div
            key={proj.id}
            style={{ color: proj.colour }}
            className="projects flex flex-col w-full sm:w-[350px] flex-grow max-w-[450px] p-6 mb-5 text-center shadow-xl/30"
          >
            <span className="handwritten text-4xl mb-6">
              <RoughNotation
                animate={false}
                type="circle"
                show={true}
                padding={10}
              >
                {proj.id}
              </RoughNotation>
            </span>

            <div className="w-full relative h-[200px] shrink-0">
              <Image
                src={proj.image}
                alt={proj.name}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover"
              />
            </div>

            <h3 className="text-2xl sm:text-3xl mt-4">
              <RoughNotation animate={false} type="underline" show={true}>
                {proj.name}
              </RoughNotation>
            </h3>

            <div className="code-font text-xl md:text-2xl mt-4 flex-grow text-gray-800">
              {proj.description}
            </div>

            <div className="flex flex-wrap gap-4 items-center justify-center my-6">
              {proj.stack.map((item) => (
                <span
                  key={item}
                  className="bg-[#fffab2] shadow-sm px-3 py-1 text-base min-w-[100px] text-center rounded-md text-gray-800 font-medium"
                >
                  {item}
                </span>
              ))}
            </div>

            <a
              className="handwritten text-3xl md:text-4xl text-center mt-auto"
              href={proj.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <RoughNotation animate={false} show={true} type="underline">
                View Project
              </RoughNotation>
            </a>
            <Image
              src={"/doodles/clip.svg"}
              alt="PaperClip"
              width={80}
              height={100}
              className="absolute -top-5 right-1 -rotate-30 h-auto w-[80px]"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
