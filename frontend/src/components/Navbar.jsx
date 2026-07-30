export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-[#050816]/70 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-5">

        <h1 className="text-3xl font-extrabold tracking-wide">
          <span className="text-white">Clixora</span>
          <span className="text-cyan-400">AI</span>
        </h1>

        <div className="hidden md:flex gap-8 text-gray-300">
          <a href="#" className="hover:text-cyan-400 transition">Home</a>
          <a href="#" className="hover:text-cyan-400 transition">Services</a>
          <a href="#" className="hover:text-cyan-400 transition">Portfolio</a>
          <a href="#" className="hover:text-cyan-400 transition">About</a>
          <a href="#" className="hover:text-cyan-400 transition">Contact</a>
        </div>

        <button className="rounded-xl bg-cyan-500 px-5 py-2 font-semibold hover:bg-cyan-600 transition">
          Get Started
        </button>

      </div>
    </nav>
  );
}