export default function Card({ children, className = "" }) {
  return (
    <div
      className={`bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:border-[#D4AF37] transition duration-300 ${className}`}
    >
      {children}
    </div>
  );
}