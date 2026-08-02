export default function Process() {
  return (
    <section
    id="process"
    className="py-28 bg-[#050505] text-white"
    >
      <div className="max-w-7xl mx-auto px-8">

        <h2 className="text-5xl font-bold text-center mb-16">
          How We Work
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          <div className="bg-[#111111] border border-[#D4AF37]/20 rounded-3xl p-8">
            <div className="text-[#D4AF37] text-4xl mb-5">01</div>
            <h3 className="text-2xl font-bold">Discovery</h3>
            <p className="text-gray-400 mt-4">
              We understand your business and goals.
            </p>
          </div>

          <div className="bg-[#111111] border border-[#D4AF37]/20 rounded-3xl p-8">
            <div className="text-[#D4AF37] text-4xl mb-5">02</div>
            <h3 className="text-2xl font-bold">Strategy</h3>
            <p className="text-gray-400 mt-4">
              We prepare the perfect roadmap.
            </p>
          </div>

          <div className="bg-[#111111] border border-[#D4AF37]/20 rounded-3xl p-8">
            <div className="text-[#D4AF37] text-4xl mb-5">03</div>
            <h3 className="text-2xl font-bold">Development</h3>
            <p className="text-gray-400 mt-4">
              We build fast, secure and scalable products.
            </p>
          </div>

          <div className="bg-[#111111] border border-[#D4AF37]/20 rounded-3xl p-8">
            <div className="text-[#D4AF37] text-4xl mb-5">04</div>
            <h3 className="text-2xl font-bold">Launch</h3>
            <p className="text-gray-400 mt-4">
              We deploy and support your project.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}