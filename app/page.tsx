import { Header, HeroSection, ProductShowcase, Footer } from '@/components';

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
