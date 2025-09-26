import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, ChevronLeft} from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { gallerySections } from '../data/galleryData';

// const artworks = [
//   { id: 1, title: 'Květinová bohyně', image: '/img/gallery/1.jpeg' },
//   { id: 2, title: 'Zrcadlení duše', image: '/img/gallery/2.jpeg' },
//   { id: 3, title: 'Kosmická harmonie', image: '/img/gallery/3.jpeg' },
//   { id: 4, title: 'Tajemství lesa', image: '/img/gallery/4.jpeg' },
//   { id: 5, title: 'Městské světlo', image: '/img/gallery/5.jpeg' },
//   { id: 6, title: 'Oheň a voda', image: '/img/gallery/6.jpeg' },
//   { id: 7, title: 'Noc a den', image: '/img/gallery/7.jpeg' },
//   { id: 8, title: 'Cesta snů', image: '/img/gallery/8.jpeg' },
//   { id: 9, title: 'Věčný klid', image: '/img/gallery/9.jpeg' },
//   { id: 10, title: 'Vzpomínky', image: '/img/gallery/10.jpeg' },
//   { id: 11, title: 'Květinová bohyně', image: '/img/gallery/1.jpeg' },
//   { id: 12, title: 'Zrcadlení duše', image: '/img/gallery/2.jpeg' },
// ];

const gallery = gallerySections[0];

const artworkIndices = [9, 10, 21, 25, 24, 0, 23, 9, 10];

const position = [
    'object-[50%_50%]',
    'object-[50%_45%]',
    'object-[50%_50%]',
    'object-[50%_20%]',
    'object-[50%_25%]', 
    'object-[50%_40%]',
    'object-[50%_50%]',
    'object-[50%_50%]',
    'object-[50%_45%]',
];

const artworks = artworkIndices.map((index, i) => ({
  id: i + 1,
  title: gallery.images[index].alt,
  image: gallery.images[index].src,
  position: position[i],
}));

export default function Gallery() {
  const [startIndex, setStartIndex] = useState(0);
  const visibleCount = 3;

  const containerRef = useRef(null);
  const cardRef = useRef(null);
  const [cardWidth, setCardWidth] = useState(0);

  const intervalRef = useRef(null);

  // Po načtení komponenty zjistíme šířku karty + margin
  useEffect(() => {
    if (cardRef.current) {
      const width = cardRef.current.offsetWidth;
      setCardWidth(width);
    }
  }, []);

  // Spustit autoplay při mountu
  useEffect(() => {
    resetAutoplay();
  }, []);

  const stopAutoplay = () => {
    if (intervalRef.current !== null) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const resetAutoplay = (dir = 1) => {
    if (intervalRef.current !== null) {
      clearInterval(intervalRef.current);
    }

    // Nastav nový interval s timeoutem 4.5 sekundy
    intervalRef.current = setInterval(() => {
      dir < 0 ? prev() : next();
    }, 4500);
  };

  function prev() {
    setStartIndex(i => (i === 0 ? artworks.length - visibleCount : i - 1));
    resetAutoplay(-1);
  }

  function next() {
    setStartIndex(i => (i >= artworks.length - visibleCount ? 0 : i + 1));
    resetAutoplay(1);
  }

  return (
    <section id="gallery" className="h-[20rem] xl:h-[24rem] 2xl:h-[28rem]">
      <div className="max-w-7xl mx-auto flex items-center relative h-full">
        <button
          onClick={prev}
          className="h-full p-2 sm:pr-5 cursor-pointer absolute left-0 z-10"
          aria-label="Předchozí"
        >
          <ChevronLeft className="text-black bg-white w-5 h-5 sm:w-6 sm:h-6"/>
        </button>

        <div className="overflow-hidden w-full h-full" ref={containerRef}>
          <motion.div
            className="flex h-full"
            animate={{ x: (startIndex * -cardWidth) - cardWidth/2  }}
            transition={{ type: "spring", stiffness: 200, damping: 30 }}
          >
            {artworks.map((art, index) => (
              <div
                key={art.id}
                ref={index === 0 ? cardRef : null} // jen první karta pro měření
                className="overflow-hidden bg-gray-50 flex-shrink-0 h-full w-[15rem] sm:w-[25rem] md:w-[35rem]"
                // style={{ width: `calc((100% - 2rem) / ${visibleCount})` }} 
                // 2rem = 32px, protože mx-2 je 0.5rem na každé straně = 1rem mezera mezi kartami celkem
              >
                <img
                  src={art.image}
                  alt={art.title}
                  className={`w-full h-full object-cover ${art.position}`}
                />
              </div>
            ))}
          </motion.div>
        </div>

        <button
          onClick={next}
          className="h-full p-2 sm:pl-5 cursor-pointer absolute right-0 z-10"
          aria-label="Další"
        >
          <ChevronRight className="text-white bg-black w-5 h-5 sm:w-6 sm:h-6"/>
        </button>
        {/* <div className="absolute right-0 bottom-0 ">
          <NavLink to="/galerie" className="flex items-center gap-2 text-gray-800 bg-white pl-4 pr-2 py-2 m-1 underline underline-offset-10 hover:no-underline">
            <h2 className="text-3xl font-bold">Galerie</h2>
            <ChevronRight className="text-gray-800 bg-white w-5 h-5 sm:w-6 sm:h-6"/>
          </NavLink>
        </div> */}
      </div>
    </section>
  );
}