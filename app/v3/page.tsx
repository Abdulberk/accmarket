import { ThemeProvider } from "@/components/providers/ThemeProvider";
import TopBar from "@/components/organisms/TopBar/TopBar";
import Header from "@/components/organisms/Header/Header";
import HeroSection from "@/components/organisms/HeroSection/HeroSection";
import ProductShowcase from "@/components/organisms/ProductShowcase/ProductShowcase";
import Footer from "@/components/organisms/Footer/Footer";

export default function V3HomePage() {
  return (
    <ThemeProvider version="v3">
      <main className="min-h-screen bg-white">
        <TopBar />
        <Header />
        <HeroSection />
        <ProductShowcase />
        <Footer />
      </main>
    </ThemeProvider>
  );
}