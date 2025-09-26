import { gallerySections } from '../data/galleryData';
import { motion } from 'framer-motion';

export default function GalleryNav() {
  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const variants = {
    initial: { opacity: 0, y: 20 },
    inView: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        delay: i * 0.15,
    }}),
    hover: {
      scale: 1.05,
      zIndex: 10,
      transition: { type: "spring", stiffness: 300, damping: 20 },
    }
  };

  return (
    <div className="flex flex-col sm:flex-row gap-0 pb-12 max-w-7xl mx-auto">
      {gallerySections.map((section, index) => (
        <motion.div
          key={section.id}
          onClick={() => handleScroll(section.id)}
          className="relative flex-auto h-[6rem] sm:h-[18rem] md:h-[28rem] cursor-pointer overflow-hidden shadow-md group"
          variants={variants}
          custom={index}
          whileTap={{ scale: 0.98 }}
          initial="initial"
          whileInView="inView"
          whileHover="hover"
          viewport={{ once: true }}
        >
          <div
            className="absolute inset-0 bg-cover bg-center group-hover:scale-110"
            style={{ backgroundImage: `url(${section.cover})` }}
          ></div>
          <div className={`absolute inset-0 ${section.coverBg} bg-opacity-40 group-hover:bg-opacity-50`}></div>
          {/* <div className="relative z-10 h-full w-full flex items-center justify-center">
            <h3 className="text-gray-800 text-2xl font-bold">{section.title}</h3>
          </div> */}
          <div className="absolute inset-0 flex items-center justify-center">
            <h3 className="text-gray-800 text-3xl sm:text-5xl font-bold">{section.title}</h3>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
