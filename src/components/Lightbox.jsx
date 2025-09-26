import { useEffect, useState, startTransition } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronLeft, X } from 'lucide-react';

export default function Lightbox({ isOpen, onClose, images, index }) {

  const [slideState, setSlideState] = useState({ index, direction: 0 });
  
  useEffect(() => {
    setSlideState({ index, direction: 0 });
  }, [index]);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [onClose]);

  if (!isOpen) return null;

  const { index: currentIndex, direction } = slideState;
  const image = images[currentIndex];
  const total = images.length;

  const handleNext = () => {
    setSlideState((prev) => ({ ...prev, direction: 1 }));
    startTransition(() => {
      setSlideState({ index: (currentIndex + 1) % images.length, direction: 1 });
    });
  };

  const handlePrev = () => {
    setSlideState((prev) => ({ ...prev, direction: -1 }));
    startTransition(() => {
      setSlideState({ index: (currentIndex - 1 + images.length) % images.length, direction: -1 });
    });
  };

  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    let timeout;

    const resetTimer = () => {
      setIsActive(true); // zviditelnění
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        setIsActive(false); // skrytí po 2.5s neaktivity
      }, 2500);
    };

    // Detekce událostí
    document.addEventListener("mousemove", resetTimer);
    document.addEventListener("click", resetTimer);
    document.addEventListener("touchstart", resetTimer);

    resetTimer(); // inicializace

    return () => {
      clearTimeout(timeout);
      document.removeEventListener("mousemove", resetTimer);
      document.removeEventListener("click", resetTimer);
      document.removeEventListener("touchstart", resetTimer);
    };
  }, []);

  const slideVariants = {
    initial: (direction) => ({
      x: direction * -300,
      opacity: 0,
    }),
    animate: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction * 300,
      opacity: 0,
    }),
  };

  return (
      <motion.div
        key="backdrop"
        className="fixed inset-0 z-50 flex items-center justify-center"
      >
        <motion.div
          className="bg-white/90 absolute w-full h-full"
          onClick={() => onClose(null)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{duration: 0.3}}
        />
                <motion.div
          className="bg-white absolute w-full h-full pointer-events-none"
          onClick={() => onClose(null)}
          initial={{ opacity: 0, zIndex: 0}}
          animate={{ opacity: isActive ? 0 : 1, zIndex: isActive ? 0 : 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        />
        <motion.button
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.2 }}
          className="absolute p-4 cursor-pointer text-gray-400 z-11 top-0 right-0 text-3xl"
          onClick={() => onClose(null)}
          >
            <X size={25}/>
        </motion.button>
          <motion.div 
            className="absolute bottom-0 h-2 w-full bg-gray-800"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: currentIndex / (total -1)}}
            transition={{ duration: 0.6}}
          />
          <motion.div
            key="modal"
            className="relative max-w-3xl w-full px-10 md:px-6"
            // onClick={(e) => e.stopPropagation()}
          >
            <AnimatePresence mode='wait'>
              <motion.div
              key={image.src}
              variants={slideVariants}
              custom={direction}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.3 }}
              >
                <motion.div
                initial={{ x: direction * -50, opacity: 0}}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2, transition: 0.5 }}
                className="absolute m-auto w-full left-0 -top-15 text-gray-600 text-3xl font-bold text-center"
                >
                  <h3 className="">{image.alt}</h3>
                </motion.div>
                <img
                  src={image.src}
                  alt={image.alt}
                  className="m-auto object-contain max-h-[80vh] relative z-2"
                />
              </motion.div>
            </AnimatePresence>

            <motion.button
              initial= {{ scale: 1, x: 0 }}
              whileHover={{ scale: 1.1, x: -5, opacity: 1 }}
              animate={{ zIndex: isActive ? 15 : 0 }}
              className="absolute p-4 cursor-pointer text-gray-400 top-1/2 left-0 md:left-4 text-3xl -translate-y-1/2"
              onClick={handlePrev}
            >
              <ChevronLeft className="text-black bg-white w-5 h-5 sm:w-6 sm:h-6"/>
            </motion.button>
            <motion.button
              initial= {{ scale: 1, x: 0 }}
              whileHover={{ scale: 1.1, x: 5, opacity: 1 }}
              animate={{ zIndex: isActive ? 15 : 0 }}
              className="absolute p-4 cursor-pointer text-gray-400 top-1/2 right-0 md:right-4 text-3xl -translate-y-1/2"
              onClick={handleNext}
            >
              <ChevronRight className="text-white bg-black w-5 h-5 sm:w-6 sm:h-6"/>
            </motion.button>
          </motion.div>
      </motion.div>
  );
}
