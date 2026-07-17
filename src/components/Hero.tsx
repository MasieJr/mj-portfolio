import { RoughNotation } from "react-rough-notation";

export default function Hero() {
  return (
    <p className="body-font text-lg">
      I enjoy building software that solves{" "}
      <RoughNotation type="highlight" show={true} color="#f8e9a1">
        real problems
      </RoughNotation>
      , from mobile apps to backend systems.
    </p>
  );
}
