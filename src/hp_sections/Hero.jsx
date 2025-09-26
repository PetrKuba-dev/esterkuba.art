import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';

export default function Hero() {
  return (
    <section
      id="hero"
      className="bg-gradient-to-br from-white via-blue-50 to-purple-100 py-20 px-6 text-center h-[28rem]"
    >
      <div className="relative flex flex-col justify-center h-full max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-extrabold text-gray-800 mb-6"
        >
          Vítejte v mém světě umění
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-lg md:text-xl text-gray-600 mb-8"
        >
          Tvořím ilustrace, obrazy a kreativní projekty s duší. Prohlédněte si moji galerii.
        </motion.p>

        <NavLink to="/galerie">
          <motion.div
            className="px-8 py-3 bg-blue-600 text-white shadow-md hover:bg-blue-700 right-0 bottom-0 absolute"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            Zobrazit Galerii
          </motion.div>
        </NavLink>
      </div>
    </section>
  );
}
