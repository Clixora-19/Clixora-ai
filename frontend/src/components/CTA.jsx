import Button from "./ui/Button";
import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section className="py-32 bg-[#050505] text-white relative overflow-hidden">

      {/* Background Glow */}
      <div className="absolute w-[450px] h-[450px] bg-[#D4AF37] opacity-20 blur-[170px] rounded-full -top-40 -left-40"></div>

      <div className="absolute w-[450px] h-[450px] bg-fuchsia-500 opacity-20 blur-[170px] rounded-full -bottom-40 -right-40"></div>

      <div className="max-w-6xl mx-auto px-8">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
          className="rounded-[40px] border border-[#D4AF37]/20 bg-white/5 backdrop-blur-xl p-16 text-center"
        >

          <p className="text-[#D4AF37] font-semibold uppercase tracking-widest">
            Ready to Grow?
          </p>

          <h2 className="text-5xl lg:text-6xl font-black mt-6 leading-tight">
            Let's Build Your
            <br />
            Next Big Project.
          </h2>

          <p className="text-gray-400 max-w-3xl mx-auto mt-8 text-lg leading-8">
            Whether you need a premium website, AI automation,
            custom software or complete digital transformation,
            Clixora AI is ready to help your business grow.
          </p>

          <div className="flex flex-wrap justify-center gap-6 mt-12">

            <Button>
              Book Free Consultation
            </Button>

            <Button variant="secondary">
              View Portfolio
            </Button>

          </div>

        </motion.div>

      </div>

    </section>
  );
}