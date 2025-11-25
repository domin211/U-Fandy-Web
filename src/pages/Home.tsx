import Hero from '../components/Hero';
import About from '../components/About';
import RestaurantSection from '../components/Restaurant';
import WellnessSection from '../components/Wellness';
import Testimonials from '../components/Testimonials';

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <RestaurantSection />
      <WellnessSection />
      <Testimonials />
    </div>
  );
}
