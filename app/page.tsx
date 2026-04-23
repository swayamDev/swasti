import Header from "@/components/layout/Header";
import About from "@/components/sections/About";
import Hero from "@/components/sections/Hero";
import Skills from "@/components/sections/Skills";

export default function Home() {
  return (
    <div className="min-h-screen bg-black pb-[100vh]">
      <Header />

      <main>
        <Hero />
        <About />
        <Skills />
      </main>
    </div>
  );
}
