import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Certifications from "@/components/sections/Certifications";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";
import ScrollProgress from "@/components/common/ScrollProgress";
import SocialDock from "@/components/common/SocialDock";
import Achievements from "@/components/sections/achievements";
import ScrollTop from "@/components/common/ScrollTop";
export default function Home() {
  return (
    <main className="bg-[#030712] text-white">
      

      <Navbar />

      <Hero />

      <About />

      <Skills />

      <Experience />

      <Projects />

      <Certifications />

      <Achievements />

      <Contact />
      <SocialDock />

      <Footer />
      <ScrollProgress/>
      <ScrollTop/>
    </main>
  );
}