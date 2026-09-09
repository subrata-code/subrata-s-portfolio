import React from "react";
import { motion } from "framer-motion";
import Hero from "../components/Hero";
import AboutSection from "../components/AboutSection";
import Education from "../components/education";
import TeachingSection from "../components/TeachingSection";
import DeveloperActivity from "../components/DeveloperActivity";
import ProjectsSection from "../components/projectsection";
import ContactSection from "../components/contact";
import Footer from "../components/Footer";

/**
 * SectionReveal — wraps each section so it slides in from a
 * different direction as the user scrolls into view.
 *
 * direction: "left" | "right" | "bottom" | "top"
 */
const SectionReveal = ({ children, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration: 0.6,
        delay,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.div>
  );
};

const Home = () => {
  return (
    <>
      {/* Hero has its own entrance animations */}
      <Hero />

      <SectionReveal>
        <AboutSection />
      </SectionReveal>

      <SectionReveal>
        <Education />
      </SectionReveal>

      <SectionReveal>
        <TeachingSection />
      </SectionReveal>

      <SectionReveal>
        <DeveloperActivity />
      </SectionReveal>

      <SectionReveal>
        <ProjectsSection />
      </SectionReveal>

      <SectionReveal>
        <ContactSection />
      </SectionReveal>

      <SectionReveal delay={0.1}>
        <Footer />
      </SectionReveal>
    </>
  );
};

export default Home;