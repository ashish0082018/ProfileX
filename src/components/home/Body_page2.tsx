import { motion } from 'framer-motion';

const LandingPageTwo = () => {
  return (
    <div className="min-h-screen bg-zinc-900 rounded-xl text-white flex flex-col items-center justify-center p-6">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl w-full bg-zinc-800 rounded-lg shadow-2xl p-8"
      >
        <motion.h1
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl font-bold mb-6 text-center "
        >
          Why Choose ProfileX?
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="space-y-6"
        >
          <div className="space-y-4">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-6  bg-zinc-700 rounded-lg cursor-pointer hover:bg-zinc-600 transition-colors hover:text-purple-500"
            >
              <h2 className="text-2xl font-semibold mb-2">One-Click Sharing</h2>
              <p className="text-zinc-300  ">
                Share your unique profile with anyone in just one click. No hassle, no complications.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-6  bg-zinc-700 rounded-lg cursor-pointer  hover:bg-zinc-600 transition-colors hover:text-purple-500"
              
            >
              <h2 className="text-2xl font-semibold mb-2">Seamless Integration</h2>
              <p className="text-zinc-300">
                Easily connect your LinkedIn, GitHub, Twitter, and Gmail to showcase all your professional links in one place.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-6  bg-zinc-700 rounded-lg cursor-pointer hover:bg-zinc-600 transition-colors hover:text-purple-500"
             
            >
              <h2 className="text-2xl font-semibold mb-2">Customizable Profile</h2>
              <p className="text-zinc-300">
                Personalize your profile to reflect your unique skills, achievements, and personality.
              </p>
            </motion.div>
          </div>


        </motion.div>
      </motion.div>
    </div>
  );
};

export default LandingPageTwo;