import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { ProjectGallery } from "@/components/ProjectGallery";
import { Team } from "@/components/Team";
import { Clients } from "@/components/Clients";
import { Machinery } from "@/components/Machinery";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Services />
      <ProjectGallery />
      <Team />
      <Clients />
      <Machinery />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
