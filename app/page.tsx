import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Trainers from '@/components/Trainers';
import Pricing from '@/components/Pricing';
import Testimonials from '@/components/Testimonials';
import BmiCalculator from '@/components/BmiCalculator';
import Schedule from '@/components/Schedule';
import Gallery from '@/components/Gallery';
import Faq from '@/components/Faq';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Page() {
  return (
    <main className="min-h-screen bg-[#050505] overflow-x-hidden w-full">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Trainers />
      <Pricing />
      <Testimonials />
      <BmiCalculator />
      <Schedule />
      <Gallery />
      <Faq />
      <Contact />
      <Footer />
    </main>
  );
}
