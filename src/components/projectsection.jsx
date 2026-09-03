import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import mediImg from "../assets/medi.png";
import algoImg from "../assets/algo.png";
import clgImg from "../assets/clg.png";

const projects = [
  {
    id: 101,
    title: "MediCon (Healthcare Innovation Project)",
    category: "Fullstack Web",
    description: "Designed and developed a healthcare management solution featuring a responsive interface for appointment booking and patient record. Awarded 3rd Prize among 50+ participating teams at the College Tech Expo; received the 'Best Innovation Idea Award'.",
    image: mediImg,
    github: "https://github.com/Soumojit08/Medicon",
    live: "https://medicon-za1z.vercel.app/",
  },
  {
    id: 102,
    title: "Algo Mastery — From Beginner to Problem Solver",
    category: "Fullstack Web",
    description: "Developing a comprehensive coding interview preparation platform utilizing the MERN stack to facilitate structured algorithmic learning. Building robust REST APIs with Express.js to manage user profiles, coding roadmaps, and LeetCode progress tracking within MongoDB.",
    image: algoImg,
    github: "https://github.com/subrata-code/AlgoMaster",
    live: "https://algo-master-eight.vercel.app/",
  },
  {
    id: 103,
    title: "CollegeStar – Empowering Students Through Knowledge Sharing",
    category: "Next Js",
    description: "CollegeStar is a smart student community platform designed to make learning collaborative and rewarding. It allows students to upload, share, and access academic notes, projects, and study materials anytime, anywhere. By contributing quality content, users earn rewards and recognition while helping their peers succeed. With an interactive community, marketplace, and performance dashboard, CollegeStar turns everyday studying into an engaging and beneficial experience — empowering students to learn, share, and grow together.",
    image: clgImg,
    github: "https://github.com/subrata-code/CollegeStar",
    live: "https://college-star.vercel.app/",
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
    className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer"
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
      <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">{project.title}</h3>
      <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-3">
        {project.description}
      </p>
      <span className="inline-block bg-blue-50 dark:bg-indigo-950 text-primary dark:text-indigo-400 text-xs px-3 py-1 rounded-full">
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
        className="fixed top-0 right-0 w-full sm:w-1/2 h-full bg-white dark:bg-gray-900 shadow-2xl z-50 p-8 overflow-auto"
        style={{ maxWidth: "500px" }}
      >
        <button
          className="absolute top-4 right-4 text-gray-500 dark:text-gray-400 text-2xl"
          onClick={onClose}
        >
          &times;
        </button>
        <img src={project.image} alt={project.title} className="w-full h-48 object-cover mb-4 rounded-lg" />
        <h3 className="text-2xl font-bold mb-2 dark:text-white">{project.title}</h3>
        <p className="text-gray-700 dark:text-gray-300 mb-4">{project.description}</p>
        <span className="inline-block bg-blue-50 dark:bg-indigo-950 text-primary dark:text-indigo-400 text-xs px-3 py-1 rounded-full mb-4">
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
      className="py-16 px-6 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950"
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
              My Projects
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              A collection of my recent work in full-stack web development and software engineering.
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
                : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 hover:border-primary hover:text-primary"
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
                className="col-span-full text-center text-gray-500 dark:text-gray-400 py-12"
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