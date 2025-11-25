const testimonials = [
  {
    name: 'Mauris Aliquot',
    text: 'Aliquot. Etiam commodo dui eget wisi. Nullam libero mauris, consequat quis, varius et, dictum id, arcu. Aliquam erat volutpat. Vestibulum non lacus vel nunc pulvinar malesuada. Fusce vitae orci ligula. Suspendisse quis mauris enim. Morbi tellus sodales dapibus, consequat nec faucibus id.',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200'
  },
  {
    name: 'Duis Bibendum',
    text: 'Terpach Nizer. Nulla hendrerit tempus libero, dapibus tincididunt mauris dictum ut amet, imperdiet eget. Etiam posuere facilisis vehicula. Fusce quis enim elementum nunc fringilla velit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae.',
    image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=200'
  },
  {
    name: 'Mattis Lacinia',
    text: 'Reckinge. In turpis sed semper metus faucibus, velit odor ullamcorper vitae, imperdiet sagittis sed ultricies aliquet. Phasellus ut lacinia justo. Sed sagittis scilluque sed ultricies tristique per. Morbi non ligula massa. Ut eleifend, massa lacus facilisis in eleifend bibendum semper.',
    image: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=200'
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
            Co o nás říkají hosté
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="text-center">
              <div className="mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-gray-200"
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
