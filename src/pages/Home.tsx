import Hero from '../components/Hero';
import About from '../components/About';
import RestaurantSection from '../components/Restaurant';
import WellnessSection from '../components/Wellness';

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <RestaurantSection />
      <WellnessSection />
    </div>
  );
}
