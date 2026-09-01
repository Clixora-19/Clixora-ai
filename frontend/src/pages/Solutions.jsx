import { motion } from "framer-motion";
import {
  FaRobot,
  FaWhatsapp,
  FaEnvelope,
  FaChartLine,
  FaCogs,
  FaBrain,
} from "react-icons/fa";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Button from "../components/Button";

const solutions = [
  {
    icon: <FaRobot size={36} />,
    title: "AI Chatbots",
    desc: "24/7 intelligent chat assistants for websites and businesses.",
  },
  {
    icon: <FaWhatsapp size={36} />,
    title: "WhatsApp Automation",
    desc: "Automate replies, bookings and customer support instantly.",
  },
  {
    icon: <FaEnvelope size={36} />,
    title: "Email Automation",
    desc: "Automate follow-ups and marketing campaigns effortlessly.",
  },
  {
    icon: <FaChartLine size={36} />,
    title: "CRM Integration",
    desc: "Manage leads, customers and business growth efficiently.",
  },
  {
    icon: <FaCogs size={36} />,
    title: "Workflow Automation",
    desc: "Reduce manual work with smart AI-powered workflows.",
  },
  {
    icon: <FaBrain size={36} />,
    title: "Custom AI Solutions",
    desc: "Tailor-made AI systems built specifically for your business.",
  },
];

export default function Solutions() {
  return (
    <>
      <Navbar />

      <section className="bg-[#050505] text-white pt-40 pb-24">

        <div className="max-w-7xl mx-auto px-8">

          {/* HERO */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .8 }}
            className="text-center"
          >

            <p className="uppercase tracking-[5px] text-[#D4AF37] font-semibold">
              AI Solutions
            </p>

            <h1 className="text-7xl font-black mt-6 leading-tight">
              Transform Your Business
              <br />
              With AI
            </h1>

            <p className="text-gray-400 text-xl max-w-3xl mx-auto mt-8 leading-9">
              Intelligent automation solutions designed to
              increase productivity, reduce costs and help
              your business scale faster.
            </p>

            <Button className="mt-10">
              Book Consultation
            </Button>

          </motion.div>

          {/* SOLUTION CARDS */}

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-24">

            {solutions.map((item, index) => (

              <motion.div
                key={index}
                whileHover={{
                  y: -10,
                  scale: 1.03,
                }}
                className="rounded-3xl bg-[#111] border border-[#D4AF37]/20 hover:border-[#D4AF37] transition p-8"
              >

                <div className="text-[#D4AF37]">
                  {item.icon}
                </div>

                <h3 className="text-3xl font-bold mt-6">
                  {item.title}
                </h3>

                <p className="text-gray-400 mt-5 leading-8">
                  {item.desc}
                </p>

              </motion.div>

            ))}

          </div>

          {/* WORKFLOW */}

          <div className="mt-28 text-center">

            <p className="uppercase tracking-[4px] text-[#D4AF37]">
              AI Workflow
            </p>

            <h2 className="text-5xl font-black mt-5">
              From Lead To Customer
            </h2>

            <div className="flex flex-wrap justify-center items-center gap-8 mt-16 text-2xl font-bold">

              <div>Lead</div>

              <span className="text-[#D4AF37]">→</span>

              <div>AI Chatbot</div>

              <span className="text-[#D4AF37]">→</span>

              <div>CRM</div>

              <span className="text-[#D4AF37]">→</span>

              <div>Automation</div>

              <span className="text-[#D4AF37]">→</span>

              <div>Customer</div>

            </div>

          </div>

          {/* BENEFITS */}

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-28">

            {[
              "Save 80% Time",
              "24/7 Availability",
              "Higher Conversions",
              "Lower Costs",
            ].map((item, i) => (

              <div
                key={i}
                className="bg-[#111] rounded-3xl p-8 border border-[#D4AF37]/20 text-center"
              >

                <h3 className="text-3xl font-black text-[#D4AF37]">
                  {item}
                </h3>

              </div>

            ))}

          </div>

          {/* CTA */}

          <div className="mt-28 rounded-[40px] bg-gradient-to-br from-[#111] to-black border border-[#D4AF37]/20 p-16 text-center">

            <h2 className="text-6xl font-black">
              Ready To Automate
              <br />
              Your Business?
            </h2>

            <p className="text-gray-400 mt-8 text-xl">
              Let's build AI-powered solutions that save
              time and grow your business.
            </p>

            <Button className="mt-10">
              Book Free Consultation
            </Button>

          </div>

        </div>

      </section>

      <Footer />

    </>
  );
}