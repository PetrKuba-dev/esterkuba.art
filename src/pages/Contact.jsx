import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section id="contact" className="sm:py-20 py-10 px-6 bg-white">
      <div className="max-w-3xl mt-12 mx-auto text-center text-xl">
        {/* <motion.h2
          className="text-4xl font-bold text-gray-800 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Kontakt
        </motion.h2> */}

        <motion.p
          className="text-gray-700 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Zájem o dílo, výstavu či spolupráci prosím směřujte na email
          {' '}
          <a
            href="mailto:ester.kuba28@gmail.com"
            className="text-gray-900 underline underline-offset-4 hover:text-gray-600 transition-colors"
          >
            ester.kuba28@gmail.com
          </a>
          .
        </motion.p>

        <motion.p
          className="text-gray-700 leading-relaxed mt-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Instagram:{' '}
          <a
            href="https://instagram.com/ester.kuba"
            target="_blank"
            rel="noreferrer"
            className="text-gray-900 underline underline-offset-4 hover:text-gray-600 transition-colors"
          >
            @ester.kuba
          </a>
        </motion.p>
      </div>
    </section>
  );
}
