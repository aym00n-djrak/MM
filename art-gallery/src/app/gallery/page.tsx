import { Metadata } from 'next';
import GalleryGrid from '@/components/gallery/grid';

export const metadata: Metadata = {
  title: 'Galerie d\'Art - Marc Monceau',
  description: 'Découvrez la collection complète des œuvres de Marc Monceau, incluant peintures et dessins, exposées dans une galerie en ligne.',
};

export default function GalleryPage() {
    return (
        <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
            <header className="text-center mb-12">
                <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
                    Galerie d&apos;Art
                </h1>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                    Découvrez notre collection d&apos;œuvres d&apos;art.
                </p>
            </header>
            <GalleryGrid />
        </div>
    );
}