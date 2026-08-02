import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiPlus, FiMinus } from "react-icons/fi";

const faqs = [
  {
    question: "What services does Clixora AI provide?",
    answer:
      "We build premium websites, AI automation systems, business software, mobile applications, chatbots and custom digital solutions for businesses of every size.",
  },
  {
    question: "How long does a website take to build?",
    answer:
      "Most business websites are completed within 7–14 days depending on the features and requirements.",
  },
  {
    question: "Do you provide AI automation?",
    answer:
      "Yes. We develop AI chatbots, WhatsApp automation, CRM automation, workflow automation and intelligent business solutions.",
  },
  {
    question: "Can you redesign my existing website?",
    answer:
      "Absolutely. We can redesign your existing website with a modern UI, improved speed, SEO and better user experience.",
  },
  {
    question: "Do you offer support after delivery?",
    answer:
      "Yes. We provide ongoing maintenance, updates, bug fixes and technical support after project delivery.",
  },
  {
    question: "How do I get started?",
    answer:
      "Simply click 'Book a Call' or contact us through the contact form. We'll schedule a free consultation and discuss your project.",
  },
];

export default function Faq() {
  const [open, setOpen] = useState(null);

  return (
    <section
      id="faq"
      className="py-28 bg-[#050505] text-white"
    >
      <div className="max-w-5xl mx-auto px-8">

        <div className="text-center mb-16">
          <p className="text-[#D4AF37] font-semibold uppercase">
            Frequently Asked Questions
          </p>

          <h2 className="text-5xl font-bold mt-4">
            Got Questions?
          </h2>

          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            Everything you need to know before starting your project
            with Clixora AI.
          </p>
        </div>

        <div className="space-y-5">

          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-[#D4AF37]/20 rounded-2xl bg-[#111111] overflow-hidden"
            >
              <button
                onClick={() =>
                  setOpen(open === index ? null : index)
                }
                className="w-full flex justify-between items-center p-6 text-left"
              >
                <h3 className="text-xl font-semibold">
                  {faq.question}
                </h3>

                {open === index ? (
                  <FiMinus
                    className="text-[#D4AF37]"
                    size={24}
                  />
                ) : (
                  <FiPlus
                    className="text-[#D4AF37]"
                    size={24}
                  />
                )}
              </button>

              <AnimatePresence>

                {open === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35 }}
                  >
                    <div className="px-6 pb-6 text-gray-400 leading-8">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}

              </AnimatePresence>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}