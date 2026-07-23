import Image from "next/image";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";

export default function StickyNote() {
  return (
    <div className="handwritten bg-[#efdda5] w-[200px] h-[200px] sticky-note -rotate-5 shadow-xl/50 ">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-4xl">ToDo:</h1>

        <RoughNotationGroup show={true}>
          <ul className="text-2xl">
            <li>
              <RoughNotation
                animationDuration={1000}
                type="strike-through"
                color="#ff0000"
                strokeWidth={2}
              >
                study
              </RoughNotation>
            </li>
            <li>
              <RoughNotation
                type="strike-through"
                animationDuration={1000}
                color="#ff0000"
                strokeWidth={2}
              >
                Pass
              </RoughNotation>
            </li>

            <li>
              <RoughNotation
                type="box"
                animationDuration={1000}
                color="#3700ff"
              >
                Graduate
              </RoughNotation>
            </li>
            <li>Get A job</li>
            <li>Drink coffee</li>
          </ul>
        </RoughNotationGroup>
      </div>
    </div>
  );
}
