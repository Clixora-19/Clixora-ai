import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Button from "../components/Button";

const projects = [
  {
    title: "AI Automation",
    category: "Workflow Automation",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900",
  },
  {
    title: "Luxury Business Website",
    category: "Website Development",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900",
  },
  {
    title: "Mobile App",
    category: "Android & iOS",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=900",
  },
  {
    title: "CRM Dashboard",
    category: "Custom Software",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=900",
  },
  {
    title: "E-Commerce Store",
    category: "Online Business",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=900",
  },
  {
    title: "Analytics Platform",
    category: "Data Intelligence",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=900",
  },
];

export default function Portfolio() {
  return (
    <>
      <Navbar />

      <section className="min-h-screen bg-[#050505] text-white py-28 px-8">

        <div className="max-w-7xl mx-auto">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: .8 }}
            className="text-center mb-20"
          >

            <p className="uppercase tracking-[5px] text-[#D4AF37] font-semibold">
              Portfolio
            </p>

            <h1 className="text-6xl font-black mt-4">
              Our Recent Work
            </h1>

            <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
              Every project is crafted with premium design,
              scalable technology and AI-powered innovation.
            </p>

          </motion.div>

          {/* Featured Project */}

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="grid lg:grid-cols-2 gap-16 items-center mb-24"
          >

            <img
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200"
              className="rounded-3xl shadow-2xl border border-[#D4AF37]/20"
            />

            <div>

              <p className="uppercase tracking-[4px] text-[#D4AF37]">
                Featured Project
              </p>

              <h2 className="text-5xl font-black mt-5">
                Enterprise AI Dashboard
              </h2>

              <p className="text-gray-400 mt-6 leading-8">
                Intelligent dashboard integrating AI automation,
                analytics, CRM management and business insights
                into one premium platform.
              </p>

              <div className="flex flex-wrap gap-4 mt-8">

                <span className="px-5 py-2 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/20">
                  AI
                </span>

                <span className="px-5 py-2 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/20">
                  Dashboard
                </span>

                <span className="px-5 py-2 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/20">
                  Automation
                </span>

              </div>

              <div className="mt-10">
                <Button>
                  View Project
                </Button>
              </div>

            </div>

          </motion.div>

          {/* Grid */}

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

            {projects.map((project, index) => (

              <motion.div
                key={index}
                whileHover={{
                  y: -10,
                  scale: 1.02
                }}
                transition={{ duration: .35 }}
                className="rounded-3xl overflow-hidden bg-white/5 border border-white/10 hover:border-[#D4AF37]"
              >

                <img
                  src={project.image}
                  className="h-60 w-full object-cover"
                />

                <div className="p-8">

                  <p className="text-[#D4AF37] text-sm uppercase tracking-[3px]">
                    {project.category}
                  </p>

                  <h3 className="text-3xl font-bold mt-3">
                    {project.title}
                  </h3>

                  <Button
                    variant="secondary"
                    className="mt-8"
                  >
                    View Details
                  </Button>

                </div>

              </motion.div>

            ))}

          </div>

        </div>

      </section>

     

    </>
  );
}