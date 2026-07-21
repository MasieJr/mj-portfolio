export default function PaperNote() {
  return (
    <div className="flex flex-col note-page pl-8 p-6 w-full max-w-[350px] rotate-5 text-gray-700 ">
      <h3 className="handwritten text-3xl lg:text-4xl mb-4">
        Currently thinking about:
      </h3>
      <ol className="code-font text-xl list-disc pl-5 space-y-2">
        <li>Trains</li>
        <li>Coffee</li>
        <li>npm run dev</li>
        <li>console.log(error)</li>
      </ol>
    </div>
  );
}
