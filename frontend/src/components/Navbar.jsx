import logo from "../assets/logo.png";
import Button from "./ui/Button";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50">

      <nav className="max-w-7xl mx-auto mt-6 px-10 py-3 rounded-2xl
      bg-black/50 backdrop-blur-xl border border-[#D4AF37]/20 flex
      justify-between items-center">

        {/* Logo */}

        <div className="flex items-center gap-3">

  <img
    src={logo}
    alt="Clixora AI"
    className="w-14 h-14 object-contain"
  />

  <div className="leading-tight">
    <h1 className="text-2xl font-extrabold tracking-wide">
      <span className="text-[#D4AF37]">CLIXORA</span>
      <span className="text-white"> AI</span>
    </h1>

    <p className="text-[11px] text-gray-400 tracking-[0.25em] uppercase">
      Software • AI • Automation
    </p>
  </div>

</div>

        {/* Menu */}

        <ul className="hidden md:flex gap-10 text-white">

          <a href="#services">
          <li className="hover:text-[#D4AF37] cursor-pointer transition">
          Services
          </li>
          </a>

          <a href="#solutions">
          <li className="hover:text-[#D4AF37] cursor-pointer transition">
            Solutions
          </li>
          </a>
          
          <a href="#portfolio">
          <li className="hover:text-[#D4AF37] cursor-pointer transition">
            Portfolio
          </li>
          </a>

          <a href="#pricing">
          <li className="hover:text-[#D4AF37] cursor-pointer transition">
            Pricing
          </li>
          </a>

          <a href="#contact">
          <li className="hover:text-[#D4AF37] cursor-pointer transition">
            Contact
          </li>
          </a>

        </ul>

        <Button className="bg-[#D4AF37] hover:bg-[#c69d28] text-black font-bold px-7">
        Book a Call
        </Button>
      </nav>

    </header>
  );
}