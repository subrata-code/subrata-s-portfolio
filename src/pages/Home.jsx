import React from "react";
import Hero from "../components/Hero";
import AboutSection from "../components/AboutSection";
import Education from "../components/education";
import TeachingSection from "../components/TeachingSection";
import DeveloperActivity from "../components/DeveloperActivity";
import ProjectsSection from "../components/projectsection";
import ContactSection from "../components/contact";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Hero />
      <AboutSection />
      <Education />
      <TeachingSection />
      <DeveloperActivity />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </>
  );
};

export default Home;