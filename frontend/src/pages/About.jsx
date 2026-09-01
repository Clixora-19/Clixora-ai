import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function About() {
  return (
    <>
      <Navbar />

      <section className="min-h-screen bg-[#050505] text-white flex items-center justify-center">
        <h1 className="text-6xl font-bold">
          About <span className="text-[#D4AF37]">Clixora AI</span>
        </h1>
      </section>

      <Footer />
    </>
  );
}