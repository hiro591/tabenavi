import Header from "@/components/Header";
import Hero from "@/components/Hero";

import ProblemSection from "@/components/ProblemSection";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Chains from "@/components/Chains";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import Signup from "@/components/Signup";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <ProblemSection />
      <Features />
      <HowItWorks />
      <Chains />
      <Testimonials />
      <Pricing />
      <FAQ />
      <Signup />
      <Footer />
    </main>
  );
}
