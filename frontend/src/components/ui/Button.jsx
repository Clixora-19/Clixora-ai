export default function Button({
  children,
  variant = "primary",
  className = "",
}) {
  const base =
    "px-8 py-4 rounded-xl font-semibold transition duration-300";

  const styles = {
    primary:
      "bg-cyan-500 hover:bg-cyan-600 text-white",

    secondary:
      "border border-cyan-400 hover:bg-cyan-500 hover:text-black text-white",
  };

  return (
    <button className={`${base} ${styles[variant]} ${className}`}>
      {children}
    </button>
  );
}