import { RoughNotation } from "react-rough-notation";
import SketchyLine from "./SketchyLine";

export default function Hero() {
  return (
    <section id="home" className="mt-10">
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
        I enjoy building software that solves real life problems, from mobile
        apps to backend systems.
      </p>
    </section>
  );
}
