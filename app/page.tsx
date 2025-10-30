import Header from '@/components/organisms/Header/Header';
import HeroSection from '@/components/organisms/HeroSection/HeroSection';
import ProductShowcase from '@/components/organisms/ProductShowcase/ProductShowcase';
import Footer from '@/components/organisms/Footer/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <ProductShowcase />
      <Footer />
    </main>
  );
}
