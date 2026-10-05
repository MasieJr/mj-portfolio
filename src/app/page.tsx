import About from "@/components/About";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import NavBar from "@/components/sidebar/NavBar";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f4efe6] text-[#171717]">
      <NavBar />
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <Hero />
        <Projects />
        <About />
      </div>
      <Footer />
    </main>
  );
}