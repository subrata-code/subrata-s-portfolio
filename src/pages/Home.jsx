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
const directionOffsets = {
  left:   { x: -120, y: 0 },
  right:  { x: 120,  y: 0 },
  bottom: { x: 0,    y: 80 },
  top:    { x: 0,    y: -80 },
};

const SectionReveal = ({ children, direction = "bottom", delay = 0 }) => {
  const offset = directionOffsets[direction];

  return (
    <motion.div
      initial={{ opacity: 0, x: offset.x, y: offset.y, scale: 0.97 }}
      whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.25, 0.8, 0.25, 1],
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

      <SectionReveal direction="left">
        <AboutSection />
      </SectionReveal>

      <SectionReveal direction="right">
        <Education />
      </SectionReveal>

      <SectionReveal direction="left">
        <TeachingSection />
      </SectionReveal>

      <SectionReveal direction="bottom">
        <DeveloperActivity />
      </SectionReveal>

      <SectionReveal direction="right">
        <ProjectsSection />
      </SectionReveal>

      <SectionReveal direction="left">
        <ContactSection />
      </SectionReveal>

      <SectionReveal direction="bottom" delay={0.1}>
        <Footer />
      </SectionReveal>
    </>
  );
};

export default Home;