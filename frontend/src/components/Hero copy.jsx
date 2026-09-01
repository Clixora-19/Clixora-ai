import ParticleBackground from "./Hero/ParticleBackground";
import AIHero from "./AIHero";
import Button from "./Button";
import { motion } from "framer-motion";
import DashboardPreview from "./DashboardPreview";
export default function Hero() {
  return (
    <section
    id="home"
    className="relative min-h-screen bg-[#050505] overflow-hidden text-white"
    
    >
      <ParticleBackground />

      {/* Background Glow */}
      <div className="absolute w-[500px] h-[500px] bg-[#D4AF37] opacity-30 blur-[180px] rounded-full -top-40 -left-40"></div>

      <div className="absolute w-[500px] h-[500px] bg-fuchsia-500 opacity-30 blur-[180px] rounded-full -bottom-40 -right-40"></div>

      <div className="max-w-7xl mx-auto min-h-screen pt-20 px-8 flex flex-col lg:flex-row items-center justify-between gap-16">
        {/* Grid Background */}
<div
  className="absolute inset-0 opacity-[0.08]"
  style={{
    backgroundImage: `
      linear-gradient(rgba(212,175,55,0.2) 1px, transparent 1px),
      linear-gradient(90deg, rgba(212,175,55,0.2) 1px, transparent 1px)
    `,
    backgroundSize: "50px 50px",
  }}
></div>

{/* Center Glow */}
<div className="absolute left-1/2 top-1/2 w-[700px] h-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#D4AF37]/10 blur-[180px]"></div>
        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-xl"
        >
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-[#D4AF37]/30 bg-white/5 backdrop-blur-md mb-6">
           <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse"></span>

           <span className="text-[#D4AF37] font-medium text-sm tracking-wide">
           Trusted AI Automation Company
           </span>
</div>

          <h1 className="text-6xl md:text-7xl lg:text-8xl font-black leading-[1.05] tracking-tight">
          Build
          <br />
        
          <span className="text-[#D4AF37]">
            Future-Ready
          </span>
        
          <br />
        
          Digital Experiences
          </h1>
          <p className="mt-8 text-gray-300 text-xl leading-9 max-w-xl">
          We engineer premium websites, AI automation,
          custom software and mobile applications that
          help ambitious businesses scale faster with
          modern technology.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-5">
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
          className="flex justify-center items-center lg:-mt-16 lg:mr-10"
        >
          <div className="w-[500px] h-[500px]">
           <AIHero />
          </div>
        </motion.div>

      </div>
    </section>
  );
}