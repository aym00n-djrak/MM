import { Metadata } from 'next';
import { ContactForm } from '@/components/forms/contact-form';

export const metadata: Metadata = {
  title: 'Contact - Galerie d\'Art Marc Monceau',
  description: 'Contactez Marc Monceau pour toute question, demande d\'information ou pour organiser une visite privée à la galerie.',
};

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <h1 className="text-4xl font-extrabold text-center text-gray-900 mb-4">
          Nous Contacter
        </h1>
        <p className="text-xl text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Pour toute demande, information sur une œuvre ou rendez-vous, veuillez remplir le formulaire ci-dessous.
        </p>

        <ContactForm />
      </main>
    </div>
  );
}