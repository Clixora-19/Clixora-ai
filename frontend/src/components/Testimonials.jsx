import { motion } from "framer-motion";
import Card from "./Card";

const testimonials = [
  {
    name: "Aarav Sharma",
    company: "Restaurant Owner",
    review:
      "Clixora AI built our website in just a few days. Professional, fast, and exactly what we needed.",
  },
  {
    name: "Priya Patel",
    company: "Fashion Brand",
    review:
      "Their AI automation saved us hours every week. The support has been excellent.",
  },
  {
    name: "Rahul Verma",
    company: "Startup Founder",
    review:
      "Beautiful design, smooth communication, and timely delivery. Highly recommended.",
  },
];

export default function Testimonials() {
  return (
    <section
    id="testimonials"
    className="py-28 bg-[#0A0A0A] text-white"
    >
      <div className="max-w-7xl mx-auto px-8">

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold text-center"
        >
          What Clients Say
        </motion.h2>

        <p className="text-center text-gray-400 mt-5 max-w-2xl mx-auto">
          Businesses trust Clixora AI for modern websites, AI solutions and software.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-20">

          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -8, scale: 1.03 }}
            >
              <Card delay={index * 0.1}>

                <div className="text-[#D4AF37] text-3xl mb-5">
                  ★★★★★
                </div>

                <p className="text-gray-300 leading-8">
                  "{item.review}"
                </p>

                <div className="mt-8">
                  <h3 className="font-bold text-xl">
                    {item.name}
                  </h3>

                  <p className="text-gray-400">
                    {item.company}
                  </p>
                </div>

              </Card>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}