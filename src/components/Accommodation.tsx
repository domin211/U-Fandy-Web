import { useLanguage } from '../i18n/LanguageContext';

export default function AccommodationSection() {
  const {
    content: { accommodation }
  } = useLanguage();

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <header className="text-center space-y-4">
          <h1 className="text-4xl font-serif font-semibold text-gray-900">{accommodation.heading}</h1>
          {accommodation.intro.map((paragraph, index) => (
            <p key={index} className="text-gray-700 max-w-3xl mx-auto text-lg leading-relaxed">
              {paragraph}
            </p>
          ))}
        </header>

        <div className="grid gap-10 md:grid-cols-2">
          {accommodation.rooms.map((room, index) => (
            <article key={index} className="bg-white rounded-3xl shadow-lg overflow-hidden">
              <div className="h-64">
                <img
                  src={`https://source.unsplash.com/collection/483251/${index + 1}`}
                  alt={room.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 space-y-4">
                <h2 className="text-2xl font-serif font-semibold text-amber-700">{room.name}</h2>
                <p className="text-gray-700 leading-relaxed">{room.description}</p>
                <ul className="grid gap-2 text-sm text-gray-600">
                  {room.amenities.map((amenity, amenityIndex) => (
                    <li key={amenityIndex} className="flex items-start gap-2">
                      <span className="mt-1 h-2.5 w-2.5 rounded-full bg-amber-600" aria-hidden />
                      <span>{amenity}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>

        <p className="text-center text-gray-600 text-base">{accommodation.note}</p>
      </div>
    </section>
  );
}
