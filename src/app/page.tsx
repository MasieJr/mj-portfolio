import Image from "next/image";

export default function Home() {
  return (
    <div>
      <main className="relative min-h-screen bg-[#f4efe6] pl-12">
        {/* The Binding Element */}
        <div className="absolute left-0 top-0 bottom-0 w-[40px] bg-[url('/doodles/spiral-binding.svg')] bg-repeat-y" />

        {/* Your content goes here */}
        <div className="max-w-6xl mx-auto p-8">
          {/* ... rest of your portfolio ... */}
        </div>
      </main>
    </div>
  );
}
