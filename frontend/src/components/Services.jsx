import Card from "./ui/Card";
import { FiGlobe, FiCpu, FiSmartphone, FiCode } from "react-icons/fi";
import { motion } from "framer-motion";

const services = [
  {
    icon: <FiGlobe size={32} />,
    title: "Website Development",
    desc: "Modern, responsive websites built for speed, SEO and conversions."
  },
  {
    icon: <FiCpu size={32} />,
    title: "AI Automation",
    desc: "AI chatbots, WhatsApp automation and workflow automation."
  },
  {
    icon: <FiCode size={32} />,
    title: "Custom Software",
    desc: "Business software tailored to your workflow and operations."
  },
  {
    icon: <FiSmartphone size={32} />,
    title: "Mobile Apps",
    desc: "Beautiful Android & iOS applications for your business."
  }
];

export default function Services() {
  return (
    <section className="py-28 px-8 bg-[#050816] text-white">

      <div className="max-w-7xl mx-auto">

        <motion.h2
          initial={{opacity:0,y:30}}
          whileInView={{opacity:1,y:0}}
          transition={{duration:0.8}}
          className="text-5xl font-bold text-center"
        >
          Our Services
        </motion.h2>

        <p className="text-center text-gray-400 mt-5 max-w-2xl mx-auto">
          We help businesses grow through AI, software development,
          websites and digital automation.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">

          {services.map((service, index) => (

            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
            >
              <Card>
                <div className="text-cyan-400 mb-6">
                  {service.icon}
                </div>

                <h3 className="text-2xl font-bold">
                  {service.title}
                </h3>

                <p className="text-gray-400 mt-4 leading-7">
                  {service.desc}
                </p>
              </Card>
           </motion.div>
          ))}

        </div>

      </div>

    </section>
  );
}