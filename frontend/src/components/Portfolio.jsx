import { motion } from "framer-motion";
import Card from "./ui/Card";

const projects = [
  {
    title: "AI Dashboard",
    category: "AI Automation",
    tech: "React • Node • OpenAI",
  },
  {
    title: "Restaurant Website",
    category: "Website Development",
    tech: "React • Tailwind",
  },
  {
    title: "Business CRM",
    category: "Custom Software",
    tech: "React • Express • MongoDB",
  },
];

export default function Portfolio() {
  return (
    <section
    id="portfolio"
    className="py-28 bg-[#050505] text-white"
    >

      <div className="max-w-7xl mx-auto px-8">

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold text-center"
        >
          Featured Projects
        </motion.h2>

        <p className="text-center text-gray-400 mt-5 max-w-2xl mx-auto">
          Discover how Clixora AI builds websites, AI solutions,
          and software that help businesses grow.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">

          {projects.map((project, index) => (

            <motion.div
              key={index}
              whileHover={{
                y: -10,
                scale: 1.03,
              }}
            >

              <Card>

                <div className="h-44 rounded-2xl bg-gradient-to-br from-[#1c1c1c] to-[#0b0b0b] border border-[#D4AF37]/20 flex items-center justify-center">

                  <span className="text-5xl">
                    💻
                  </span>

                </div>

                <h3 className="text-2xl font-bold mt-6">
                  {project.title}
                </h3>

                <p className="text-[#D4AF37] mt-2">
                  {project.category}
                </p>

                <p className="text-gray-400 mt-4">
                  {project.tech}
                </p>

                <button className="mt-8 text-[#D4AF37] font-semibold">
                  View Project →
                </button>

              </Card>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}