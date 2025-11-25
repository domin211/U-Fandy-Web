import { useLanguage } from '../i18n/LanguageContext';

export default function RestaurantSection() {
  const {
    content: { restaurant }
  } = useLanguage();

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <header className="space-y-4 text-center">
          <h1 className="text-4xl font-serif font-semibold text-gray-900">{restaurant.heading}</h1>
          {restaurant.intro.map((paragraph, index) => (
            <p key={index} className="text-gray-700 text-lg leading-relaxed max-w-3xl mx-auto">
              {paragraph}
            </p>
          ))}
        </header>

        <div className="grid gap-10 md:grid-cols-3">
          {restaurant.sections.map((section, index) => (
            <article key={index} className="bg-gray-50 p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
              <div className="h-48 mb-6 overflow-hidden rounded-2xl">
                <img
                  src={`https://source.unsplash.com/collection/1424340/${index + 1}`}
                  alt={section.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <h2 className="text-2xl font-serif font-semibold text-amber-700 mb-3">{section.title}</h2>
              <p className="text-gray-700 leading-relaxed">{section.description}</p>
            </article>
          ))}
        </div>

        <p className="text-center text-gray-600 text-base">{restaurant.reservationNote}</p>
      </div>
    </section>
  );
}
