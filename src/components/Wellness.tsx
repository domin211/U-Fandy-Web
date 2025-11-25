import { useLanguage } from '../i18n/LanguageContext';

export default function WellnessSection() {
  const {
    content: { wellness }
  } = useLanguage();

  const images = [
    'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&q=80&w=800', // Pool
    'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80&w=800', // Sauna
    'https://images.unsplash.com/photo-1538515099238-5f95f4e758c5?auto=format&fit=crop&q=80&w=800'  // Bowling
  ];

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
                  src={images[index] || images[0]}
                  alt={experience.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
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
