import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-white dark:bg-gray-900">
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mr-auto place-self-center lg:col-span-7"
          >
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
              Neal Aerospace
            </h1>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
              A student-led organization focused on aerospace engineering, rocketry, and exploration.
            </p>
            <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
              <Link
                to="/projects"
                className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
              >
                See Our Projects
              </Link>
              <Link
                to="/join"
                className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
              >
                Join Us
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
              >
                Learn More
              </Link>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hidden lg:mt-0 lg:col-span-5 lg:flex"
          >
            <img
              src="/img/neallogo.png"
              alt="Aerospace hero image"
              className="rounded-lg shadow-xl"
            />
          </motion.div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="bg-gray-50 dark:bg-gray-800">
        <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
              Who We Are
            </h2>
            <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
              NEAL Aerospace is a club focused on researching and implementing alternative methods of propulsion into aerospace vehicles.​
            </p>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              <div className="p-6 bg-white rounded-lg shadow-md dark:bg-gray-700">
                <h3 className="mb-2 text-xl font-bold dark:text-white">Hardware</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Design and build physical components for experimental propulsion systems.
                </p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-md dark:bg-gray-700">
                <h3 className="mb-2 text-xl font-bold dark:text-white">Software</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Develop simulations and control algorithms for aerospace propulsion models.
                </p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-md dark:bg-gray-700">
                <h3 className="mb-2 text-xl font-bold dark:text-white">Structure</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Create structural frameworks to support and integrate propulsion technologies into vehicle designs.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home; 