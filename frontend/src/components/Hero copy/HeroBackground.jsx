export default function HeroBackground() {
  return (
    <>
      {/* Main Background */}
      <div className="absolute inset-0 bg-[#050505]" />

      {/* Gold Glow Left */}
      <div className="absolute -top-52 -left-52 w-[700px] h-[700px] rounded-full bg-[#D4AF37]/20 blur-[180px]" />

      {/* Purple Glow Right */}
      <div className="absolute -bottom-56 -right-52 w-[700px] h-[700px] rounded-full bg-fuchsia-500/10 blur-[200px]" />

      {/* Center Glow */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full bg-[#D4AF37]/5 blur-[250px]" />

      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(212,175,55,0.15) 1px, transparent 1px),
            linear-gradient(90deg, rgba(212,175,55,0.15) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      />

      {/* Noise */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "radial-gradient(circle,#ffffff 1px,transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />
    </>
  );
}