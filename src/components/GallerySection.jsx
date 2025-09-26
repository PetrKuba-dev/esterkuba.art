import { useState, useEffect, useRef } from 'react';
import { delay, motion } from 'framer-motion';
import Lightbox from './Lightbox';
import Macy from 'macy';

export default function GallerySection({ id, title, images, bg = 'bg-white', coverBg = 'bg-white/30'}) {
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [loadedImages, setLoadedImages] = useState({});
  const [macy, setMacy] = useState(null);
  const containerRef = useRef(null);

  const openLightbox = (index) => setLightboxIndex(index);
  const closeLightbox = (newIndex) => {
    if (newIndex === null || newIndex === undefined) {
      setLightboxIndex(null);
    } else {
      setLightboxIndex(newIndex);
    }
  };

  useEffect(() => {
    if (!containerRef.current) return;
    const macyInstance = Macy({
      container: containerRef.current,
      trueOrder: false,
      waitForImages: false,
      margin: 30,
      columns: 3,
      breakAt: {
        768: {
          margin: 30,
          columns: 3
        },  // md
        640: {
          margin: 20,
          columns: 2
        },  // md
        400: {
          margin: 20,
          columns: 1
        }   // base
      },
    });
    setMacy(macyInstance);

    const handleResize = () => macyInstance.recalculate(true);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      try { macyInstance.remove(); } catch (_) {}
    };
  }, []);

  const handleImageLoad = (index) => {
    setLoadedImages((prev) => ({ ...prev, [index]: true }));
    if (macy) {
      macy.recalculate(true);
    }
  };

    const titleVariants = {
        initial: { y: 0,
                    transition: { duration: 0.2 }
         },
        hover: { y: -46,
                 transition: { duration: 0.2 }
         }
    };
    const boxVariants = {
        initial: { opacity: 0, y: 30 },
        view: (isLoaded) => ({
            opacity: isLoaded ? 1 : 0,
            y: isLoaded ? 30 : 0
        })
    };
    const imgVariants = {
        initial: { scale : 1 },
        hover: { scale: 1.05 }
    };

  return (
    <motion.section 
      id={id}
      className={`w-full ${bg} mb-5`}
    >
      <div className='sm:py-20 py-10 md:px-12 px-4 max-w-7xl mx-auto'>
        {/* <motion.h2
            className="text-5xl font-bold text-gray-800 mb-10 border-b-2 border-gray-800 pb-2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
        >
            {title}
        </motion.h2> */}

        <div 
        className="w-full"
        id="gallery-section"
        ref={containerRef}>
            {images.map((img, index) => {
            const isLoaded = loadedImages[index];
            const dl = (index % 2 ? index + 4.5: index) * 0.15;

            return (
                <motion.div
                key={index}
                className="overflow-hidden break-inside-avoid shadow-lg cursor-pointer relative"
                variants={boxVariants}
                initial="initial"
                whileHover="hover"
                whileInView="view"
                viewport={{ once: true }}
                custom={isLoaded}
                transition={{ duration: 0.4, delay: dl }}
                onClick={() => openLightbox(index)}
                >
                    <motion.img
                    src={img.src}
                    alt={img.alt}
                    variants={imgVariants}
                    transition={{ duration: 0.2, delay: 0.1}}
                    onLoad={() => handleImageLoad(index)}
                    className="w-full object-cover"
                    />
                    <motion.div
                    variants={titleVariants}
                    className='text-black text-lg text-center pt-2 pb-3 w-full absolute bg-white'
                    >
                        <span>{img.alt}</span>
                    </motion.div>
                </motion.div>
            );
            })}
        </div>

        {lightboxIndex !== null && (
            <Lightbox
            isOpen={true}
            onClose={closeLightbox}
            images={images}
            index={lightboxIndex}
            />
        )}
      </div>
    </motion.section>
  );
}
