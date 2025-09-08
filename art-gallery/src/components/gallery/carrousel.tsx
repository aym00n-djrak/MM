'use client'

import useEmblaCarousel from 'embla-carousel-react'
import { motion } from 'framer-motion'
import Image from 'next/image'

export function ArtworkCarousel() {
  const [emblaRef] = useEmblaCarousel({ loop: true })

    const artworks = [ 
        { id: 1, title: 'Artwork 1', image: '/art1.jpg' },
        { id: 2, title: 'Artwork 2', image: '/art1.jpg' },
        { id: 3, title: 'Artwork 3', image: '/art1.jpg' },
    ];
  
  return (
    <div className="overflow-hidden" ref={emblaRef}>
      <div className="flex">
        {artworks.map((artwork, index) => (
          <motion.div
            key={artwork.id}
            className="flex-[0_0_80%] min-w-0 relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
          >
            <Image
              src={artwork.image}
              alt={artwork.title}
              width={800}
              height={384}
              className="w-full h-96 object-cover rounded-lg"
              priority={index === 0}
            />
          </motion.div>
        ))}
      </div>
    </div>
  )
}