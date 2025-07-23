import { motion } from "framer-motion";
import { profileData } from "../constants/portfolioData";
import { GraduationCap, Building, Calendar, FileText } from "lucide-react";

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

const EducationCard = ({ date, title, org, desc }) => (
  <motion.div
    variants={fadeInUp}
    className="bg-white cursor-pointer rounded-lg p-6 shadow-md hover:shadow-2xl hover:scale-105 transition-all duration-400 border border-gray-100"
    whileHover={{
      scale: 1.07,
      boxShadow: "0 12px 40px 0 rgba(37,99,235,0.25)",
    }}
  >
    <div className="flex items-start gap-4">
      <div className="bg-blue-50 p-3 rounded-lg">
        <GraduationCap className="w-6 h-6 text-primary" />
      </div>
      <div className="flex-1">
        <span className="text-sm text-primary font-medium">
          <Calendar className="w-4 h-4 inline-block mr-2" />
          {date}
        </span>
        <h4 className="text-lg font-semibold text-gray-800 mt-1">{title}</h4>
        <p className="text-gray-600 flex items-center gap-2 mt-1">
          <Building className="w-4 h-4" />
          {org}
        </p>
        {desc && (
          <p className="text-gray-500 mt-2 text-sm flex items-start gap-2">
            <FileText className="w-4 h-4 mt-1" />
            {desc}
          </p>
        )}
      </div>
    </div>
  </motion.div>
);

const Education = () => {
  return (
    <section
      id="education"
      className="py-14 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center mb-16">
          <motion.div
            className="text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 drop-shadow-lg">
              Education
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Academic journey and qualifications shaping expertise in
              mechanical engineering and advanced materials research
            </p>
          </motion.div>
        </div>

        {/* Education Timeline */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Timeline Cards - Now on the left */}
          <div className="lg:col-span-2 order-2 lg:order-1">
            <motion.div
              className="grid gap-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {profileData.education.map((edu, index) => (
                <EducationCard
                  key={index}
                  date={edu.year}
                  title={edu.degree}
                  org={edu.institute}
                  desc={edu.desc}
                />
              ))}
            </motion.div>
          </div>

          {/* Right Side Image */}
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
                className="rounded-2xl shadow-2xl object-cover h-[400px] w-full cursor-pointer transition-transform duration-500 hover:scale-105 hover:shadow-blue-400"
                whileHover={{ scale: 1.05, boxShadow: "0 8px 32px 0 rgba(37,99,235,0.25)" }}
                transition={{ duration: 0.4 }}
              />
              <div className="mt-4 text-center">
                <h4 className="text-lg font-semibold text-gray-800 drop-shadow">
                  Educational Journey
                </h4>
                <p className="text-gray-600 text-sm">
                  Building foundations for innovation
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Skills Section */}
        <motion.div
          className="mt-16"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center drop-shadow">
            Key Skills & Expertise
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {profileData.skills.map((skill, index) => (
              <motion.span
                key={index}
                variants={fadeInUp}
                className="px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm font-medium hover:bg-blue-100 hover:shadow-lg hover:scale-105 transition-all duration-400 cursor-pointer"
                whileHover={{
                  scale: 1.12,
                  boxShadow: "0 8px 32px 0 rgba(37,99,235,0.25)",
                }}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;