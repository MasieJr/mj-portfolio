import { RoughNotation } from "react-rough-notation";
import SketchyLine from "./SketchyLine";
import StickyNote from "./StickyNote";
import { ArrowBigRight, ArrowRight, Download, Pen } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="mt-10">
      <div className="flex justufy-around">
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
            <button
              className={`group relative inline-flex items-center gap-2 text-[var(--foreground)] transition-colors hover:text-gray-600`}
            >
              <span className="code-font text-sm">Download</span>
              <span className="transition-transform group-hover:translate-x-1">
                <ArrowRight />
              </span>

              {/* The hand-drawn underline that thickens on hover */}
              <svg
                className="absolute -bottom-1 left-0 w-full h-[3px] text-gray-400 group-hover:text-[var(--foreground)] transition-colors"
                preserveAspectRatio="none"
                viewBox="0 0 100 10"
                fill="none"
              >
                <path
                  d="M2 5 C 30 3, 70 7, 98 5"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
              </svg>
            </button>
            <button
              className={`
        group relative inline-flex items-center justify-center gap-3 
        px-6 py-3 rounded-md
        bg-[var(--foreground)] text-[var(--background)] 
        code-font text-sm tracking-wide
        border-2 border-[var(--foreground)]
        transition-all duration-150 ease-in-out
        /* The magic: A solid offset shadow that looks like physical paper depth */
        hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[6px_6px_0px_0px_#e9420b]
        /* The click: Snaps flat against the page */
        active:translate-y-0 active:translate-x-0 active:shadow-none
       
      `}
            >
              Download
              <span className="transition-transform group-hover:translate-x-1">
                <Download />
              </span>
            </button>
            <button>Get in touch</button>
          </div>
        </div>
        <StickyNote />
      </div>
    </section>
  );
}
