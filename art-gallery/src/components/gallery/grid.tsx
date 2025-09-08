'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

// Composant de la modale pour afficher l'image en grand
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
      <div className="relative max-w-5xl p-4">
        <button 
          className="absolute top-4 right-4 text-white text-3xl font-bold"
          onClick={onClose}
        >
          &times;
        </button>
        <Image 
          src={src} 
          alt={alt} 
          width={1200} 
          height={800} 
          className="rounded-lg max-w-full h-auto" 
        />
      </div>
    </div>
  );
};

// Données fictives pour les images
const artworks = [
  { id: 1, title: 'L\'instant suspendu', src: '/art1.jpg' },
  { id: 2, title: 'Rêverie urbaine', src: '/art1.jpg' },
  { id: 3, title: 'Le passage', src: '/art1.jpg' },
  { id: 4, title: 'Sérénité', src: '/art1.jpg' },
  { id: 5, title: 'Horizon lointain', src: '/art1.jpg' },
  { id: 6, title: 'Échappée', src: '/art1.jpg' },
];

export default function GalleryGrid() {
  const [selectedImage, setSelectedImage] = useState<{ id: number; title: string; src: string } | null>(null);

  const openModal = (image: { id: number; title: string; src: string }) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {artworks.map((artwork, index) => (
          <motion.div
            key={artwork.id}
            className="relative group cursor-pointer overflow-hidden rounded-lg shadow-lg"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            whileHover={{ scale: 1.05, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)" }}
            onClick={() => openModal(artwork)}
          >
            <div className="relative w-full aspect-[4/5]">
              <Image
                src={artwork.src}
                alt={artwork.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4">
              <h3 className="text-white text-lg font-semibold">{artwork.title}</h3>
            </div>
          </motion.div>
        ))}
      </div>
      
      {selectedImage && (
        <ImageModal 
          src={selectedImage.src}
          alt={selectedImage.title}
          onClose={closeModal}
        />
      )}
    </>
  );
}