import { gallerySections } from '../data/galleryData';
import GalleryNav from "../components/GalleryNav";
import GallerySection from '../components/GallerySection';

export default function Gallery() {
  return (
    <>
      {/* <GalleryNav /> */}
      {gallerySections.map(section => (
        <GallerySection
          key={section.id}
          id={section.id}
          title={section.title}
          images={section.images}
          bg={section.bg}
          coverBg={section.coverBg}
        />
      ))}
    </>
  );
}
