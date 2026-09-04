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
          w-[150px]
          sm:w-52
          rounded-2xl
          sm:rounded-3xl
          bg-white/5
          backdrop-blur-2xl
          border
          border-[#D4AF37]/20
          p-4
          sm:p-6
          shadow-[0_0_40px_rgba(212,175,55,.12)]
          hover:border-[#D4AF37]
          hover:shadow-[0_0_70px_rgba(212,175,55,.35)]
          transition-all
          duration-500
        "
      >

        <Icon
          size={26}
          className="text-[#D4AF37] sm:w-[34px] sm:h-[34px]"
        />

        <h3 className="
          mt-3
          sm:mt-5
          text-base
          sm:text-xl
          font-bold
          whitespace-nowrap
        ">
          {title}
        </h3>

        <p className="
          mt-1
          sm:mt-2
          text-gray-400
          text-xs
          sm:text-sm
          whitespace-nowrap
        ">
          AI Powered Solution
        </p>

      </motion.div>
    </motion.div>
  );
}