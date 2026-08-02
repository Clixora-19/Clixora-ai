import Button from "./ui/Button";
import { motion } from "framer-motion";
import DashboardPreview from "./DashboardPreview";

export default function Hero() {
  return (
    <section
    id="home"
    className="relative min-h-screen bg-[#050505] overflow-hidden text-white"
    >

      {/* Background Glow */}
      <div className="absolute w-[500px] h-[500px] bg-[#D4AF37] opacity-30 blur-[180px] rounded-full -top-40 -left-40"></div>

      <div className="absolute w-[500px] h-[500px] bg-fuchsia-500 opacity-30 blur-[180px] rounded-full -bottom-40 -right-40"></div>

      <div className="max-w-7xl mx-auto min-h-screen pt-32 px-8 flex flex-col lg:flex-row items-center justify-between gap-16">
        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-xl"
        >
          <p className="text-[#D4AF37] font-semibold mb-4">
            🚀 Trusted AI Automation Partner
          </p>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1] tracking-tight">
            Build Smart
            <br />
            <span className="text-[#D4AF37]">
             AI Solutions
            </span>
            <br />
            For Modern Business
          </h1>

          <p className="mt-8 text-gray-300 text-lg leading-8">
            We build premium websites, AI automation, custom software,
            mobile applications and intelligent business solutions that
            help companies scale faster and work smarter.
          </p>

          <div className="mt-10 flex flex-wrap gap-5">
            <div className="flex flex-wrap gap-6 mt-10 text-sm text-gray-400">

              <span>✓ AI Powered</span>

              <span>✓ Secure Solutions</span>

              <span>✓ Fast Delivery</span>

            </div>
            <Button>
            Book Free Consultation
            </Button>

<Button variant="secondary">
  View Portfolio
</Button>
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