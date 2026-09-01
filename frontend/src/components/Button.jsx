export default function Button({
  children,
  variant = "primary",
  className = "",
}) {

  const base =
    "group relative overflow-hidden px-8 py-4 rounded-xl font-semibold transition-all duration-500 transform";

  const styles = {
    primary:
      "bg-[#D4AF37] text-black hover:scale-105 hover:-translate-y-1 shadow-lg hover:shadow-[0_0_35px_rgba(212,175,55,0.65)]",

    secondary:
      "border border-[#D4AF37] text-[#D4AF37] bg-transparent hover:bg-[#D4AF37] hover:text-black hover:scale-105 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(212,175,55,0.45)]",
  };

  return (
    <button
      className={`${base} ${styles[variant]} ${className}`}
    >

      {/* Shine Effect */}
      <span
        className="
        absolute inset-0
        -translate-x-full
        bg-gradient-to-r
        from-transparent
        via-white/40
        to-transparent
        group-hover:translate-x-full
        transition-transform
        duration-1000
        "
      />

      {/* Glow */}
      <span
        className="
        absolute
        inset-0
        rounded-xl
        bg-[#D4AF37]/10
        blur-xl
        opacity-0
        group-hover:opacity-100
        transition
        duration-500
        "
      />

      <span className="relative z-10">
        {children}
      </span>

    </button>
  );
}