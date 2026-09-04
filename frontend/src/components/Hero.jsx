import ParticleBackground from "./Hero/ParticleBackground";
import AIHero from "./AIHero";
import Button from "./Button";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen bg-[#050505] overflow-hidden text-white"
    >
      <ParticleBackground />

      {/* Background Glow */}
      <div className="absolute w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] bg-[#D4AF37] opacity-20 blur-[120px] sm:blur-[180px] rounded-full -top-20 -left-20 sm:-top-40 sm:-left-40" />

      <div className="absolute w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] bg-fuchsia-500 opacity-20 blur-[120px] sm:blur-[180px] rounded-full -bottom-20 -right-20 sm:-bottom-40 sm:-right-40" />

      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(212,175,55,0.2) 1px, transparent 1px),
            linear-gradient(90deg, rgba(212,175,55,0.2) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      />

      {/* Center Glow */}
      <div className="absolute left-1/2 top-1/2 w-[400px] h-[400px] sm:w-[700px] sm:h-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#D4AF37]/10 blur-[120px] sm:blur-[180px]" />

      {/* MAIN */}
      <div className="
        relative
        max-w-7xl
        mx-auto
        min-h-screen
        pt-28
        sm:pt-32
        px-5
        sm:px-8
        flex
        flex-col
        lg:flex-row
        items-center
        justify-center
        lg:justify-between
        gap-16
        lg:gap-10
      ">

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-xl"
        >

          {/* Badge */}
          <div className="
            inline-flex
            items-center
            gap-2
            px-4
            sm:px-5
            py-2
            rounded-full
            border
            border-[#D4AF37]/30
            bg-white/5
            backdrop-blur-md
            mb-6
          ">
            <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse" />

            <span className="text-[#D4AF37] font-medium text-xs sm:text-sm tracking-wide">
              Trusted AI Automation Company
            </span>
          </div>

          {/* HEADING */}
          <h1 className="
            text-[48px]
            leading-[1.02]
            sm:text-6xl
            md:text-7xl
            lg:text-8xl
            font-black
            tracking-tight
          ">
            Build
            <br />

            <span className="text-[#D4AF37]">
              Future-Ready
            </span>

            <br />

            Digital Experiences
          </h1>

          {/* DESCRIPTION */}
          <p className="
            mt-7
            sm:mt-8
            text-gray-300
            text-base
            sm:text-xl
            leading-7
            sm:leading-9
            max-w-xl
          ">
            We engineer premium websites, AI automation,
            custom software and mobile applications that
            help ambitious businesses scale faster with
            modern technology.
          </p>

          {/* BUTTONS */}
          <div className="
            mt-8
            sm:mt-10
            flex
            flex-col
            sm:flex-row
            items-stretch
            sm:items-center
            gap-4
          ">
            <Button>
              Book Free Consultation
            </Button>

            <Button variant="secondary">
              View Portfolio
            </Button>
          </div>

          {/* FEATURES */}
          <div className="
            flex
            flex-wrap
            gap-x-6
            gap-y-3
            mt-7
            sm:mt-8
            text-sm
            text-gray-400
          ">
            <span>✓ AI Powered</span>
            <span>✓ Secure Solutions</span>
            <span>✓ Fast Delivery</span>
          </div>
        </motion.div>


        {/* RIGHT AI */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="
            relative
            w-full
            h-[350px]
            sm:h-[450px]
            md:h-[520px]
            lg:h-[560px]
            flex
            justify-center
            items-center
            overflow-visible
          "
        >
          <AIHero />
        </motion.div>

      </div>
    </section>
  );
}