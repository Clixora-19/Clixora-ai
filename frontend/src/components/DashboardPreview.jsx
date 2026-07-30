import { motion } from "framer-motion";
import {
  FiCalendar,
  FiMessageSquare,
  FiDollarSign,
  FiCheckCircle,
} from "react-icons/fi";

export default function DashboardPreview() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 80 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6 w-[420px] shadow-2xl"
    >
      <h2 className="text-2xl font-bold mb-6 text-cyan-400">
        Clixora Dashboard
      </h2>

      <div className="space-y-4">

        <div className="flex justify-between items-center bg-white/5 rounded-xl p-4">
          <div className="flex items-center gap-3">
            <FiCalendar className="text-cyan-400 text-xl" />
            <span>Today's Appointments</span>
          </div>

          <span className="font-bold">24</span>
        </div>

        <div className="flex justify-between items-center bg-white/5 rounded-xl p-4">
          <div className="flex items-center gap-3">
            <FiMessageSquare className="text-purple-400 text-xl" />
            <span>AI Conversations</span>
          </div>

          <span className="font-bold">156</span>
        </div>

        <div className="flex justify-between items-center bg-white/5 rounded-xl p-4">
          <div className="flex items-center gap-3">
            <FiDollarSign className="text-green-400 text-xl" />
            <span>Revenue Today</span>
          </div>

          <span className="font-bold">₹84,250</span>
        </div>

        <div className="flex justify-between items-center bg-white/5 rounded-xl p-4">
          <div className="flex items-center gap-3">
            <FiCheckCircle className="text-cyan-400 text-xl" />
            <span>Automation Status</span>
          </div>

          <span className="text-green-400 font-bold">
            Running
          </span>
        </div>

      </div>

      <div className="mt-8">
        <h3 className="font-semibold mb-4">
          Recent Activity
        </h3>

        <div className="space-y-3 text-gray-300 text-sm">
          <p>✅ New Lead from Website</p>
          <p>🤖 WhatsApp AI replied instantly</p>
          <p>📅 Appointment confirmed</p>
        </div>
      </div>
    </motion.div>
  );
}