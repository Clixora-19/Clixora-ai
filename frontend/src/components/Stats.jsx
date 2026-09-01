import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const stats = [
  {
    number: 150,
    suffix: "+",
    title: "Projects Delivered",
  },
  {
    number: 98,
    suffix: "%",
    title: "Client Satisfaction",
  },
  {
    number: 24,
    suffix: "/7",
    title: "Support",
  },
  {
    number: 12000,
    suffix: "+",
    title: "Automation Hours Saved",
  },
];

export default function Stats() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.4,
  });

  return (
    <section
      ref={ref}
      className="py-28 bg-[#050505] text-white"
    >
      <div className="max-w-7xl mx-auto px-8">

        <div className="text-center mb-16">

          <p className="text-[#D4AF37] font-semibold uppercase">
            Our Impact
          </p>

          <h2 className="text-5xl font-bold mt-4">
            Numbers That Speak
          </h2>

          <p className="text-gray-400 mt-5">
            Helping businesses grow through AI and modern software.
          </p>

        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">

          {stats.map((item, index) => (

            <motion.div
              key={index}
              whileHover={{
                y: -10,
                scale: 1.05,
              }}
              className="bg-white/5 border border-[#D4AF37]/20 backdrop-blur-xl rounded-3xl p-10 text-center"
            >

              <h3 className="text-5xl font-black text-[#D4AF37]">

                {inView && (
                  <CountUp
                    end={item.number}
                    duration={2.5}
                    separator=","
                  />
                )}

                {item.suffix}

              </h3>

              <p className="mt-5 text-gray-300 text-lg">
                {item.title}
              </p>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}