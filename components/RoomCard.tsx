import Image from 'next/image';

interface RoomCardProps {
  name: string;
  description: string;
  capacity: string;
  price: string;
  image: string;
}

const BLUR_DATA_URL =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAuMBg5fnmWcAAAAASUVORK5CYII=';

export default function RoomCard({ name, description, capacity, price, image }: RoomCardProps) {
  const imageAlt = `${name} – ${description}`;

  return (
    <article className="flex flex-col overflow-hidden rounded-3xl border border-black/5 bg-canvas-200 shadow-soft transition hover:border-brand/40">
      <div className="relative h-56 w-full overflow-hidden">
        <Image
          src={image}
          alt={imageAlt}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          placeholder="blur"
          blurDataURL={BLUR_DATA_URL}
          loading="lazy"
          decoding="async"
        />
      </div>
      <div className="flex flex-1 flex-col gap-4 p-6">
        <div className="space-y-2">
          <h3 className="text-xl font-semibold text-topbar">{name}</h3>
          <p className="text-sm text-topbar/70">{description}</p>
        </div>
        <dl className="mt-auto grid grid-cols-2 gap-4 text-sm text-topbar/80">
          <div>
            <dt className="text-xs uppercase tracking-[0.2em] text-topbar/50">Kapacita</dt>
            <dd className="font-medium">{capacity}</dd>
          </div>
          <div>
            <dt className="text-xs uppercase tracking-[0.2em] text-topbar/50">Cena</dt>
            <dd className="font-medium">{price}</dd>
          </div>
        </dl>
      </div>
    </article>
  );
}
