import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import DImg from "../assets/4d image.png";
import hybrid from "../assets/hybrid.jpg";
import magnet from "../assets/magnet.png";

const projects = [
  {
    id: 101,
    title: "MediCon: AI-Powered Smart Health Monitoring & Doctor Connect",
    category: "Fullstack Web",
    description:
      "MediCon is an IoT-integrated smart healthcare system enabling real-time vitals monitoring (SpO2, BP, heart rate), emergency SOS, doctor discovery, and appointment booking—bridging patients and doctors through intelligent automation.",
    image: DImg,
    github: "https://github.com/Soumojit08/Medicon",
    live: "https://medicon-za1z.vercel.app/",
  },
  {
    id: 102,
    title: "Soumili-Robo: AI-Powered Personal Assistant with Voice and Creative Intelligence",
    category: "Python",
    description:
      "Soumili-Robo is an AI-powered robotic assistant designed to provide instant responses, generate poems/songs/stories, speak in a natural female voice, and offer personalized help across domains using internet-connected intelligence.",
    image: hybrid,
    github: "https://github.com/subrata-code/SOUMILI_ROBO",
    live: "",
  },
  {
    id: 103,
    title: "SQL Quest: Interactive SQL Learning & Practice Platform",
    category: "Next Js",
    description:
      "A beginner-friendly SQL playground to write, run, and learn queries interactively. Features real-time feedback, problem sets, and a mini database to simulate real-world scenarios.",
    image: magnet,
    github: "https://github.com/subrata-code/sql_playground",
    live: "https://sql-playground-nu.vercel.app",
  },
];

const categories = ["All", "Fullstack Web", "Python", "Next Js"];

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const ProjectCard = ({ project, onClick }) => (
  <motion.div
    variants={fadeInUp}
    className="bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer"
    onClick={() => onClick(project)}
    whileHover={{
      scale: 1.05,
      boxShadow: "0 8px 32px 0 rgba(37,99,235,0.18)",
    }}
  >
    <img
      src={project.image}
      alt={project.title}
      className="w-full h-48 object-cover"
    />
    <div className="p-6 text-left">
      <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
      <p className="text-gray-600 text-sm mb-4 line-clamp-3">
        {project.description}
      </p>
      <span className="inline-block bg-blue-50 text-primary text-xs px-3 py-1 rounded-full">
        {project.category}
      </span>
    </div>
  </motion.div>
);

const Modal = ({ project, onClose }) => (
  <AnimatePresence>
    {project && (
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="fixed top-0 right-0 w-full sm:w-1/2 h-full bg-white shadow-2xl z-50 p-8 overflow-auto"
        style={{ maxWidth: "500px" }}
      >
        <button
          className="absolute top-4 right-4 text-gray-500 text-2xl"
          onClick={onClose}
        >
          &times;
        </button>
        <img src={project.image} alt={project.title} className="w-full h-48 object-cover mb-4 rounded-lg" />
        <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
        <p className="text-gray-700 mb-4">{project.description}</p>
        <span className="inline-block bg-blue-50 text-primary text-xs px-3 py-1 rounded-full mb-4">
          {project.category}
        </span>
        <div className="flex gap-4 mt-4">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-gray-800 text-white rounded-full"
            >
              GitHub
            </a>
          )}
          {project.live && project.live !== "" && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-blue-600 text-white rounded-full"
            >
              Live Demo
            </a>
          )}
        </div>
      </motion.div>
    )}
  </AnimatePresence>
);

export default function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [activeProject, setActiveProject] = useState(null);

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <section
      id="projects"
      className="py-16 px-6 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Research Projects
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Innovative research projects spanning various domains of
              mechanical engineering and advanced materials
            </p>
          </motion.div>
        </div>

        {/* Category Filters */}
        <div className="flex justify-center gap-4 flex-wrap mb-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full font-medium transition-colors duration-300 ${selectedCategory === category
                  ? "bg-primary text-white"
                  : "bg-white text-gray-700 border border-gray-300 hover:border-primary hover:text-primary"
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid with AnimatePresence for smooth filter transitions */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            {filteredProjects.length > 0 ? (
              filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} onClick={setActiveProject} />
              ))
            ) : (
              <motion.div
                className="col-span-full text-center text-gray-500 py-12"
                variants={fadeInUp}
              >
                No projects found in this category.
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* View All Button */}
        <motion.div className="mt-12 text-center" variants={fadeInUp}>
          <motion.a
            href="#contact"
            className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-full"
            whileHover={{ scale: 1.05 }}
          >
            <a
              href="https://github.com/subrata-code"
              target="_blank"
              rel="noopener noreferrer"
            >
              View All Projects
            </a>
            <FaArrowRight className="ml-2" />
          </motion.a>
        </motion.div>
      </div>
      {/* Modal for project details */}
      <Modal project={activeProject} onClose={() => setActiveProject(null)} />
    </section>
  );
}