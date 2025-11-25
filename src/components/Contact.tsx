import { useLanguage } from '../i18n/LanguageContext';

export default function ContactSection() {
  const {
    content: { contact }
  } = useLanguage();

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <header className="text-center space-y-4">
          <h1 className="text-4xl font-serif font-semibold text-gray-900">{contact.heading}</h1>
          <p className="text-gray-700 text-lg leading-relaxed">{contact.intro}</p>
        </header>

        <div className="grid gap-10 md:grid-cols-3">
          <div className="bg-white p-8 rounded-3xl shadow-lg space-y-2">
            <h2 className="text-xl font-serif font-semibold text-amber-700">{contact.addressHeading}</h2>
            {contact.addressLines.map((line, index) => (
              <p key={index} className="text-gray-700">{line}</p>
            ))}
          </div>
          <div className="bg-white p-8 rounded-3xl shadow-lg space-y-4">
            <h2 className="text-xl font-serif font-semibold text-amber-700">{contact.contactsHeading}</h2>
            <ul className="space-y-3 text-gray-700">
              {contact.contacts.map((item, index) => (
                <li key={index}>
                  <span className="block text-sm uppercase tracking-wide text-gray-500">{item.label}</span>
                  <a href={item.href} className="text-lg font-medium text-amber-700 hover:underline">
                    {item.value}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white p-8 rounded-3xl shadow-lg space-y-2">
            <h2 className="text-xl font-serif font-semibold text-amber-700">{contact.openingHeading}</h2>
            {contact.openingLines.map((line, index) => (
              <p key={index} className="text-gray-700">{line}</p>
            ))}
          </div>
        </div>

        <div className="rounded-3xl overflow-hidden shadow-lg h-80">
          <iframe
            title="Mapa Wellness & Restaurant U Fandy"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2586.581585863923!2d18.2967673!3d49.5984537!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4713f4f796152535%3A0x3d288a69ac44444a!2sWellness%20%26%20Restaurant%20U%20Fandy!5e0!3m2!1scs!2scz!4v1709647200000!5m2!1scs!2scz"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
