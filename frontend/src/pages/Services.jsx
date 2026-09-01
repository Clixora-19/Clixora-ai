import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Button from "../components/Button";

export default function Services() {
  return (
    <>
      <Navbar />

      {/* HERO */}

      <section className="relative min-h-screen bg-[#050505] text-white overflow-hidden flex items-center">

        <div className="absolute w-[600px] h-[600px] rounded-full bg-[#D4AF37]/10 blur-[160px] top-0 right-0"></div>

        <div className="max-w-7xl mx-auto px-8 grid lg:grid-cols-2 gap-20 items-center">

          <motion.div
            initial={{ opacity:0,x:-80 }}
            animate={{ opacity:1,x:0 }}
            transition={{duration:.8}}
          >

            <p className="uppercase tracking-[5px] text-[#D4AF37] font-semibold">
              Our Services
            </p>

            <h1 className="text-7xl font-black leading-tight mt-6">
              Build.
              <br />
              Automate.
              <br />
              Scale.
            </h1>

            <p className="text-gray-400 text-xl mt-8 leading-9">
              Premium websites, AI automation,
              custom software and mobile applications
              designed for ambitious businesses.
            </p>

            <div className="flex gap-5 mt-12">

              <Button>
                Book Consultation
              </Button>

              <Button variant="secondary">
                View Portfolio
              </Button>

            </div>

          </motion.div>

          <motion.div
            initial={{opacity:0,x:80}}
            animate={{opacity:1,x:0}}
            transition={{duration:1}}
          >

            <img
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200"
              className="rounded-3xl border border-[#D4AF37]/20"
            />

          </motion.div>

        </div>

      </section>

      {/* WEBSITE */}

      <section className="bg-[#050505] py-28 text-white">

        <div className="max-w-7xl mx-auto px-8 grid lg:grid-cols-2 gap-20 items-center">

          <img
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1000"
            className="rounded-3xl"
          />

          <div>

            <p className="uppercase tracking-[4px] text-[#D4AF37]">
              Website Development
            </p>

            <h2 className="text-5xl font-black mt-5">
              High Performance Websites
            </h2>

            <p className="text-gray-400 mt-6 leading-8">
              Beautiful websites engineered to convert
              visitors into customers.
            </p>

            <div className="grid grid-cols-2 gap-4 mt-10">

              <div>✔ Business Website</div>
              <div>✔ Portfolio</div>
              <div>✔ E-commerce</div>
              <div>✔ Landing Page</div>
              <div>✔ SEO Ready</div>
              <div>✔ Lightning Fast</div>

            </div>

            <Button className="mt-10">
              Start Project
            </Button>

          </div>

        </div>

      </section>

      {/* AI */}

      <section className="bg-black py-28 text-white">

        <div className="max-w-7xl mx-auto px-8 grid lg:grid-cols-2 gap-20 items-center">

          <div>

            <p className="uppercase tracking-[4px] text-[#D4AF37]">
              AI Automation
            </p>

            <h2 className="text-5xl font-black mt-5">
              Save Time With AI
            </h2>

            <p className="text-gray-400 mt-6 leading-8">
              Automate repetitive work and increase productivity using AI.
            </p>

            <div className="grid grid-cols-2 gap-4 mt-10">

              <div>✔ AI Chatbot</div>
              <div>✔ WhatsApp Bot</div>
              <div>✔ CRM Automation</div>
              <div>✔ Email Automation</div>
              <div>✔ Lead Generation</div>
              <div>✔ Workflow</div>

            </div>

            <Button className="mt-10">
              Automate Business
            </Button>

          </div>

          <img
            src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1000"
            className="rounded-3xl"
          />

        </div>

      </section>

      {/* CUSTOM SOFTWARE */}

      <section className="bg-[#050505] py-28 text-white">

        <div className="max-w-7xl mx-auto px-8 grid lg:grid-cols-2 gap-20 items-center">

          <img
            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1000"
            className="rounded-3xl"
          />

          <div>

            <p className="uppercase tracking-[4px] text-[#D4AF37]">
              Custom Software
            </p>

            <h2 className="text-5xl font-black mt-5">
              Tailor Made Solutions
            </h2>

            <p className="text-gray-400 mt-6 leading-8">
              Software built around your business—not the other way around.
            </p>

            <Button className="mt-10">
              Discuss Project
            </Button>

          </div>

        </div>

      </section>

      {/* MOBILE */}

      <section className="bg-black py-28 text-white">

        <div className="max-w-7xl mx-auto px-8 grid lg:grid-cols-2 gap-20 items-center">

          <div>

            <p className="uppercase tracking-[4px] text-[#D4AF37]">
              Mobile Apps
            </p>

            <h2 className="text-5xl font-black mt-5">
              Android & iOS Apps
            </h2>

            <p className="text-gray-400 mt-6 leading-8">
              Premium mobile experiences that users love.
            </p>

            <Button className="mt-10">
              Build App
            </Button>

          </div>

          <img
            src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1000"
            className="rounded-3xl"
          />

        </div>

      </section>

      {/* PROCESS */}

<section className="bg-[#050505] text-white py-28">

  <div className="max-w-7xl mx-auto px-8">

    <div className="text-center mb-20">

      <p className="uppercase tracking-[5px] text-[#D4AF37] font-semibold">
        Our Process
      </p>

      <h2 className="text-6xl font-black mt-5">
        How We Build
      </h2>

      <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
        A transparent process from idea to launch.
      </p>

    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

      {[
        {
          step: "01",
          title: "Discovery",
          desc: "We understand your business goals and challenges."
        },
        {
          step: "02",
          title: "Design",
          desc: "Premium UI/UX focused on conversion and experience."
        },
        {
          step: "03",
          title: "Development",
          desc: "Scalable software built using modern technologies."
        },
        {
          step: "04",
          title: "Launch",
          desc: "Deployment, optimization and long-term support."
        }
      ].map((item, index) => (

        <motion.div
          key={index}
          whileHover={{
            y: -10,
            scale: 1.03
          }}
          className="rounded-3xl border border-white/10 bg-white/5 p-10 hover:border-[#D4AF37] transition-all duration-300"
        >

          <div className="text-6xl font-black text-[#D4AF37]/30">
            {item.step}
          </div>

          <h3 className="text-3xl font-bold mt-5">
            {item.title}
          </h3>

          <p className="text-gray-400 mt-5 leading-8">
            {item.desc}
          </p>

        </motion.div>

      ))}

    </div>

  </div>

</section>

{/* FINAL CTA */}

<section className="py-32 bg-black">

  <div className="max-w-6xl mx-auto px-8">

    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative overflow-hidden rounded-[40px]
      border border-[#D4AF37]/20
      bg-gradient-to-br from-[#111] via-[#090909] to-[#111]
      p-16 text-center"
    >

      <div className="absolute -top-32 -left-32 w-80 h-80 bg-[#D4AF37]/10 rounded-full blur-[120px]"></div>

      <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-[#D4AF37]/10 rounded-full blur-[120px]"></div>

      <p className="uppercase tracking-[5px] text-[#D4AF37] font-semibold">

        Let's Build Together

      </p>

      <h2 className="text-6xl font-black mt-6 leading-tight bg-gradient-to-r from-white via-[#F5E6A5] to-[#D4AF37] bg-clip-text text-transparent">

        Ready To Transform
        <br />
        Your Business?

      </h2>

      <p className="text-gray-400 mt-8 max-w-2xl mx-auto leading-8">

        Whether you need a premium website,
        AI automation, custom software or a mobile app,
        our team is ready to bring your vision to life.

      </p>

      <div className="flex flex-wrap justify-center gap-6 mt-12">

        <Button>
          Book Free Consultation
        </Button>

        <Button variant="secondary">
          View Portfolio
        </Button>

      </div>

    </motion.div>

  </div>

</section>

      <Footer />

    </>
  );
}