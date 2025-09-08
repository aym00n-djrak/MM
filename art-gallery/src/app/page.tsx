import { ArtworkCarousel } from "@/components/gallery/carrousel";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Accueil - Galerie d\'Art Marc Monceau',
  description: 'Découvrez l\'univers de Marc Monceau, artiste peintre, à travers ses œuvres et expositions. Entrez dans un monde de couleurs et d\'émotions.',
};


export default function Home() {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="mb-4 text-4xl font-extrabold text-gray-900">Bienvenue dans mon univers</h1>
        <p className="mb-8 text-xl text-gray-600">
          Explorez une collection d&apos;art soigneusement sélectionnée.
        </p>
      </div>
      
      <section className="w-full mb-12">
        <ArtworkCarousel />
      </section>

      <div className="w-full">
        <iframe
          width="100%"
          height="450" 
          src="https://www.youtube.com/embed/7DI3iHwhBbI"
          title="Marc Monceau &quot;Le passage&quot;"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="rounded-lg shadow-lg"
        ></iframe>
      </div>
    </main>
  );
}