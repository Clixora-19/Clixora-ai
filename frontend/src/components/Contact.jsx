import Button from "./Button";

export default function Contact() {
  return (
    <section
    id="contact"
    className="py-28 bg-[#050505] text-white"
    >

      <div className="max-w-7xl mx-auto px-8">

        <div className="text-center">

          <p className="text-[#D4AF37] font-semibold">
            CONTACT US
          </p>

          <h2 className="text-5xl font-bold mt-4">
            Let's Build Something Amazing
          </h2>

          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            Whether you need an AI solution, website, mobile app or custom software,
            our team is ready to help you grow.
          </p>

        </div>

        <div className="grid lg:grid-cols-2 gap-16 mt-20">

          {/* Left Side */}

          <div>

            <h3 className="text-3xl font-bold mb-8">
              Contact Information
            </h3>

            <div className="space-y-8">

              <div>
                <p className="text-[#D4AF37] font-semibold">Email</p>
                <p className="text-gray-300">
                  clixoraai19@gmail.com
                </p>
              </div>

              <div>
                <p className="text-[#D4AF37] font-semibold">Phone</p>
                <p className="text-gray-300">
                  +91 XXXXX XXXXX
                </p>
              </div>

              <div>
                <p className="text-[#D4AF37] font-semibold">Location</p>
                <p className="text-gray-300">
                  Indore, Madhya Pradesh, India
                </p>
              </div>

            </div>

          </div>

          {/* Right Side */}

          <form className="space-y-6">

            <input
              type="text"
              placeholder="Your Name"
              className="w-full bg-[#111111] border border-[#D4AF37]/20 rounded-xl p-4 outline-none"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="w-full bg-[#111111] border border-[#D4AF37]/20 rounded-xl p-4 outline-none"
            />

            <textarea
              rows="6"
              placeholder="Tell us about your project..."
              className="w-full bg-[#111111] border border-[#D4AF37]/20 rounded-xl p-4 outline-none"
            />

            <Button>
              Book Free Consultation
            </Button>

          </form>

        </div>

      </div>

    </section>
  );
}