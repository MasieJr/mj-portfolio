"use client";

import { RoughNotation } from "react-rough-notation";
import SketchyLine from "./SketchyLine";
import StickyNote from "./StickyNote";
import {
  ArrowRight,
  CodeXml,
  Database,
  Download,
  Monitor,
  Smartphone,
  Star,
  TerminalSquare,
} from "lucide-react";
import PaperButton from "./PaperButton";
import Image from "next/image";
import IconText from "./IconText";
import TextHeading from "./TextHeading";

export default function Hero() {
  const projects = [
    {
      id: 1,
      name: "Film-Process",
      description:
        "A full-stack Next.js 15 application for managing commercial film processing orders, customer workflows, and financial reporting",
      stack: ["NextJs", "PostgreSQL", "Cloudfare"],
      link: "https://github.com/MasieJr/Film-Processing",
      image: "",
    },
    {
      id: 2,
      name: "UniConnect",
      description:
        "A university platform designed to help university students with the day to day student life.",
      stack: ["React", "Flutter", "NodeJS"],
      link: "https://github.com/MasieJr",
      image: "",
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
    <section id="home" className="mt-10 space-y-20 px-4 lg:px-0">
      <div className="flex flex-col lg:flex-row justify-around gap-16 lg:gap-5">
        <div className="space-y-10 w-full lg:w-2/3">
          <RoughNotation
            animationDuration={1000}
            type="highlight"
            show={true}
            color="#f8a1a1"
          >
            <span className="text-3xl code-font">Hello!!</span>
          </RoughNotation>

          <h2 className="text-5xl lg:text-7xl mt-16 handwritten leading-tight">
            I'm Masie Junior Seremu{" "}
            <span className="text-6xl lg:text-8xl text-[#f8a1a1]">.</span>
          </h2>
          <SketchyLine className="w-2/3 lg:w-[40%]" />

          <p className="text-lg lg:text-xl">
            I enjoy building software that solves real life problems, from
            mobile apps to backend systems.
          </p>

          <div className="-rotate-3 inline-block">
            <RoughNotation
              animationDuration={1000}
              type="circle"
              show={true}
              color="#3f82ff"
              padding={25}
            >
              <span className="text-xl lg:text-3xl code-font text-[#3f82ff]">
                Code. Solve. Build. Repeat.
              </span>
            </RoughNotation>
          </div>

          <div className="flex flex-wrap gap-4 mt-24">
            <PaperButton
              label="View My work"
              onClick={() => {}}
              icon={ArrowRight}
            />
            <PaperButton
              label="Download CV"
              onClick={() => {}}
              icon={Download}
            />
            <PaperButton
              label="Get In Touch"
              onClick={() => {}}
              icon={ArrowRight}
            />
          </div>
        </div>

        <div className="space-y-16 code-font w-full lg:w-1/3 flex flex-col items-center ">
          <StickyNote />
          <div className="handwritten text-center lg:text-right">
            <p className="text-lg">Favourite transport:</p>
            <RoughNotation
              animate={false}
              type="underline"
              show={true}
              color="#ed0000"
            >
              <span className="text-sm">trains</span>
            </RoughNotation>
            <Image
              src="/doodles/train1.svg"
              alt="train"
              width={200}
              height={200}
              className="mt-4"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row justify-between gap-16 lg:gap-0">
        <div className="space-y-5 w-full lg:w-[48%]">
          <TextHeading heading="What I enjoy building with:" />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
            <IconText
              label="Languages"
              list="Javascript, Typescript, Java, C#, C++, Dart..."
              icon={CodeXml}
            />
            <IconText
              label="Backend"
              list="Node.js, Express, RestAPI, WebSockets, Databases..."
              icon={Database}
            />
            <IconText
              label="FrontEnd"
              list="React, Html, CSS, Tailwind CSS..."
              icon={Monitor}
            />
            <IconText
              label="Mobile"
              list="Flutter, React Native, Android Studio..."
              icon={Smartphone}
            />
            <IconText
              label="Tools"
              list="Git, VS Code, Postman, Github..."
              icon={TerminalSquare}
            />
            <IconText label="Other" list="Cloudflare, Vercel..." icon={Star} />
          </div>
        </div>

        <div className="space-y-5 w-full lg:w-[48%]">
          <TextHeading heading="A little about me" />
          <p className="code-font text-lg lg:text-xl">
            I am a computer science graduate who loves solving problems,
            building products and learning new technologies. I enjoy turning
            ideas into real-world solutions that make a difference.
          </p>

          <div className="flex flex-wrap sm:flex-row justify-between items-center mt-10 gap-10 sm:gap-0">
            <h1 className="handwritten sm:mb-0 sm:self-end text-6xl">
              <RoughNotation
                animationDuration={1000}
                type="underline"
                show={true}
              >
                MJ
              </RoughNotation>
            </h1>

            <div className="flex flex-col note-page pl-8 p-6 w-full max-w-[350px] rotate-5 text-gray-700 ">
              <h3 className="handwritten text-3xl lg:text-4xl mb-4">
                Currently thinking about:
              </h3>
              <ol className="code-font text-xl list-disc pl-5 space-y-2">
                <li>Trains</li>
                <li>Coffee</li>
                <li>npm run dev</li>
                <li>console.log(error)</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h2 className="text-2xl sm:text-3xl">
          <RoughNotation animate={false} type="underline" show={true}>
            Things I've built:
          </RoughNotation>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-5 gap-5">
          {projects.map((proj) => (
            <div
              key={proj.id}
              className="projects h-[600px] w-[300px] sm:w-[450px] p-5"
            >
              <span>{proj.id}</span>
              <Image
                src={"/projects/test.webp"}
                alt={proj.name}
                width={1000}
                height={200}
              />
              <h3 className="text-2xl sm:text-3xl">
                <RoughNotation animate={false} type="underline" show={true}>
                  {proj.name}
                </RoughNotation>
              </h3>
              <div className="code-font text-xl md:text-2xl md:min-h-[180px]">
                {proj.description}
              </div>
              <div className="flex flex-wrap gap-2 items-center justify-around">
                {proj.stack.map((item) => (
                  <span key={item} className="bg-[#fffab2] shadow-xs p-1">
                    {item}
                  </span>
                ))}
              </div>
              <a
                className="handwritten text-3xl md:text-4xl"
                href={proj.link}
                target="_blank"
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
