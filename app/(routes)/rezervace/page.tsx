import type { Metadata } from 'next';
import SectionHeading from '@/components/SectionHeading';
import ReservationForm from '@/components/ReservationForm';

export const revalidate = 3600;

export const metadata: Metadata = {
  title: 'Rezervace',
  description: 'Pošlete nám poptávku na pobyt, firemní akci nebo oslavu. Ozveme se do 24 hodin.'
};

export default function RezervacePage() {
  return (
    <div className="mx-auto max-w-3xl space-y-12 px-4 py-16 sm:px-6">
      <SectionHeading
        eyebrow="Rezervace"
        title="Poptejte svůj zážitek u Fandy"
        description="Napište nám, pro kolik osob plánujete pobyt a jaké služby vás lákají. Ozveme se s nabídkou."
        align="center"
      />
      <ReservationForm />
    </div>
  );
}
