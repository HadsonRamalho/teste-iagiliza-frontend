import HeroSection from "@/Components/HeroSection/HeroSection";
import { Features } from "@/Components/FeaturesSection/FeaturesSection";
import { Testimonials } from "@/Components/TestimonialsSection/TestimonialsSection";

export default function Home() {
  return ( 
    <div>
      <main>
        <HeroSection/>
        <Features/>
        <Testimonials/>
      </main>
    </div>
  )
}
