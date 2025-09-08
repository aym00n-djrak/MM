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

  //jusqua 23
      const artworks: Artwork[] = [ 
        { id: 1, title: 'Artwork 1', image: '/art1.jpg' },
        { id: 2, title: 'Artwork 2', image: '/art2.jpg' },
        { id: 3, title: 'Artwork 3', image: '/art3.jpg' },
        { id: 4, title: 'Artwork 4', image: '/art4.jpg' },
        { id: 5, title: 'Artwork 5', image: '/art5.jpg' },
        { id: 6, title: 'Artwork 6', image: '/art6.jpg' },
        { id: 7, title: 'Artwork 7', image: '/art7.jpg' },
        { id: 8, title: 'Artwork 8', image: '/art8.jpg' },
        { id: 9, title: 'Artwork 9', image: '/art9.jpg' },
        { id: 10, title: 'Artwork 10', image: '/art10.jpg' },
        { id: 11, title: 'Artwork 11', image: '/art11.jpg' },
        { id: 12, title: 'Artwork 12', image: '/art12.jpg' },
        { id: 13, title: 'Artwork 13', image: '/art13.jpg' },
        { id: 14, title: 'Artwork 14', image: '/art14.jpg' },
        { id: 15, title: 'Artwork 15', image: '/art15.jpg' },
        { id: 16, title: 'Artwork 16', image: '/art16.jpg' },
        { id: 17, title: 'Artwork 17', image: '/art17.jpg' },
        { id: 18, title: 'Artwork 18', image: '/art18.jpg' },
        { id: 19, title: 'Artwork 19', image: '/art19.jpg' },
        { id: 20, title: 'Artwork 20', image: '/art20.jpg' },
        { id: 21, title: 'Artwork 21', image: '/art21.jpg' },
        { id: 22, title: 'Artwork 22', image: '/art22.jpg' },
        { id: 23, title: 'Artwork 23', image: '/art23.jpg' }
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