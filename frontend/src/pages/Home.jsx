import TechStack from "../components/TechStack";
import Stats from "../components/Stats";
import ScrollProgress from "../components/ScrollProgress";
import CTA from "../components/CTA";
import Faq from "../components/Faq";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import About from "../components/About";
import Testimonials from "../components/Testimonials";
import Portfolio from "../components/Portfolio";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import WhyChoose from "../components/WhyChoose";
import Process from "../components/Process";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <Hero />
      <TechStack />
      <Services />
      <WhyChoose />
      {/* <Stats /> */}
      <Process />
      {/*<About />*/}
      <Portfolio />
      <Testimonials />
      <Faq />
      {/*<CTA />*/}
      <Contact />
      <Footer />
    </>
  );
}