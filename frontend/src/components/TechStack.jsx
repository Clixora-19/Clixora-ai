import {
  SiReact,
  SiPython,
  SiNodedotjs,
  SiMongodb,
  SiTailwindcss,
  SiGithub,
  SiVercel,
} from "react-icons/si";

const tech = [
  { icon: <SiReact />, name: "React" },
  { icon: <SiPython />, name: "Python" },
  { icon: <SiNodedotjs />, name: "Node.js" },
  { icon: <SiMongodb />, name: "MongoDB" },
  { icon: <SiTailwindcss />, name: "Tailwind CSS" },
  { icon: <SiGithub />, name: "GitHub" },
  { icon: <SiVercel />, name: "Vercel" },
];

export default function TechStack() {
  return (
    <section className="py-20 bg-[#050505] text-white">

      <div className="max-w-7xl mx-auto px-8">

        <p className="text-center text-[#D4AF37] font-semibold uppercase tracking-widest">
          Technologies We Build With
        </p>

        <h2 className="text-4xl md:text-5xl font-bold text-center mt-4">
          Powered by Modern Technologies
        </h2>

        <p className="text-center text-gray-400 mt-5 max-w-2xl mx-auto">
          We build scalable websites, AI systems and business automation
          using industry-leading technologies.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">

          {tech.map((item, index) => (

            <div
              key={index}
              className="
              group
              bg-white/5
              border
              border-white/10
              rounded-3xl
              p-8
              text-center
              transition-all
              duration-500
              hover:border-[#D4AF37]
              hover:-translate-y-2
              hover:shadow-[0_0_35px_rgba(212,175,55,0.25)]
              "
            >

              <div
                className="
                text-6xl
                text-gray-500
                group-hover:text-[#D4AF37]
                transition
                duration-500
                flex
                justify-center
                "
              >
                {item.icon}
              </div>

              <h3 className="mt-6 font-semibold text-lg">
                {item.name}
              </h3>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}