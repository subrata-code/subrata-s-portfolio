import React from "react";
import Hero from "../components/Hero";
import AboutSection from "../components/AboutSection"; // Import AboutSection
import Education from "../components/education"; // Import Education
import TeachingSection from "../components/TeachingSection"; // Corrected import path
import ProjectsSection from "../components/projectsection"; // Import ProjectsSection
import ContactSection from "../components/contact"; // Corrected import for ContactSection
import Footer from "../components/Footer"; // Import Footer

const Home = () => {
  return (
    <>
      <Hero />
      <AboutSection />
      <Education /> {/* Add Education here */}
      <TeachingSection /> {/* TeachingSection component */}
      <ProjectsSection /> {/* ProjectsSection component */}
      <ContactSection /> {/* ContactSection component */}
      <Footer /> {/* Footer component */}
    </>
  );
};

export default Home;