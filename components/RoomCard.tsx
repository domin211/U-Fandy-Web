import Image from 'next/image';
import Link from 'next/link';

interface RoomCardProps {
  title: string;
  priceFrom: string;
  imageSrc: string;
  href: string;
}

const BLUR_DATA_URL =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAuMBg5fnmWcAAAAASUVORK5CYII=';

export default function RoomCard({ title, priceFrom, imageSrc, href }: RoomCardProps) {
  return (
    <Link href={href} className="group block focus-visible:outline-none">
      <article
        className="flex h-full flex-col overflow-hidden rounded-3xl border border-black/5 bg-canvas-200 shadow-soft transition duration-300 ease-out group-hover:-translate-y-1 group-hover:shadow-xl group-focus-visible:-translate-y-1 group-focus-visible:ring-2 group-focus-visible:ring-brand group-focus-visible:ring-offset-4 group-focus-visible:ring-offset-canvas-200"
      >
        <div className="relative aspect-[4/3] w-full overflow-hidden">
          <Image
            src={imageSrc}
            alt={title}
            fill
            className="object-cover transition duration-500 ease-out group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            placeholder="blur"
            blurDataURL={BLUR_DATA_URL}
          />
        </div>
        <div className="space-y-2 p-6">
          <h3 className="text-lg font-semibold text-topbar">{title}</h3>
          <p className="text-sm text-topbar/60">{priceFrom}</p>
        </div>
      </article>
    </Link>
  );
}
