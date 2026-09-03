import { motion } from "framer-motion";
import { profileData } from "../constants/portfolioData";
import { GraduationCap, Building, Calendar, FileText } from "lucide-react";
import {
  SiReact, SiJavascript, SiNodedotjs, SiExpress, SiMongodb,
  SiThreedotjs, SiNextdotjs, SiTailwindcss, SiPython, SiC,
  SiGit, SiGithub, SiPostman, SiHtml5, SiCss3,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { TbBrandThreejs, TbBinaryTree, TbApi } from "react-icons/tb";

const skillRowOne = [
  { name: "React", icon: <SiReact className="w-7 h-7 text-[#61DAFB]" /> },
  { name: "JavaScript", icon: <SiJavascript className="w-7 h-7 text-[#F7DF1E]" /> },
  { name: "Node.js", icon: <SiNodedotjs className="w-7 h-7 text-[#5FA04E]" /> },
  { name: "Express.js", icon: <SiExpress className="w-7 h-7 text-[#181717] dark:text-[#e2e8f0]" /> },
  { name: "MongoDB", icon: <SiMongodb className="w-7 h-7 text-[#47A248]" /> },
  { name: "Three.js", icon: <SiThreedotjs className="w-7 h-7 text-[#000000] dark:text-[#e2e8f0]" /> },
  { name: "React Three Fiber", icon: <TbBrandThreejs className="w-7 h-7 text-[#000000] dark:text-[#e2e8f0]" /> },
  { name: "Next.js", icon: <SiNextdotjs className="w-7 h-7 text-[#000000] dark:text-[#e2e8f0]" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="w-7 h-7 text-[#06B6D4]" /> },
  { name: "DSA", icon: <TbBinaryTree className="w-7 h-7 text-[#6366F1]" /> },
];

const skillRowTwo = [
  { name: "Java", icon: <FaJava className="w-7 h-7 text-[#007396]" /> },
  { name: "Python", icon: <SiPython className="w-7 h-7 text-[#3776AB]" /> },
  { name: "C", icon: <SiC className="w-7 h-7 text-[#A8B9CC]" /> },
  { name: "Git", icon: <SiGit className="w-7 h-7 text-[#F05032]" /> },
  { name: "GitHub", icon: <SiGithub className="w-7 h-7 text-[#181717] dark:text-[#e2e8f0]" /> },
  { name: "REST APIs", icon: <TbApi className="w-7 h-7 text-[#0284C7]" /> },
  { name: "Postman", icon: <SiPostman className="w-7 h-7 text-[#FF6C37]" /> },
  { name: "HTML5", icon: <SiHtml5 className="w-7 h-7 text-[#E34F26]" /> },
  { name: "CSS3", icon: <SiCss3 className="w-7 h-7 text-[#1572B6]" /> },
  { name: "React", icon: <SiReact className="w-7 h-7 text-[#61DAFB]" /> },
];

const SkillChip = ({ name, icon }) => (
  <div className="flex items-center gap-3 px-5 py-3 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl border border-gray-200/60 dark:border-gray-700/60 shadow-sm hover:shadow-lg hover:border-indigo-200 dark:hover:border-indigo-700 hover:bg-white dark:hover:bg-gray-800 transition-all duration-300 cursor-default group shrink-0 mx-2">
    <span className="transition-transform duration-300 group-hover:scale-110">
      {icon}
    </span>
    <span className="text-sm font-semibold text-gray-700 dark:text-gray-200 group-hover:text-gray-900 dark:group-hover:text-white whitespace-nowrap">
      {name}
    </span>
  </div>
);

const MarqueeRow = ({ skills, reverse = false }) => {
  const items = [...skills, ...skills, ...skills, ...skills];
  return (
    <div className="marquee-container marquee-mask overflow-hidden">
      <div className={reverse ? "marquee-track-reverse" : "marquee-track"}>
        {items.map((skill, i) => (
          <SkillChip key={`${skill.name}-${i}`} {...skill} />
        ))}
      </div>
    </div>
  );
};

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

const EducationCard = ({ date, title, org, desc }) => (
  <motion.div
    variants={fadeInUp}
    className="bg-white dark:bg-gray-800 cursor-pointer rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-400 border border-gray-100 dark:border-gray-700 group"
    whileHover={{ scale: 1.03, boxShadow: "0 12px 40px 0 rgba(37,99,235,0.15)" }}
  >
    <div className="flex items-start gap-4">
      <div className="bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-indigo-950 dark:to-blue-950 p-3 rounded-xl group-hover:from-indigo-100 group-hover:to-blue-100 dark:group-hover:from-indigo-900 dark:group-hover:to-blue-900 transition-colors duration-300">
        <GraduationCap className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
      </div>
      <div className="flex-1">
        <span className="text-sm text-indigo-600 dark:text-indigo-400 font-medium flex items-center gap-1.5">
          <Calendar className="w-3.5 h-3.5" />
          {date}
        </span>
        <h4 className="text-lg font-bold text-gray-800 dark:text-white mt-1">{title}</h4>
        <p className="text-gray-600 dark:text-gray-400 flex items-center gap-2 mt-1 text-sm">
          <Building className="w-4 h-4 text-gray-400 dark:text-gray-500" />
          {org}
        </p>
        {desc && (
          <p className="text-gray-500 dark:text-gray-400 mt-2 text-sm flex items-start gap-2">
            <FileText className="w-4 h-4 mt-0.5 text-gray-400 dark:text-gray-500 shrink-0" />
            {desc}
          </p>
        )}
      </div>
    </div>
  </motion.div>
);

const Education = () => {
  return (
    <section id="education" className="py-16 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col items-center mb-16">
          <motion.div className="text-center" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">Education</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Academic foundation shaping expertise in Computer Science, Software Engineering, and Web Development
            </p>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          <div className="lg:col-span-2 order-2 lg:order-1">
            <motion.div className="grid gap-6" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              {profileData.education.map((edu, index) => (
                <EducationCard key={index} date={edu.year} title={edu.degree} org={edu.institute} desc={edu.desc} />
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="hidden lg:block order-1 lg:order-2"
          >
            <div className="sticky top-24">
              <motion.img
                src="https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Education Journey"
                className="rounded-2xl shadow-2xl object-cover h-[400px] w-full cursor-pointer"
                whileHover={{ scale: 1.05, boxShadow: "0 8px 32px 0 rgba(37,99,235,0.25)" }}
                transition={{ duration: 0.4 }}
              />
              <div className="mt-4 text-center">
                <h4 className="text-lg font-semibold text-gray-800 dark:text-white">Educational Journey</h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm">Building foundations for innovation</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Skills — Infinite Dual-Row Marquee */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2 text-center">
            Technologies & Skills
          </h3>
          <p className="text-gray-500 dark:text-gray-400 text-sm text-center mb-8">
            Hover to pause • Continuously learning & building
          </p>
          <div className="space-y-4">
            <MarqueeRow skills={skillRowOne} />
            <MarqueeRow skills={skillRowTwo} reverse />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;