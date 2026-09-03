import React from "react";
import { motion } from "framer-motion";
import { profileData } from "../constants/portfolioData";
import {
  GraduationCap,
  Calendar,
  FileText,
  Briefcase,
  ArrowRight,
} from "lucide-react";
import demoImage from "../assets/demo.jpeg";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const CredentialItem = ({ icon, text, label }) => (
  <motion.div
    variants={fadeInUp}
    className="flex flex-col gap-3 p-5 rounded-xl bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 dark:border-gray-700 group cursor-default"
  >
    <div className="bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-indigo-950 dark:to-blue-950 p-3 rounded-xl w-fit group-hover:from-indigo-100 group-hover:to-blue-100 dark:group-hover:from-indigo-900 dark:group-hover:to-blue-900 transition-colors duration-300">
      {icon}
    </div>
    <div>
      <p className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider">
        {label}
      </p>
      <p className="text-gray-800 dark:text-gray-100 font-bold mt-0.5 line-clamp-2">{text}</p>
    </div>
  </motion.div>
);

const AboutSection = () => {
  return (
    <section
      id="about"
      className="py-16 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center mb-12">
          <motion.div
            className="text-center"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-3">
              About
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-full mx-auto mb-4" />
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Learn more about my background, software development focus, and technical experience
            </p>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-3 gap-10">
          {/* Left Side Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="hidden lg:block"
          >
            <div className="sticky top-24">
              <div className="relative">
                <div className="absolute -inset-2 bg-gradient-to-r from-indigo-200/50 to-blue-200/50 dark:from-indigo-800/30 dark:to-blue-800/30 rounded-2xl blur-xl" />
                <motion.img
                  src={demoImage}
                  alt="Professional Journey"
                  className="relative rounded-2xl shadow-lg object-cover h-[400px] w-full cursor-pointer"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
              <div className="mt-4 text-center">
                <h4 className="text-lg font-bold text-gray-800 dark:text-white">
                  {profileData.name}
                </h4>
                <p className="text-gray-500 dark:text-gray-400 text-sm">
                  {profileData.currentPosition}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Content Area */}
          <div className="lg:col-span-2">
            <motion.div
              className="space-y-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div variants={fadeInUp}>
                <h3 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
                  {profileData.name}
                </h3>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  Subrata Bag is a final-year B.Tech Computer Science & Engineering student at Calcutta Institute of Technology (affiliated with MAKAUT) with a strong focus on software development. With practical development experience across frontend and backend engineering, he builds modern web applications and interactive digital experiences. His core technical toolkit spans React, JavaScript, Node.js, Express.js, and MongoDB, alongside browser-based 3D web development using Three.js and React Three Fiber. Grounded in computer science fundamentals and Data Structures & Algorithms, Subrata is focused on writing clean, efficient code and creating real-world software applications that deliver intuitive, high-quality user experiences.
                </p>
              </motion.div>

              {/* Credentials Grid */}
              <motion.div
                className="grid sm:grid-cols-2 gap-5"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {[
                  { icon: <GraduationCap className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />, text: profileData.education[0].degree, label: "Education" },
                  { icon: <Calendar className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />, text: "Calcutta Institute of Technology (MAKAUT)", label: "Institution" },
                  { icon: <Briefcase className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />, text: "Three.js / React Three Fiber Developer", label: "Relevant Experience" },
                  { icon: <FileText className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />, text: "Final-Year B.Tech CSE Student", label: "Academic Status" },
                ].map((item, index) => (
                  <CredentialItem key={index} {...item} />
                ))}
              </motion.div>

              {/* Experience Section */}
              <motion.div
                variants={fadeInUp}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border border-gray-100 dark:border-gray-700 space-y-3"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <div>
                    <h4 className="text-xl font-bold text-gray-800 dark:text-white">Azmth Labs Pvt. Ltd.</h4>
                    <p className="text-indigo-600 dark:text-indigo-400 font-medium text-sm">Three.js / React Three Fiber Developer</p>
                  </div>
                  <span className="text-xs px-3 py-1 bg-indigo-50 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 font-semibold rounded-full w-fit border border-indigo-100 dark:border-indigo-800">
                    Work Experience
                  </span>
                </div>
                <ul className="space-y-2 text-gray-600 dark:text-gray-400 text-sm list-disc pl-5">
                  {profileData.workHistory[0].bullets.map((bullet, idx) => (
                    <li key={idx}>{bullet}</li>
                  ))}
                </ul>
              </motion.div>

              {/* Contact Information */}
              <motion.div className="space-y-3" variants={fadeInUp}>
                <div className="bg-white dark:bg-gray-800 shadow-md p-6 rounded-xl border border-gray-100 dark:border-gray-700 space-y-2">
                  <p className="flex items-center gap-2">
                    <span className="font-semibold text-gray-700 dark:text-gray-300">Email:</span>
                    <span className="text-indigo-600 dark:text-indigo-400 font-medium">{profileData.contact.email}</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="font-semibold text-gray-700 dark:text-gray-300">Phone:</span>
                    <span className="text-indigo-600 dark:text-indigo-400 font-medium">{profileData.contact.phone}</span>
                  </p>
                </div>
              </motion.div>

              {/* CTA Button */}
              <motion.div variants={fadeInUp}>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-7 py-3 bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 text-white font-semibold rounded-xl shadow-lg shadow-indigo-200 dark:shadow-indigo-900/30 hover:shadow-xl hover:gap-3 transition-all duration-300"
                >
                  Contact Me
                  <ArrowRight className="w-5 h-5" />
                </a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;