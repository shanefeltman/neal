import { motion } from 'framer-motion';

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Joey Skinner",
    role: "President",
    bio: "Aerospace Engineering student with a passion for rocketry and propulsion.",
    image: "/team/joey.jpg"
  },
  {
    name: "Noah Ramirez",
    role: "Vice President",
    bio: "Aerospace Engineering student with a focus on aerodynamics and design.",
    image: "/team/noah.jpg"
  },
  {
    name: "Ben Chamberlin",
    role: "Vice President",
    bio: "Aerospace Engineering student with a background in mechanical systems and design.",
    image: "/team/ben.jpg"
  }
];

const About = () => {
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
            About Us
          </h1>
          <p className="mt-4 text-lg text-gray-500 dark:text-gray-400">
            Learn about our club's history, mission, and the amazing people behind our projects.
          </p>
        </motion.div>

        {/* Club History */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Our History</h2>
          <div className="prose dark:prose-invert max-w-none">
            <p className="text-gray-500 dark:text-gray-400">
              Founded in 2025, Neal Aerospace is a student-led organization dedicated to advancing aerospace engineering through 
              hands-on projects and research. Our mission is to inspire and educate the next generation of aerospace engineers by 
              providing opportunities for practical experience in rocketry, alternative propulsion systems, and aerospace design.
            </p>
            <p className="text-gray-500 dark:text-gray-400">
              As we grow, we aim to collaborate with industry partners, engage in community outreach, and participate in national competitions. 
              Our team is composed of passionate students from various engineering disciplines, united by a common goal of innovation and exploration.
            </p>
          </div>
        </motion.section>

        {/* Team Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Our Team</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 dark:text-blue-400 mb-2">{member.role}</p>
                  <p className="text-gray-500 dark:text-gray-400">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Affiliations Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Affiliations & Awards</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Partners</h3>
              <ul className="list-disc list-inside text-gray-500 dark:text-gray-400">
                <li>TBD</li>
                <li>TBD</li>
                <li>TBD</li>
                <li>TBD</li>
              </ul>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Achievements</h3>
              <ul className="list-disc list-inside text-gray-500 dark:text-gray-400">
                <li>TBD</li>
                <li>TBD</li>
                <li>TBD</li>
                <li>TBD</li>
              </ul>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default About; 