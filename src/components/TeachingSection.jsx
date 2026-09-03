import { motion } from "framer-motion";
import { Code2, Brain, Globe } from "lucide-react";
import journey from "../assets/dp.jpeg";

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
      className="py-16 bg-gradient-to-b from-gray-100 to-white dark:from-gray-900 dark:to-gray-950"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center mb-10">
          <motion.div
            className="text-center"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 dark:text-white mb-4">
              Journey
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
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
                className="rounded-2xl shadow-2xl object-cover h-[400px] w-full cursor-pointer"
                whileHover={{ scale: 1.05, boxShadow: "0 8px 32px 0 rgba(99,102,241,0.25)" }}
                transition={{ duration: 0.4 }}
              />
              <div className="mt-4 text-center">
                <h4 className="text-lg font-semibold text-gray-800 dark:text-white">
                  Engineering Mindset
                </h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
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
              <h3 className="text-3xl font-semibold mb-4 text-indigo-700 dark:text-indigo-400">
                My Engineering Approach
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                As a final-year Computer Science student, I believe in learning by building real software.
                My approach to software engineering combines strong core fundamentals in Data Structures & Algorithms with practical development experience.
              </p>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mt-2">
                From building full-stack web applications with React, Node.js, and MongoDB to engineering interactive 3D web experiences using Three.js and React Three Fiber,
                I focus on creating scalable, clean, and reliable software.
              </p>
            </motion.div>

            {/* Methods */}
            <div className="space-y-8">
              {[
                {
                  title: "Full-Stack Development",
                  desc: "Building responsive web applications using React, Node.js, Express.js, and MongoDB",
                  icon: <Code2 className="w-10 h-10 text-indigo-500 dark:text-indigo-400" />,
                },
                {
                  title: "Problem Solving & DSA",
                  desc: "Sharpening logic through Data Structures & Algorithms with Java, Python, and C",
                  icon: <Brain className="w-10 h-10 text-indigo-500 dark:text-indigo-400" />,
                },
                {
                  title: "Interactive 3D Web Experiences",
                  desc: "Building browser-based 3D graphics and UI using Three.js and React Three Fiber",
                  icon: <Globe className="w-10 h-10 text-indigo-500 dark:text-indigo-400" />,
                },
              ].map((method, idx) => (
                <motion.div
                  key={idx}
                  className="flex items-start gap-5 p-7 bg-white dark:bg-gray-800 rounded-2xl shadow-xl hover:shadow-indigo-400/20 dark:hover:shadow-indigo-500/10 transition-all duration-400 border-l-4 border-indigo-500 cursor-pointer"
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  whileHover={{
                    scale: 1.03,
                    boxShadow: "0 12px 40px 0 rgba(99,102,241,0.2)",
                  }}
                >
                  <div>{method.icon}</div>
                  <div>
                    <h4 className="text-xl font-bold text-indigo-600 dark:text-indigo-400 mb-1">
                      {method.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400">{method.desc}</p>
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