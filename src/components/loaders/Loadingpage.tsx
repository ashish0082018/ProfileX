"use client"
import { motion } from 'framer-motion';

export default function LoadingPage() {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center bg-zinc-900 text-white">
      {/* Animated Title */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-3xl font-semibold mb-6"
      >
        Loading ...
      </motion.h2>

      {/* Progress Bar Container */}
      <div className="w-72 h-2 bg-zinc-700 rounded-full overflow-hidden">
        {/* Animated Progress Bar */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: '100%' }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: 'mirror',
            ease: 'easeInOut',
          }}
          className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
        />
      </div>

      {/* Subtle Loading Text */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="mt-4 text-sm text-zinc-400"
      >
        Just a moment while we prepare your experience...
      </motion.p>
    </div>
  );
}