import Button from "./ui/Button";
import { motion } from "framer-motion";
import DashboardPreview from "./DashboardPreview";

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-[#050816] overflow-hidden text-white">

      {/* Background Glow */}
      <div className="absolute w-[500px] h-[500px] bg-cyan-400 opacity-30 blur-[180px] rounded-full -top-40 -left-40"></div>

      <div className="absolute w-[500px] h-[500px] bg-fuchsia-500 opacity-30 blur-[180px] rounded-full -bottom-40 -right-40"></div>

      <div className="max-w-7xl mx-auto min-h-screen px-8 flex flex-col lg:flex-row items-center justify-between gap-16">

        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-xl"
        >
          <p className="text-cyan-400 font-semibold mb-4">
            🚀 Trusted AI Automation Partner
          </p>

          <h1 className="text-5xl lg:text-7xl font-black leading-tight">
            Build.
            <br />
            Automate.
            <br />
            <span className="text-cyan-400">
              Scale.
            </span>
          </h1>

          <p className="mt-8 text-gray-300 text-lg leading-8">
            AI-powered software, websites, automation and custom
            business solutions that help companies save time,
            increase productivity and grow faster.
          </p>

          <div className="mt-10 flex flex-wrap gap-5">
            <button className="bg-cyan-500 hover:bg-cyan-600 transition px-8 py-4 rounded-xl font-semibold">
              Book Free Consultation
            </button>

            <button className="border border-cyan-400 hover:bg-cyan-500 hover:text-black transition px-8 py-4 rounded-xl font-semibold">
              View Portfolio
            </button>
          </div>
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <DashboardPreview />
        </motion.div>

      </div>
    </section>
  );
}