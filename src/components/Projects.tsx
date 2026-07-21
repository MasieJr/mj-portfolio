import Image from "next/image";
import { RoughNotation } from "react-rough-notation";

export default function Projects() {
  const projects = [
    {
      id: 1,
      name: "Film-Process",
      description:
        "A full-stack Next.js 15 application for managing commercial film processing orders, customer workflows, and financial reporting",
      stack: ["NextJs", "PostgreSQL", "Cloudfare"],
      link: "https://github.com/MasieJr/Film-Processing",
      image: "/projects/fotofirst.webp",
    },
    {
      id: 2,
      name: "UniConnect",
      description:
        "A university platform designed to help university students with the day to day student life.",
      stack: ["React", "Flutter", "NodeJS"],
      link: "https://github.com/MasieJr",
      image: "/projects/uniconnect.webp",
    },
    {
      id: 3,
      name: "Car rental Website",
      description:
        "A full-stack car rental platform supporting customer bookings, invoice generation, and administrator workflows.",
      stack: ["React", "NodeJS", "MySql"],
      link: "https://github.com/MasieJr",
      image: "",
    },
  ];
  return (
    <section id="projects">
      <h2 className="text-2xl sm:text-3xl">
        <RoughNotation animate={false} type="underline" show={true}>
          Things I've built:
        </RoughNotation>
      </h2>

      <div className="flex flex-wrap justify-center mt-5 gap-6">
        {projects.map((proj) => (
          <div
            key={proj.id}

            className="projects flex flex-col w-full sm:w-[350px] flex-grow max-w-[450px] p-5 text-center"
          >
            <span>{proj.id}</span>

            <div className="w-full relative h-[200px] shrink-0">
              <Image
                src={proj.image}
                alt={proj.name}
                fill
                className="object-cover"
              />
            </div>

            <h3 className="text-2xl sm:text-3xl mt-4">
              <RoughNotation animate={false} type="underline" show={true}>
                {proj.name}
              </RoughNotation>
            </h3>

            <div className="code-font text-xl md:text-2xl mt-4 flex-grow">
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
          </div>
        ))}
      </div>
    </section>
  );
}
