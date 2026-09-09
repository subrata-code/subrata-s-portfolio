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
  <motion.article
    variants={fadeInUp}
    className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col justify-between"
    onClick={() => onClick(project)}
    whileHover={{
      scale: 1.04,
      boxShadow: "0 8px 32px 0 rgba(37,99,235,0.18)",
    }}
  >
    <img
      src={project.image}
      alt={`${project.title} — Web Development Project by Subrata Bag`}
      loading="lazy"
      className="w-full h-32 sm:h-48 object-cover"
    />
    <div className="p-6 text-left flex-1 flex flex-col justify-between">
      <div>
        <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">{project.title}</h3>
        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-3">
          {project.description}
        </p>
      </div>
      <div>
        <span className="inline-block bg-blue-50 dark:bg-indigo-950 text-primary dark:text-indigo-400 text-xs px-3 py-1 rounded-full font-medium">
          {project.category}
        </span>
      </div>
    </div>
  </motion.article>
);

const Modal = ({ project, onClose }) => (
  <AnimatePresence>
    {project && (
      <>
        {/* Backdrop overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
          onClick={onClose}
        />
        {/* Slide-in panel */}
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed top-0 right-0 w-full sm:w-4/5 md:w-3/5 lg:w-1/2 h-full bg-white dark:bg-gray-900 shadow-2xl z-50 p-5 sm:p-8 overflow-auto"
          style={{ maxWidth: "600px" }}
        >
          <button
            className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 text-xl hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            onClick={onClose}
            aria-label="Close project details"
          >
            &times;
          </button>
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-40 sm:h-48 md:h-56 object-cover mb-4 rounded-xl"
          />
          <h3 className="text-xl sm:text-2xl font-bold mb-2 dark:text-white pr-10">{project.title}</h3>
          <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base mb-4 leading-relaxed">{project.description}</p>
          <span className="inline-block bg-blue-50 dark:bg-indigo-950 text-primary dark:text-indigo-400 text-xs px-3 py-1 rounded-full mb-4 font-medium">
            {project.category}
          </span>
          <div className="flex flex-wrap gap-3 mt-4">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-none px-5 py-2.5 bg-gray-800 hover:bg-gray-700 text-white rounded-full text-center text-sm font-medium transition-colors"
              >
                GitHub
              </a>
            )}
            {project.live && project.live !== "" && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-none px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-full text-center text-sm font-medium transition-colors"
              >
                Live Demo
              </a>
            )}
          </div>
        </motion.div>
      </>
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
              Featured Software Projects & Web Applications
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              A curated showcase of full-stack web applications, collaborative platforms, and interactive digital solutions engineered by Subrata Bag.
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