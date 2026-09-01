import { motion } from "framer-motion";

export default function OrbitRing() {
  return (
    <>
      {[260, 330, 410].map((size, i) => (
        <motion.div
          key={size}
          animate={{
            rotate: i % 2 === 0 ? 360 : -360,
          }}
          transition={{
            duration: 18 + i * 8,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute rounded-full border border-[#D4AF37]/20"
          style={{
            width: size,
            height: size,
          }}
        />
      ))}
    </>
  );
}