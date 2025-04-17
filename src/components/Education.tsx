
import { motion } from 'framer-motion';
import { GraduationCap, Calendar } from 'lucide-react';

const education = [
  {
    degree: "Master of Science in Computer Science",
    institution: "University of Technology",
    duration: "2018 - 2020",
    description: "Specialized in Artificial Intelligence and Machine Learning with a focus on natural language processing and computer vision."
  },
  {
    degree: "Bachelor of Engineering in Software Engineering",
    institution: "National Institute of Technology",
    duration: "2014 - 2018",
    description: "Focused on software development fundamentals, data structures, algorithms, and full-stack web development."
  },
  {
    degree: "Associate Degree in Web Development",
    institution: "Technical College",
    duration: "2012 - 2014",
    description: "Studied front-end and back-end web technologies, including HTML, CSS, JavaScript, and database management."
  }
];

const Education = () => {
  return (
    <div className="mt-16 mb-24">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
          Education
        </h2>
        <p className="text-gray-300 mt-2">Academic Background</p>
      </motion.div>

      <div className="space-y-8">
        {education.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="glass p-6 rounded-xl"
          >
            <div className="flex flex-col md:flex-row gap-4">
              <div className="md:w-1/3">
                <div className="flex items-center">
                  <GraduationCap size={20} className="text-blue-400 mr-2" />
                  <h3 className="text-xl font-bold text-blue-300">{edu.degree}</h3>
                </div>
                <p className="text-gray-400 mt-1">{edu.institution}</p>
                <p className="flex items-center text-sm text-gray-500 mt-1">
                  <Calendar size={14} className="mr-1" />
                  {edu.duration}
                </p>
              </div>
              <div className="md:w-2/3">
                <p className="text-gray-300">{edu.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Education;
