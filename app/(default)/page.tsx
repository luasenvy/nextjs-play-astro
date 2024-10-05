import About from "@/components/Aboutsection";
import Blogsection from "@/components/Blogsection";
import CTA from "@/components/CTAsection";
import Clients from "@/components/Clients";
import Contact from "@/components/Contactsection";
import Faq from "@/components/Faq";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricingsection";
import Team from "@/components/Team";
import Testimonials from "@/components/Testimonials";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Features />
      <About />
      <CTA />
      <Pricing />
      <Testimonials />
      <Faq />
      <Team />
      <Blogsection />
      <Contact />
      <Clients />
    </>
  );
}
