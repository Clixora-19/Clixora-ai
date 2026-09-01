import { motion } from "framer-motion";

export default function FloatingCard({
  title,
  icon: Icon,
  x,
  y,
  delay,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{
        opacity: 1,
        y: [0, -12, 0],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        delay,
      }}
      className="absolute"
      style={{
        left: x,
        top: y,
      }}
    >
      <motion.div
        whileHover={{
          scale: 1.08,
          rotate: -2,
        }}
        className="
        w-52
        rounded-3xl
        bg-white/5
        backdrop-blur-2xl
        border
        border-[#D4AF37]/20
        p-6
        shadow-[0_0_40px_rgba(212,175,55,.12)]
        hover:border-[#D4AF37]
        hover:shadow-[0_0_70px_rgba(212,175,55,.35)]
        transition-all
        duration-500
        "
      >
        <Icon
          size={34}
          className="text-[#D4AF37]"
        />

        <h3 className="mt-5 text-xl font-bold">
          {title}
        </h3>

        <p className="mt-2 text-gray-400 text-sm">
          AI Powered Solution
        </p>
      </motion.div>
    </motion.div>
  );
}