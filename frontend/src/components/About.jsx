import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

export default function About() {
  return (
    <>
      <Navbar />

      <section className="min-h-screen bg-[#050505] text-white flex items-center">
        <div className="max-w-7xl mx-auto px-8 grid lg:grid-cols-2 gap-20 items-center">

          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: .8 }}
          >
            <p className="uppercase tracking-[5px] text-[#D4AF37] font-semibold">
              About Clixora AI
            </p>

            <h1 className="text-7xl font-black mt-6 leading-tight">
              Building
              <br />
              Future Ready
              <br />
              Businesses.
            </h1>

            <p className="text-gray-400 mt-8 text-xl leading-9">
              Clixora AI helps startups and businesses grow with
              premium websites, AI automation, custom software
              and mobile applications.
            </p>
          </motion.div>

          <motion.img
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200"
            className="rounded-3xl border border-[#D4AF37]/20"
            alt="About Clixora AI"
          />
        </div>
      </section>

      <Footer />
    </>
  );
}