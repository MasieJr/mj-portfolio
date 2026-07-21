import {
  CodeXml,
  Database,
  Monitor,
  Smartphone,
  Star,
  TerminalSquare,
} from "lucide-react";
import IconText from "./IconText";
import TextHeading from "./TextHeading";
import { RoughNotation } from "react-rough-notation";
import PaperNote from "./PaperNote";

export default function About() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8">
      {/* Left Column: Tech Stack */}
      <section id="skills" className="space-y-5 w-full">
        <TextHeading heading="What I enjoy building with:" />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
          <IconText
            label="Languages"
            list="JavaScript, TypeScript, Java, C#, C++, Dart"
            icon={CodeXml}
          />
          <IconText
            label="Backend"
            list="Node.js, Express, Prisma, MySQL, WebSockets..."
            icon={Database}
          />
          <IconText
            label="FrontEnd"
            list="React, Next.js, HTML, CSS, Tailwind CSS"
            icon={Monitor}
          />
          <IconText
            label="Mobile"
            list="Flutter, React Native, Android Studio"
            icon={Smartphone}
          />
          <IconText
            label="Tools"
            list="Git, VS Code, Postman, GitHub"
            icon={TerminalSquare}
          />
          <IconText label="Other" list="Cloudflare, Vercel" icon={Star} />
        </div>
      </section>

      {/* Right Column: About Me */}
      <section id="about" className="space-y-5 w-full flex flex-col">
        <TextHeading heading="A little about me" />
        <p className="code-font text-lg lg:text-xl">
          I am a soon-to-be computer science graduate who loves solving
          problems, building products, and learning new technologies. I enjoy
          turning ideas into real-world solutions that make a difference.
        </p>

        <div className="flex flex-wrap sm:flex-row justify-around items-center mt-auto pt-10 gap-5 sm:gap-0">
          <h1 className="handwritten sm:mb-0 sm:self-end text-6xl b-">
            <RoughNotation
              animationDuration={1000}
              type="underline"
              show={true}
            >
              MJ
            </RoughNotation>
          </h1>

          <PaperNote />
        </div>
      </section>
    </div>
  );
}
