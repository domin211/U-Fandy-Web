import { useLanguage } from '../i18n/LanguageContext';

export default function About() {
  const {
    content: {
      home: { intro }
    }
  } = useLanguage();

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-12 lg:grid-cols-[1.1fr_0.9fr] items-center">
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-gray-900">{intro.heading}</h2>
          {intro.paragraphs.map((paragraph, index) => (
            <p key={index} className="text-gray-700 leading-relaxed text-lg">
              {paragraph}
            </p>
          ))}
          <div className="grid gap-6 md:grid-cols-3">
            {intro.highlights.map((highlight, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold font-serif text-amber-700 mb-2">{highlight.title}</h3>
                <p className="text-gray-700 text-sm leading-relaxed">{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="relative h-full">
          <div className="relative overflow-hidden rounded-3xl shadow-xl">
            <img
              src="https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Interiér penzionu U Fandy"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
