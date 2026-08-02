import { motion } from "framer-motion";
import {
  FiCalendar,
  FiMessageSquare,
  FiDollarSign,
  FiCheckCircle,
  FiTrendingUp,
  FiUsers,
  FiCpu,
} from "react-icons/fi";

export default function DashboardPreview() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      whileHover={{ y: -8 }}
      className="relative w-[470px] rounded-3xl border border-[#D4AF37]/20 bg-[#111111]/80 backdrop-blur-2xl p-7 shadow-[0_0_60px_rgba(212,175,55,0.08)]"
    >
      {/* Header */}

      <div className="flex justify-between items-center mb-8">

        <div>

          <h2 className="text-2xl font-bold text-[#D4AF37]">
            Clixora AI
          </h2>

          <p className="text-gray-400 text-sm">
            Business Intelligence Dashboard
          </p>

        </div>

        <div className="flex items-center gap-2">

          <span className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></span>

          <span className="text-green-400 text-sm">
            Live
          </span>

        </div>

      </div>

      {/* Stats */}

      <div className="grid grid-cols-2 gap-4 mb-7">

        <div className="bg-black/40 rounded-2xl p-5 border border-white/5">
          <FiUsers className="text-[#D4AF37] text-2xl mb-3" />
          <p className="text-gray-400 text-sm">Clients</p>
          <h3 className="text-3xl font-bold">132</h3>
        </div>

        <div className="bg-black/40 rounded-2xl p-5 border border-white/5">
          <FiTrendingUp className="text-green-400 text-2xl mb-3" />
          <p className="text-gray-400 text-sm">Growth</p>
          <h3 className="text-3xl font-bold">+48%</h3>
        </div>

      </div>

      {/* Activities */}

      <div className="space-y-4">

        <div className="flex justify-between items-center bg-black/30 rounded-xl p-4">
          <div className="flex items-center gap-3">
            <FiCalendar className="text-[#D4AF37]" />
            Today's Meetings
          </div>
          <strong>24</strong>
        </div>

        <div className="flex justify-between items-center bg-black/30 rounded-xl p-4">
          <div className="flex items-center gap-3">
            <FiMessageSquare className="text-purple-400" />
            AI Conversations
          </div>
          <strong>156</strong>
        </div>

        <div className="flex justify-between items-center bg-black/30 rounded-xl p-4">
          <div className="flex items-center gap-3">
            <FiDollarSign className="text-green-400" />
            Revenue
          </div>
          <strong>₹84,250</strong>
        </div>

        <div className="flex justify-between items-center bg-black/30 rounded-xl p-4">
          <div className="flex items-center gap-3">
            <FiCpu className="text-[#D4AF37]" />
            AI Automation
          </div>

          <span className="text-green-400 font-semibold">
            Active
          </span>

        </div>

      </div>

      {/* Bottom */}

      <div className="mt-8 rounded-2xl bg-[#D4AF37]/10 border border-[#D4AF37]/20 p-5">

        <div className="flex items-center gap-3 mb-3">

          <FiCheckCircle className="text-[#D4AF37]" />

          <h4 className="font-semibold">
            System Status
          </h4>

        </div>

        <p className="text-gray-300 text-sm leading-7">
          Website, CRM, AI Chatbot and WhatsApp Automation are
          running successfully.
        </p>

      </div>

    </motion.div>
  );
}