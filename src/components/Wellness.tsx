import { useLanguage } from '../i18n/LanguageContext';

export default function WellnessSection() {
  const {
    content: { wellness }
  } = useLanguage();

  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <header className="space-y-4 text-center">
          <h1 className="text-4xl font-serif font-semibold">{wellness.heading}</h1>
          {wellness.intro.map((paragraph, index) => (
            <p key={index} className="text-white/80 text-lg leading-relaxed max-w-3xl mx-auto">
              {paragraph}
            </p>
          ))}
        </header>

        <div className="grid gap-10 md:grid-cols-3">
          {wellness.experiences.map((experience, index) => (
            <article key={index} className="bg-white/10 backdrop-blur rounded-3xl p-8 space-y-3 border border-white/10">
              <div className="h-48 overflow-hidden rounded-2xl">
                <img
                  src={`https://source.unsplash.com/collection/1424341/${index + 1}`}
                  alt={experience.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <h2 className="text-2xl font-serif font-semibold text-amber-300">{experience.title}</h2>
              <p className="text-white/80 leading-relaxed text-sm">{experience.description}</p>
            </article>
          ))}
        </div>

        <p className="text-center text-white/70 text-base">{wellness.wellnessNote}</p>
      </div>
    </section>
  );
}
