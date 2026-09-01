import { motion } from "framer-motion";

export default function Card({
  children,
  className = "",
  delay = 0,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
        delay,
      }}
      whileHover={{
        y: -10,
        scale: 1.02,
      }}
      className={`
        relative
        overflow-hidden
        rounded-3xl
        border border-[#D4AF37]/20
        bg-white/5
        backdrop-blur-xl
        p-8
        transition-all
        duration-500
        hover:border-[#D4AF37]
        hover:shadow-[0_0_40px_rgba(212,175,55,0.25)]
        ${className}
      `}
    >
      {/* Golden Glow */}
      <div className="absolute inset-0 opacity-0 hover:opacity-100 transition duration-500 bg-gradient-to-br from-[#D4AF37]/10 via-transparent to-transparent" />

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
}