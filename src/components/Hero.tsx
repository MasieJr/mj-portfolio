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
import Projects from "./Projects";
import PaperNote from "./PaperNote";
import About from "./About";

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

      <About />
      <Projects />
    </section>
  );
}
