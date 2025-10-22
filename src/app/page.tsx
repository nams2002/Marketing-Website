import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Services from '@/components/sections/Services';
import OurTeam from '@/components/sections/OurTeam';
import PastClients from '@/components/sections/PastClients';
import Influencers from '@/components/sections/Influencers';
import Testimonials from '@/components/sections/Testimonials';
import Contact from '@/components/sections/Contact';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <OurTeam />
        <PastClients />
        <Influencers />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
