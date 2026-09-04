import {
  Bot,
  Globe,
  BrainCircuit,
  Smartphone,
  Laptop,
} from "lucide-react";

import OrbitRing from "./Hero/OrbitRing";
import AICore from "./Hero/AICore";
import FloatingCard from "./FloatingCard";
import { motion } from "framer-motion";

export default function AIHero() {
  return (
    <div className="
      relative
      w-[560px]
      h-[560px]
      flex
      items-center
      justify-center
      scale-[0.58]
      sm:scale-[0.72]
      md:scale-[0.88]
      lg:scale-100
      origin-center
      shrink-0
    ">

      {/* Orbit Ring */}
      <OrbitRing />

      {/* OUTER GLOW */}
      <div className="
        absolute
        w-[500px]
        h-[500px]
        rounded-full
        bg-[#D4AF37]/10
        blur-[120px]
      " />

      {/* OUTER RING */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
          absolute
          w-[500px]
          h-[500px]
          rounded-full
          border
          border-[#D4AF37]/40
        "
      />

      {/* SECOND RING */}
      <motion.div
        animate={{ rotate: -360 }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
          absolute
          w-[400px]
          h-[400px]
          rounded-full
          border
          border-[#D4AF37]/30
        "
      />

      {/* THIRD RING */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
          absolute
          w-[300px]
          h-[300px]
          rounded-full
          border
          border-[#D4AF37]/30
        "
      />

      {/* CONNECTING LINES */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 560 560"
      >

        <motion.line
          x1="280"
          y1="280"
          x2="280"
          y2="60"
          stroke="#D4AF37"
          strokeWidth="2"
          strokeDasharray="8 8"
          animate={{ strokeDashoffset: [16, 0] }}
          transition={{
            repeat: Infinity,
            duration: 2,
            ease: "linear",
          }}
        />

        <motion.line
          x1="280"
          y1="280"
          x2="70"
          y2="170"
          stroke="#D4AF37"
          strokeWidth="2"
          strokeDasharray="8 8"
          animate={{ strokeDashoffset: [16, 0] }}
          transition={{
            repeat: Infinity,
            duration: 2,
            ease: "linear",
          }}
        />

        <motion.line
          x1="280"
          y1="280"
          x2="490"
          y2="170"
          stroke="#D4AF37"
          strokeWidth="2"
          strokeDasharray="8 8"
          animate={{ strokeDashoffset: [16, 0] }}
          transition={{
            repeat: Infinity,
            duration: 2,
            ease: "linear",
          }}
        />

      </svg>


      {/* AI CHATBOT */}
      <FloatingCard
        icon={Bot}
        title="AI Chatbot"
        x="38%"
        y="-10%"
        delay={0}
      />

      {/* WEBSITES */}
      <FloatingCard
        icon={Globe}
        title="Websites"
        x="-10%"
        y="22%"
        delay={0.5}
      />

      {/* AI AUTOMATION */}
      <FloatingCard
        icon={BrainCircuit}
        title="AI Automation"
        x="62%"
        y="18%"
        delay={1}
      />

      {/* SOFTWARE */}
      <FloatingCard
        icon={Laptop}
        title="Software"
        x="-8%"
        y="72%"
        delay={1.5}
      />

      {/* MOBILE APPS */}
      <FloatingCard
        icon={Smartphone}
        title="Mobile Apps"
        x="62%"
        y="72%"
        delay={2}
      />

      {/* CENTER AI */}
      <AICore />

    </div>
  );
}