import logo from "../assets/logo.png";

export default function Footer() {
  return (
    <footer className="bg-[#0A0A0A] border-t border-[#D4AF37]/20 text-white">

      <div className="max-w-7xl mx-auto px-8 py-20">

        <div className="grid md:grid-cols-4 gap-12">

          {/* Logo */}

          <div>

            <img
              src={logo}
              alt="Clixora AI"
              className="w-20 mb-5"
            />

            <p className="text-gray-400 leading-7">
              Clixora AI is a premium software development and AI
              automation company helping businesses build the future.
            </p>

          </div>

          {/* Company */}

          <div>

            <h3 className="text-xl font-bold mb-6 text-[#D4AF37]">
              Company
            </h3>

            <ul className="space-y-4 text-gray-400">

              <li>About</li>
              <li>Portfolio</li>
              <li>Pricing</li>
              <li>Contact</li>

            </ul>

          </div>

          {/* Services */}

          <div>

            <h3 className="text-xl font-bold mb-6 text-[#D4AF37]">
              Services
            </h3>

            <ul className="space-y-4 text-gray-400">

              <li>Website Development</li>
              <li>AI Automation</li>
              <li>Software Development</li>
              <li>Mobile Apps</li>

            </ul>

          </div>

          {/* Contact */}

          <div>

            <h3 className="text-xl font-bold mb-6 text-[#D4AF37]">
              Contact
            </h3>

            <ul className="space-y-4 text-gray-400">

              <li>clixoraai19@gmail.com</li>
              <li>Indore, India</li>
              <li>+91 XXXXX XXXXX</li>

            </ul>

          </div>

        </div>

        <div className="border-t border-white/10 mt-16 pt-8 text-center text-gray-500">

          © 2026 Clixora AI. All Rights Reserved.

        </div>

      </div>

    </footer>
  );
}