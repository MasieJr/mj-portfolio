import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import NavBar from "@/components/sidebar/NavBar";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <main className="body-font relative min-h-screen bg-[#f4efe6] pl-12">
        <div className="absolute left-0 top-0 bottom-0 w-[40px] bg-[url('/doodles/spiral-binding.svg')] bg-repeat-y" />
        <div className="flex ">
          <NavBar />
          <div className="mx-20 mb-10 mt-30">
            <Hero />
          </div>
        </div>
        <Footer />
      </main>
    </div>
  );
}
