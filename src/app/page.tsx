import About from "@/components/About";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import NavBar from "@/components/sidebar/NavBar";

export default function Home() {
  return (
    <div>
      <main className="body-font relative min-h-screen bg-[#f4efe6] pl-12">
        <div className="absolute left-0 top-0 bottom-0 w-[40px] bg-[url('/doodles/spiral-binding.svg')] bg-repeat-y" />
        <div className="flex ">
          <NavBar />
          <div className="sm:mx-20 mb-10 sm:mt-30 space-y-20 px-4 lg:px-0">
            <Hero />
            <Projects />
            <About />
          </div>
        </div>
        <Footer />
      </main>
    </div>
  );
}
