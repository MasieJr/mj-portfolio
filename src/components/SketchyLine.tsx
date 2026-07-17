type SketchyLineProps = {
  className: string;
};

export default function SketchyLine({ className }: SketchyLineProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 200 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      // preserveAspectRatio="none" allows the line to stretch horizontally
      // without getting weirdly thick or distorted
      preserveAspectRatio="none"
    >
      <path
        // This path uses a Bezier curve to create a very subtle dip and rise,
        // mimicking a natural pen stroke.
        d="M2 5 C 50 3, 150 7, 198 5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
