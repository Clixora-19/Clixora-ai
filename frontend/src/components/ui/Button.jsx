export default function Button({
  children,
  variant = "primary",
  className = "",
}) {
  const base =
    "relative overflow-hidden px-8 py-4 rounded-xl font-semibold transition-all duration-300";

  const styles = {
    primary:
      "bg-[#D4AF37] text-black hover:scale-105 hover:shadow-[0_0_30px_rgba(212,175,55,0.45)]",

    secondary:
      "border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black hover:scale-105",
  };

  return (
    <button className={`${base} ${styles[variant]} ${className}`}>
      <span className="relative z-10">{children}</span>

      <span className="absolute inset-0 -translate-x-full bg-white/20 hover:translate-x-full transition-transform duration-700"></span>
    </button>
  );
}