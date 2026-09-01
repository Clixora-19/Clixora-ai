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

          <div className="flex justify-between items-center mb-6">

  <div>
    <h2 className="text-2xl font-bold text-[#D4AF37]">
      Clixora OS
    </h2>

    <p className="text-sm text-gray-400 mt-1">
      AI Business Control Center
    </p>
  </div>

  <div className="flex items-center gap-2">
    <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>

    <span className="text-sm text-green-400">
      Online
    </span>
  </div>

</div>

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
      <div className="grid grid-cols-2 gap-4 mb-6">

  <div className="bg-[#111111] rounded-2xl p-4 border border-[#D4AF37]/20">
    <p className="text-gray-400 text-sm">
      Active Clients
    </p>

    <h3 className="text-3xl font-bold mt-2">
      24
    </h3>
  </div>

  <div className="bg-[#111111] rounded-2xl p-4 border border-[#D4AF37]/20">
    <p className="text-gray-400 text-sm">
      AI Agents
    </p>

    <h3 className="text-3xl font-bold mt-2 text-[#D4AF37]">
      12
    </h3>
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

      <div className="space-y-4 text-sm">

      <div className="flex justify-between">
      <span>🤖 AI replied to website lead</span>
      <span className="text-green-400">Now</span>
      </div>

      <div className="flex justify-between">
      <span>📅 Consultation booked</span>
      <span className="text-[#D4AF37]">2 min</span>
      </div>

      <div className="flex justify-between">
      <span>💳 Invoice generated</span>
      <span className="text-blue-400">5 min</span>
      </div>

      <div className="flex justify-between">
      <span>⚡ Workflow completed</span>
      <span className="text-purple-400">8 min</span>
      </div>

      </div>

          <span className="text-green-400 font-semibold">
            Active
          </span>

      {/* Bottom */}

      <div className="mt-8 pt-6 border-t border-white/10 flex justify-between">

        <span className="text-gray-400">
        System Health
        </span>

        <span className="text-green-400 font-bold">
        99.9%
        </span>

      </div>

    </motion.div>
  );
}