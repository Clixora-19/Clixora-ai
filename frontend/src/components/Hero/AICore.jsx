import { motion } from "framer-motion";

export default function AICore() {
  return (
    <div className="relative w-[220px] h-[220px] flex items-center justify-center">

      {/* OUTER GLOW */}
      <div className="absolute w-[220px] h-[220px] rounded-full bg-yellow-400/20 blur-3xl" />

      {/* ROTATING RING 1 */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          duration: 18,
          ease: "linear",
        }}
        className="absolute w-[210px] h-[210px] rounded-full border border-yellow-400/30"
      />

      {/* ROTATING RING 2 */}
      <motion.div
        animate={{ rotate: -360 }}
        transition={{
          repeat: Infinity,
          duration: 12,
          ease: "linear",
        }}
        className="absolute w-[180px] h-[180px] rounded-full border border-yellow-400/20"
      />

      {/* CORE */}
      <motion.div
        animate={{
          scale: [1, 1.03, 1],
        }}
        transition={{
          repeat: Infinity,
          duration: 2,
        }}
        className="
        w-[160px]
        h-[160px]
        rounded-full
        bg-gradient-to-br
        from-[#FFE27A]
        via-[#D4AF37]
        to-[#9E7200]
        flex
        items-center
        justify-center
        shadow-[0_0_120px_rgba(212,175,55,0.9)]
        border
        border-white/20
        "
      >
        <div className="text-center">
          <h1 className="text-6xl font-black text-black">
            AI
          </h1>

          <p className="text-[11px] tracking-[5px] font-bold text-black">
            CLIXORA
          </p>
        </div>
      </motion.div>
    </div>
  );
}