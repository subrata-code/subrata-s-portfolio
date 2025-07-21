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

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const CredentialItem = ({ icon, text, label }) => (
  <motion.div
    variants={fadeInUp}
    className="flex flex-col gap-2 p-4 rounded-xl bg-white shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100"
  >
    <div className="text-primary bg-blue-50 p-3 rounded-lg w-fit">{icon}</div>
    <div>
      <p className="text-sm font-medium text-gray-500">{label}</p>
      <p className="text-gray-900 font-semibold line-clamp-2">{text}</p>
    </div>
  </motion.div>
);

const AboutSection = () => {
  return (
    <section
      id="about"
      className="py-14 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header with Image */}
        <div className="flex flex-col items-center mb-8">
          <motion.div
            className="text-center"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              About
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Learn more about my professional journey and expertise
            </p>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Side Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="hidden lg:block"
          >
            <div className="sticky top-24">
              <motion.img
                src="https://images.unsplash.com/photo-1518481612222-68bbe828ecd1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Professional Journey"
                className="rounded-2xl shadow-lg object-cover h-[400px] w-full cursor-pointer"
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.3 }}
              />
              <div className="mt-4 text-center">
                <h4 className="text-lg font-semibold text-gray-800">
                  {profileData.name}
                </h4>
                <p className="text-gray-600 text-sm">
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
                <h3 className="text-3xl font-bold text-gray-800 mb-4">
                  {profileData.name}
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {profileData.summary}
                </p>
              </motion.div>

              {/* Credentials Grid */}
              <motion.div
                className="grid sm:grid-cols-2 gap-6"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {[
                  {
                    icon: <GraduationCap className="w-6 h-6" />,
                    text: profileData.education[0].degree,
                    label: "Education",
                  },
                  {
                    icon: <Calendar className="w-6 h-6" />,
                    text: "Web Developer",
                    label: "Experience",
                  },
                  {
                    icon: <FileText className="w-6 h-6" />,
                    text: "Software Engineer",
                    label: " clean, confident, and goal-aligned.",
                  },
                  {
                    icon: <Briefcase className="w-6 h-6" />,
                    text: profileData.currentPosition,
                    label: "Current Role",
                  },
                ].map((item, index) => (
                  <CredentialItem key={index} {...item} />
                ))}
              </motion.div>

              {/* Contact Information */}
              <motion.div className="space-y-3" variants={fadeInUp}>
                <div className="card shadow-lg p-6 border border-gray-100">
                  <p className="text-gray-300 flex items-center gap-2">
                    <span className="font-semibold text-gray-700">Email :</span>
                    <span className="text-primary">
                      {profileData.contact.email}
                    </span>
                  </p>
                  <p className="text-gray-300 flex items-center gap-2">
                    <span className="font-semibold text-gray-700">Phone :</span>
                    <span className="text-primary">
                      {profileData.contact.phone}
                    </span>
                  </p>
                </div>
              </motion.div>

              {/* CTA Button */}
              <motion.div variants={fadeInUp}>
                <a
                  href="#contact"
                  className="btn btn-primary btn-lg gap-2 hover:gap-3 transition-all duration-300"
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