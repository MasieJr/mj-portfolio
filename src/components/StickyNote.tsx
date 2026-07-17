import Image from "next/image";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";

export default function StickyNote() {
  return (
    <div className="handwritten bg-[#efdda5] w-[200px] h-[200px] sticky -rotate-5 shadow-xl/50 ">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-4xl">ToDo:</h1>

        <RoughNotationGroup show={true}>
          <ul className="text-2xl">
            <li>
              <RoughNotation
                animationDuration={1000}
                type="highlight"
                color="#f8a1a1"
              >
                study
              </RoughNotation>
            </li>
            <li>
              <RoughNotation
                type="highlight"
                animationDuration={1000}
                color="#f8a1a1"
              >
                Pass
              </RoughNotation>
            </li>
            <li>Graduate</li>
            <li>Get A job</li>
            <li>Drink coffee</li>
          </ul>
        </RoughNotationGroup>
      </div>
    </div>
  );
}
