import { motion } from "framer-motion";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Button from "../components/Button";

export default function Contact() {
  return (
    <>
      <Navbar />

      <section className="bg-[#050505] text-white pt-40 pb-24">

        <div className="max-w-7xl mx-auto px-8">

          {/* HERO */}

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .8 }}
            className="text-center"
          >

            <p className="uppercase tracking-[5px] text-[#D4AF37] font-semibold">
              Let's Build Together
            </p>

            <h1 className="text-6xl lg:text-7xl font-black mt-6">
              Contact <span className="text-[#D4AF37]">Us</span>
            </h1>

            <p className="text-gray-400 max-w-3xl mx-auto mt-8 text-xl leading-9">
              Whether you need a premium website,
              AI automation, custom software or
              mobile app, our team is ready to help.
            </p>

            <Button className="mt-10">
              Book Free Consultation
            </Button>

          </motion.div>

          {/* CONTACT CARDS */}

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-24">

            <div className="bg-[#111] rounded-3xl p-8 border border-[#D4AF37]/20 hover:border-[#D4AF37] transition">

              <FaPhoneAlt className="text-4xl text-[#D4AF37]" />

              <h3 className="text-2xl font-bold mt-6">
                Phone
              </h3>

              <p className="text-gray-400 mt-4">
                +91 XXXXX XXXXX
              </p>

            </div>

            <div className="bg-[#111] rounded-3xl p-8 border border-[#D4AF37]/20 hover:border-[#D4AF37] transition">

              <FaEnvelope className="text-4xl text-[#D4AF37]" />

              <h3 className="text-2xl font-bold mt-6">
                Email
              </h3>

              <p className="text-gray-400 mt-4">
                clixoraai19@gmail.com
              </p>

            </div>

            <div className="bg-[#111] rounded-3xl p-8 border border-[#D4AF37]/20 hover:border-[#D4AF37] transition">

              <FaMapMarkerAlt className="text-4xl text-[#D4AF37]" />

              <h3 className="text-2xl font-bold mt-6">
                Location
              </h3>

              <p className="text-gray-400 mt-4">
                Indore,
                <br />
                Madhya Pradesh
              </p>

            </div>

            <div className="bg-[#111] rounded-3xl p-8 border border-[#D4AF37]/20 hover:border-[#D4AF37] transition">

              <FaClock className="text-4xl text-[#D4AF37]" />

              <h3 className="text-2xl font-bold mt-6">
                Working Hours
              </h3>

              <p className="text-gray-400 mt-4">
                Mon - Sat
                <br />
                10 AM - 7 PM
              </p>

            </div>

          </div>

          {/* CONTACT FORM */}

          <div className="bg-[#111] rounded-3xl p-10 mt-24 border border-[#D4AF37]/20">

            <h2 className="text-4xl font-black mb-10">
              Send Us a Message
            </h2>

            <div className="grid md:grid-cols-2 gap-6">

              <input
                className="bg-[#050505] p-4 rounded-xl outline-none border border-gray-700"
                placeholder="Full Name"
              />

              <input
                className="bg-[#050505] p-4 rounded-xl outline-none border border-gray-700"
                placeholder="Email"
              />

              <input
                className="bg-[#050505] p-4 rounded-xl outline-none border border-gray-700"
                placeholder="Phone Number"
              />

              <input
                className="bg-[#050505] p-4 rounded-xl outline-none border border-gray-700"
                placeholder="Company"
              />

            </div>

            <textarea
              rows="6"
              placeholder="Tell us about your project..."
              className="bg-[#050505] w-full mt-6 p-4 rounded-xl border border-gray-700 outline-none"
            ></textarea>

            <Button className="mt-8">
              Send Message
            </Button>

          </div>

        </div>

      </section>

    
    </>
  );
}