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
    <article className="group h-full overflow-hidden rounded-3xl bg-canvas-200 shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-card">
      <Link
        href={href}
        className="flex h-full flex-col focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
      >
        <div className="relative h-60 w-full overflow-hidden">
          <Image
            src={imageSrc}
            alt={title}
            fill
            className="object-cover transition duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
            placeholder="blur"
            blurDataURL={BLUR_DATA_URL}
          />
        </div>
        <div className="flex flex-1 flex-col gap-4 p-6">
          <h3 className="text-xl font-semibold text-topbar">{title}</h3>
          <p className="text-xs font-medium uppercase tracking-wide text-topbar/60">{priceFrom}</p>
          <span className="mt-auto inline-flex items-center gap-2 text-sm font-medium text-brand transition group-hover:gap-3">
            Detail pokoje
            <svg
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              className="h-4 w-4"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="m9 5 7 7-7 7" />
            </svg>
          </span>
        </div>
      </Link>
    </article>
  );
}
