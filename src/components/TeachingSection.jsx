import { motion } from "framer-motion";
import { Code2, Brain, Globe } from "lucide-react";
import journey from "../assets/journey.jpg";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const TeachingSection = () => {
  return (
    <section
      id="journey"
      className="py-16 bg-gradient-to-b from-gray-100 to-white"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header with Image */}
        <div className="flex flex-col items-center mb-10">
          <motion.div
            className="text-center"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4 drop-shadow-lg">
              Journey
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Growing as a software engineer through code, curiosity, and continuous learning
            </p>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-3 gap-10">
          {/* Left Side Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="hidden lg:block"
          >
            <div className="sticky top-24">
              <motion.img
                src={journey}
                alt="Coding Journey"
                className="rounded-2xl shadow-2xl object-cover h-[400px] w-full cursor-pointer transition-transform duration-500 hover:scale-105 hover:shadow-indigo-400"
                whileHover={{ scale: 1.05, boxShadow: "0 8px 32px 0 rgba(99,102,241,0.25)" }}
                transition={{ duration: 0.4 }}
              />
              <div className="mt-4 text-center">
                <h4 className="text-lg font-semibold text-gray-800 drop-shadow">
                  Engineering Mindset
                </h4>
                <p className="text-gray-600 text-sm">
                  Building real-world solutions through code
                </p>
              </div>
            </div>
          </motion.div>

          {/* Content Area */}
          <div className="lg:col-span-2 space-y-10">
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-semibold mb-4 text-indigo-700 drop-shadow">
                My Engineering Philosophy
              </h3>
              <p className="text-lg leading-relaxed text-gray-700">
                As a passionate Computer Science student, I believe in learning by building.
                My journey in software engineering is driven by curiosity, code, and a love for solving practical problems.
              </p>
              <p className="text-lg leading-relaxed text-gray-700 mt-2">
                From mastering core concepts in DSA and system design to building full-stack apps using React, Node.js, and MongoDB,
                I strive to transform ideas into impactful software that can scale and serve users meaningfully.
              </p>
            </motion.div>

            {/* Methods */}
            <div className="space-y-8">
              {[
                {
                  title: "Code-First Learning",
                  desc: "Building real-world apps using React, Node.js, and MongoDB",
                  icon: <Code2 className="w-10 h-10 text-indigo-500" />,
                },
                {
                  title: "Problem Solving",
                  desc: "Sharpening logic through DSA with C, Java, and Python",
                  icon: <Brain className="w-10 h-10 text-indigo-500" />,
                },
                {
                  title: "Future-Ready Skills",
                  desc: "Exploring AI/ML with TensorFlow and Python",
                  icon: <Globe className="w-10 h-10 text-indigo-500" />,
                },
              ].map((method, idx) => (
                <motion.div
                  key={idx}
                  className="flex items-start gap-5 p-7 bg-white rounded-2xl shadow-xl hover:shadow-indigo-400 hover:scale-105 transition-all duration-400 border-l-4 border-indigo-500 cursor-pointer"
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  whileHover={{
                    scale: 1.07,
                    boxShadow: "0 12px 40px 0 rgba(99,102,241,0.25)",
                  }}
                >
                  <div>{method.icon}</div>
                  <div>
                    <h4 className="text-xl font-bold text-indigo-600 mb-1 drop-shadow">
                      {method.title}
                    </h4>
                    <p className="text-gray-600">{method.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeachingSection;