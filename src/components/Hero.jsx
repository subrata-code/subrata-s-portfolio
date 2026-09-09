import React from "react";
import { motion } from "framer-motion";
import { profileData } from "../constants/portfolioData";
import { ArrowRight, FileText } from "lucide-react";
import demo from "../assets/demo.png";
import Stats from "./stats";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.8, 0.25, 1] },
  },
};

const Hero = () => {
  return (
    <div className="hero w-full relative overflow-hidden flex flex-col" style={{ minHeight: 'calc(100dvh - 5rem)' }}>
      {/* Gradient Mesh Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0f1e] via-[#0f172a] to-[#0c1220]">
        <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-600/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-40 right-10 w-96 h-96 bg-blue-600/15 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[150px]" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex-1 flex flex-col md:flex-row items-center justify-between px-4 sm:px-6 md:px-10 lg:px-16 py-6 sm:py-8 max-w-7xl mx-auto w-full">
        {/* Left Section */}
        <motion.div
          className="w-full md:w-1/2 flex flex-col gap-4 text-center md:text-left"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Status Badge */}
          <motion.div variants={itemVariants} className="flex justify-center md:justify-start flex-wrap gap-2">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-emerald-500/10 backdrop-blur-sm border border-emerald-500/20 text-emerald-300 text-xs font-semibold rounded-full shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Available for Freelance & Full-Time Roles
            </span>
            <span className="hidden sm:inline-flex items-center px-3 py-1 bg-white/5 border border-white/10 text-indigo-300 text-xs font-medium rounded-full">
              Full-Stack & 3D Web
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight"
          >
            <span className="text-white">Full-Stack </span>
            <span className="bg-gradient-to-r from-indigo-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Software Developer
            </span>
            <br />
            <span className="text-white">& Freelance </span>
            <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
              Web Engineer
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-sm md:text-base text-gray-300 leading-relaxed max-w-xl"
          >
            I build modern, scalable web applications and immersive 3D digital experiences using{" "}
            <span className="text-indigo-300 font-semibold">React</span>,{" "}
            <span className="text-blue-300 font-semibold">Node.js</span>,{" "}
            <span className="text-emerald-300 font-semibold">MongoDB</span>, and{" "}
            <span className="text-cyan-300 font-semibold">Three.js</span>. Final-year CSE student available for freelance contracts, client web solutions, and software engineering roles.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-3 mt-1 justify-center md:justify-start"
          >
            <a
              href="https://www.linkedin.com/in/subrata-bag-547091293/"
              target="_blank"
              rel="noopener noreferrer"
              title="Connect with Subrata Bag on LinkedIn for freelance and career opportunities"
              aria-label="Connect with Subrata Bag on LinkedIn"
              className="group px-6 py-3 bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-500 hover:to-blue-500 text-white font-semibold rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-indigo-500/25 hover:shadow-xl hover:shadow-indigo-500/30 transition-all duration-300 transform hover:-translate-y-0.5"
            >
              Hire Me / Get in Touch
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              title="Download Subrata Bag's Software Developer Resume"
              aria-label="View Subrata Bag's Resume"
              className="group px-6 py-3 bg-white/10 hover:bg-white/15 backdrop-blur-sm border border-white/20 text-white font-semibold rounded-xl flex items-center justify-center gap-2 transition-all duration-300 transform hover:-translate-y-0.5"
            >
              <FileText className="w-4 h-4" />
              View Resume
            </a>
          </motion.div>
        </motion.div>

        {/* Right Section — Image */}
        <motion.div
          className="w-full md:w-5/12 flex items-center justify-center mt-6 md:mt-0"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        >
          <div className="relative w-1/2 sm:w-3/4 max-w-sm">
            <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500/20 via-blue-500/20 to-purple-500/20 rounded-2xl blur-2xl" />
            <div className="relative rounded-2xl overflow-hidden shadow-2xl hero-image-glow group">
              <img
                className="h-full w-full object-cover aspect-[3/4] transition-transform duration-700 group-hover:scale-105"
                src={demo}
                alt="Subrata Bag - Full-Stack Software Developer & Freelance Web Engineer"
                fetchPriority="high"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/90 via-transparent to-transparent flex items-end justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="text-center text-white px-4 pb-6">
                  <h2 className="text-xl font-bold mb-1">Subrata Bag</h2>
                  <p className="text-sm text-indigo-300">
                    Full-Stack & Freelance Software Developer
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Stats Section — Part of the same viewport */}
      <div className="relative z-10 py-4 sm:py-6">
        <Stats />
      </div>
    </div>
  );
};

export default Hero;