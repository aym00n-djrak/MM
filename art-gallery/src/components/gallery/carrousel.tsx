'use client'

import { useState, useEffect, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { motion } from 'framer-motion';
import Image from 'next/image';

type ImageModalProps = {
  src: string;
  alt: string;
  onClose: () => void;
};

const ImageModal = ({ src, alt, onClose }: ImageModalProps) => {
  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
      onClick={onClose}
    >
      <div className="relative max-w-4xl p-4">
        <button 
          className="absolute top-2 right-2 text-white text-3xl font-bold"
          onClick={onClose}
        >
          &times;
        </button>
        <Image src={src} alt={alt} width={900} height={600} className="rounded-lg" />
      </div>
    </div>
  );
};

export function ArtworkCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  type Artwork = { id: number; title: string; image: string };
  const [selectedImage, setSelectedImage] = useState<Artwork | null>(null);

  const artworks: Artwork[] = [ 
    { id: 1, title: 'Artwork 1', image: '/art1.jpg' },
    { id: 2, title: 'Artwork 2', image: '/art1.jpg' },
    { id: 3, title: 'Artwork 3', image: '/art1.jpg' },
  ];

  const openModal = (image: Artwork) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  // Ajout du défilement automatique
  useEffect(() => {
    if (!emblaApi) return;

    const autoplay = setInterval(() => {
      if (emblaApi.canScrollNext()) {
        emblaApi.scrollNext();
      } else {
        emblaApi.scrollTo(0);
      }
    }, 3000); // Défilement toutes les 3 secondes

    return () => clearInterval(autoplay);
  }, [emblaApi]);
  
  return (
    <>
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex -ml-4">
          {artworks.map((artwork, index) => (
            <motion.div
              key={artwork.id}
              className="flex-[0_0_80%] pl-4 min-w-0 relative cursor-pointer"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              onClick={() => openModal(artwork)}
            >
              <div className="relative w-full h-96">
                <Image
                  src={artwork.image}
                  alt={artwork.title}
                  fill
                  className="object-cover rounded-lg"
                  priority={index === 0}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {selectedImage && (
        <ImageModal 
          src={selectedImage?.image}
          alt={selectedImage?.title}
          onClose={closeModal}
        />
      )}
    </>
  );
}