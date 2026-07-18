import { RoughNotation } from "react-rough-notation";

type TextHeadingProp = {
  heading: string;
};

export default function TextHeading({ heading }: TextHeadingProp) {
  return (
    <h3 className="handwritten text-3xl">
      <RoughNotation animate={false} type="underline" show={true}>
        {heading}
      </RoughNotation>
    </h3>
  );
}
