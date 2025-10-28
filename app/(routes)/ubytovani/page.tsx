import type { Metadata } from 'next';
import SectionHeading from '@/components/SectionHeading';
import RoomCard from '@/components/RoomCard';
import HoursTable from '@/components/HoursTable';
import rooms from '@/data/rooms.json';
import hours from '@/data/hours.json';

export const revalidate = 3600;

export const metadata: Metadata = {
  title: 'Ubytování',
  description:
    'Designové pokoje, privátní wellness a servis concierge. Objevte komfortní ubytování v hotelu U Fandy.'
};

export default function UbytovaniPage() {
  return (
    <div className="mx-auto max-w-6xl space-y-16 px-4 py-16 sm:px-6">
      <SectionHeading
        eyebrow="Ubytování"
        title="Spaní, na které se budete těšit"
        description="Vyberte si pokoj či apartmán podle své nálady. Každý má vlastní klimatizaci, kvalitní kosmetiku a chytrou televizi."
      />
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {rooms.map((room) => (
          <RoomCard key={room.name} {...room} />
        ))}
      </div>
      <section className="grid gap-10 lg:grid-cols-[1.2fr_1fr]">
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-white">Služby v ceně pobytu</h2>
          <ul className="space-y-3 text-sm text-slate-200">
            <li>✔️ Bohatá snídaně s domácím pečivem</li>
            <li>✔️ Vstup do wellness zóny na 60 minut denně</li>
            <li>✔️ Parkování u hotelu a úschovna kol</li>
            <li>✔️ Rychlá Wi-Fi a streamingové platformy</li>
            <li>✔️ Concierge tým připravený splnit vaše přání</li>
          </ul>
        </div>
        <div className="space-y-6">
          <HoursTable title="Recepce" rows={hours.hotel} />
          <div className="rounded-3xl border border-white/10 bg-slate-950/60 p-6 text-sm text-slate-200">
            <h3 className="text-lg font-semibold text-white">Check-in &amp; check-out</h3>
            <p className="mt-3">
              Standardní check-in probíhá od 15:00, check-out do 11:00. Potřebujete jinak? Ozvěte se nám a přizpůsobíme se.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
