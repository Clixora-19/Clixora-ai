import Card from "./ui/Card";
import { motion } from "framer-motion";
import {
  FiZap,
  FiClock,
  FiShield,
  FiTrendingUp,
} from "react-icons/fi";

const features = [
  {
    icon: <FiZap size={34} />,
    title: "AI First",
    desc: "Every solution is built with automation and AI at its core.",
  },
  {
    icon: <FiClock size={34} />,
    title: "Fast Delivery",
    desc: "Launch websites and software quickly without compromising quality.",
  },
  {
    icon: <FiShield size={34} />,
    title: "Reliable",
    desc: "Secure, scalable and built for long-term business growth.",
  },
  {
    icon: <FiTrendingUp size={34} />,
    title: "Growth Focused",
    desc: "Everything we build is designed to generate leads and revenue.",
  },
];

export default function WhyChoose() {
  return (
    <section
    id="why"
    className="bg-[#050505] py-28 text-white"
    >
      <div className="max-w-7xl mx-auto px-8">

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold text-center"
        >
          Why Choose Clixora?
        </motion.h2>

        <p className="text-center text-gray-400 mt-5 max-w-2xl mx-auto">
          We don't just build websites. We build business systems that save
          time, automate work and help companies grow.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">

          {features.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10, scale: 1.03 }}
            >            
              <Card>

                <div className="text-[#D4AF37] mb-5">
                  {item.icon}
                </div>
          
                <h3 className="text-2xl font-bold">
                  {item.title}
                </h3>
          
                <p className="text-gray-400 mt-4">
                  {item.desc}
                </p>
          
              </Card>
            </motion.div>
            
          ))}

        </div>
      </div>
    </section>
  );
}