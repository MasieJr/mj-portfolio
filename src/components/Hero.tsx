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
    <section id="home" className="mt-10 space-y-20">
      <div className="flex justufy-around space-x-5">
        <div className="space-y-10">
          <RoughNotation
            animationDuration={1000}
            type="highlight"
            show={true}
            color="#f8a1a1"
          >
            <span className="text-3xl code-font">Hello!!</span>
          </RoughNotation>
          <h2 className="text-7xl mt-15 handwritten">
            I'm Masie Junior Seremu{" "}
            <span className="text-8xl text-[#f8a1a1]">.</span>
          </h2>
          <SketchyLine className="w-[40%]" />

          <p className="text-xl">
            I enjoy building software that solves real life problems, from
            mobile apps to backend systems.
          </p>
          <div className="-rotate-3">
            <RoughNotation
              animationDuration={1000}
              type="circle"
              show={true}
              color="#3f82ff"
              padding={25}
            >
              <span className="text-3xl code-font text-[#3f82ff]">
                Code. Solve, Build. Repeat
              </span>
            </RoughNotation>
          </div>
          <div className="flex mt-25 justify-around ">
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
        <div className="space-y-15 code-font">
          <StickyNote />
          <div className="handwritten">
            <p className="text-l">Favourite transport:</p>
            <RoughNotation
              animate={false}
              type="underline"
              show={true}
              color="#ed0000"
            >
              <span className="text-s">trains</span>
            </RoughNotation>
            <Image
              src="/doodles/train1.svg"
              alt="train"
              width={200}
              height={200}
            />
          </div>
        </div>
      </div>
      <div className="flex">
        <div className="space-y-5 w-[48%]">
          <TextHeading heading="What I Enjoy building with:" />
          <div className="grid grid-cols-2 space-y-5">
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
            <IconText label="Other" list="Cloudfare, Vercel..." icon={Star} />
          </div>
        </div>
        <div className="space-y-5 w-[48%]">
          <TextHeading heading="A little about me" />
          <p className="code-font text-xl ">
            I am a computer Science graduate who loves solving problems,
            building products and learning new technologies. I enjoy turning
            idea into real-world solutions that makes a difference.
          </p>
          <div className="flex space-x-5">
            <h1 className="handwritten self-end text-5xl">
              <RoughNotation
                animationDuration={1000}
                type="box"
                show={true}
                color="#ed0000"
              >
                m.seremu
              </RoughNotation>
            </h1>
            <div className="flex flex-col note-page bg-white w-[450px] h-[250px] rotate-3 items-center text-gray-500">
              <h3 className="handwritten text-5xl">
                Currently thinking about:
              </h3>
              <ol className="code-font text-3xl list-disc pl-5 ">
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
