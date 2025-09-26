import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function LazyImage({ src, alt, className = '' }) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => setLoaded(true);
  }, [src]);

  return loaded ? (
    <motion.img
        src={src}
        alt={alt}
        // initial={{ opacity: 0, y: 30 }}
        // whileInView={{ opacity: 1, y: 0 }}
        // transition={{ duration: 0.4, delay: index * 0.3 }}
        // viewport={{ once: true }}
        className={className}
    />
  ) : (
    // <div className="w-full aspect-[1/1] bg-gray-200 animate-pulse" />
    null
  );
}
