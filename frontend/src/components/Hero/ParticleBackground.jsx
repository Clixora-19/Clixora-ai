export default function ParticleBackground() {
  return (
    <>
      {[...Array(40)].map((_, i) => (
        <span
          key={i}
          className="absolute rounded-full bg-[#D4AF37] opacity-40 animate-pulse"
          style={{
            width: Math.random() * 5 + 2 + "px",
            height: Math.random() * 5 + 2 + "px",
            left: Math.random() * 100 + "%",
            top: Math.random() * 100 + "%",
            animationDuration: Math.random() * 4 + 2 + "s",
          }}
        />
      ))}
    </>
  );
}