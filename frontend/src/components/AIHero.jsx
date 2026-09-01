// import OrbitRing from "./Hero/OrbitRing";
// import AICore from "./Hero/AICore";
{/* <OrbitRing /> */}
{/* <OrbitRing /> */}
{/* <FloatingCard ... /> */}
{/* <AICore /> */}
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
    <div className="relative flex items-center justify-center w-[560px] h-[560px]">
      <OrbitRing />

      {/* OUTER GLOW */}
      <div className="absolute w-[500px] h-[500px] rounded-full bg-[#D4AF37]/10 blur-[120px]" />
      <OrbitRing />

      {/* OUTER RING */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute rounded-full border border-[#D4AF37]/40 animate-pulse"
      />

      {/* SECOND RING */}
      <motion.div
        animate={{ rotate: -360 }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute rounded-full border border-[#D4AF37]/40 animate-pulse"
      />

      {/* THIRD RING */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute rounded-full border border-[#D4AF37]/40 animate-pulse"
      />
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
          animate={{
            strokeDashoffset: [16, 0],
          }}
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
          animate={{
            strokeDashoffset: [16, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 2,
            ease: "linear",
          }}
        />
      
        <motion.line
          x1="280"
          y1="280"
          x2="500"
          y2="170"
          stroke="#D4AF37"
          strokeWidth="2"
          strokeDasharray="8 8"
          animate={{
            strokeDashoffset: [16, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 2,
            ease: "linear",
          }}
        />
      
      </svg>

      {/* Floating Cards */}

      <FloatingCard
      icon={Bot}
      title="AI Chatbot"
      x="38%"
      y="-10%"
      delay={0}
      />

      <FloatingCard
        icon={Globe}
        title="Websites"
        x="-18%"
        y="22%"
        delay={0.5}
      />
      
      <FloatingCard
        icon={BrainCircuit}
        title="AI Automation"
        x="62%"
        y="18%"
        delay={1}
      />
      
      <FloatingCard
        icon={Laptop}
        title="Software"
        x="-16%"
        y="74%"
        delay={1.5}
      />
      
      <FloatingCard
        icon={Smartphone}
        title="Mobile Apps"
        x="62%"
        y="74%"
        delay={2}
      />
      
      

      {/* CENTER AI */}
      <AICore />
        
    </div>
  );
}