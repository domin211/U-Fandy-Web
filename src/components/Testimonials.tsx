const testimonials = [
  {
    name: 'Petr Novotný',
    text: 'Skvělý víkend v Beskydech! Děti si užily bazén a my s manželkou bowling. Pizza z pece byla vynikající.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200&h=200'
  },
  {
    name: 'Jana Kratochvílová',
    text: 'Úžasné wellness a velmi milý personál. Pokoj s vířivkou byl třešničkou na dortu našeho výročí.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200&h=200'
  },
  {
    name: 'Tým firmy APL',
    text: 'Firemní večírek se povedl na jedničku. Skvělá organizace, raut i večerní zábava na bowlingu. Děkujeme!',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=200&h=200'
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
            Co o nás říkají hosté
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="text-center bg-white p-8 rounded-2xl shadow-sm">
              <div className="mb-6 relative inline-block">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-24 h-24 rounded-full mx-auto object-cover border-4 border-amber-100"
                />
              </div>
              <p className="text-gray-700 text-sm mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>
              <p className="font-serif font-bold text-gray-900">{testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
