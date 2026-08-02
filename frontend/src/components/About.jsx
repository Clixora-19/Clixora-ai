import { motion } from "framer-motion";

const stats = [
  {
    number: "50+",
    title: "Projects Planned",
  },
  {
    number: "100%",
    title: "Custom Solutions",
  },
  {
    number: "24/7",
    title: "Support",
  },
  {
    number: "AI",
    title: "Automation First",
  },
];

export default function About() {
  return (
    <section
    id="about"
    className="py-28 bg-[#0A0A0A] text-white"
    >

      <div className="max-w-7xl mx-auto px-8 grid lg:grid-cols-2 gap-20 items-center">

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >

          <p className="text-[#D4AF37] font-semibold mb-4">
            ABOUT CLIXORA AI
          </p>

          <h2 className="text-5xl font-bold leading-tight">
            Building the Future
            <br />
            with AI &
            <span className="text-[#D4AF37]"> Software</span>
          </h2>

          <p className="text-gray-400 leading-8 mt-8">
            Clixora AI helps businesses transform through premium websites,
            AI automation, custom software and digital innovation.
            Our mission is to simplify business operations while helping
            companies grow faster using technology.
          </p>

        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="grid grid-cols-2 gap-6"
        >

          {stats.map((item, index) => (

            <div
              key={index}
              className="bg-[#111111] border border-[#D4AF37]/20 rounded-3xl p-8 text-center hover:border-[#D4AF37] transition"
            >

              <h3 className="text-5xl font-black text-[#D4AF37]">
                {item.number}
              </h3>

              <p className="mt-4 text-gray-300">
                {item.title}
              </p>

            </div>

          ))}

        </motion.div>

      </div>

    </section>
  );
}