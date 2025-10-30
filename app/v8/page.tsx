"use client";

import React from "react";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import TopBar from "@/components/organisms/TopBar/TopBar";
import Header from "@/components/organisms/Header/Header";
import HeroSection from "@/components/organisms/HeroSection/HeroSection";
import ProductShowcase from "@/components/organisms/ProductShowcase/ProductShowcase";
import Footer from "@/components/organisms/Footer/Footer";

export default function V8Page() {
  return (
    <ThemeProvider version="v8">
      <div className="min-h-screen bg-white">
        <TopBar />
        <Header />
        <HeroSection />
        <ProductShowcase />
        <Footer />
      </div>
    </ThemeProvider>
  );
}