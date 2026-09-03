import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { number: 20, label: "Projects Completed", suffix: "+" },
  { number: 5, label: "Hackathons Participated", suffix: "+" },
  { number: 15, label: "Technologies Used", suffix: "+" },
  { number: 500, label: "Hours Spent Coding", suffix: "+" },
];

const AnimatedCounter = ({ target, suffix, inView }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span className="tabular-nums">
      {count}{suffix}
    </span>
  );
};

const Stats = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div ref={ref} className="max-w-6xl mx-auto px-4">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.15, ease: "easeOut" }}
            className="text-center cursor-pointer rounded-xl p-5 bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 group"
          >
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-1 group-hover:text-indigo-300 transition-colors duration-300">
              <AnimatedCounter target={stat.number} suffix={stat.suffix} inView={inView} />
            </h2>
            <p className="text-gray-400 text-sm font-medium">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Stats;