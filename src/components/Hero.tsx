"use client";

import { RoughNotation } from "react-rough-notation";
import SketchyLine from "./SketchyLine";
import StickyNote from "./StickyNote";
import {
  ArrowRight,
  Code,
  CodeXml,
  Computer,
  Database,
  Download,
  Monitor,
  Pen,
  Smartphone,
  Star,
  Terminal,
  TerminalSquare,
} from "lucide-react";
import PaperButton from "./PaperButton";
import Image from "next/image";
import IconText from "./IconText";
import TextHeading from "./TextHeading";

export default function Hero() {
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

        <div className="space-y-16 code-font w-full lg:w-1/3 flex flex-col items-center lg:items-end">
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
    </section>
  );
}
