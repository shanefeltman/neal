import { motion } from 'framer-motion';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  timeline?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Small Scale Test Stand (WIP)​",
    description: "Testing and validating small-scale rocket engines for educational purposes.",
    image: "/projects/rockettest.png",
    tags: ["Rocket", "Test Stand", "Propulsion"],
    timeline: "Ongoing"
  },
  {
    id: 2,
    title: "Hybrid Rocket",
    description: "Developing a hybrid rocket enging to test alternative propellants.",
    image: "/projects/ostia.png",
    tags: ["Rocket", "Propulsion", "Hybrid"],
    timeline: "Ongoing"
  },
  {
    id: 3,
    title: "Experimental Nozzles​",
    description: "Designing and testing experimental rocket nozzles for performance optimization.",
    image: "/projects/pic3.png",
    tags: ["Rocket", "Nozzle", "Experimental"],
    timeline: "Ongoing"
  }
];

const Projects = () => {
  return (
    <div className="pt-16">
      <div className="max-w-screen-xl px-4 py-8 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
            Our Projects
          </h1>
          <p className="mt-4 text-lg text-gray-500 dark:text-gray-400">
            Explore our ongoing and upcoming aerospace engineering projects.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden dark:bg-gray-800"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-500 dark:text-gray-400 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-sm font-medium text-blue-600 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                {project.timeline && (
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Timeline: {project.timeline}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects; 