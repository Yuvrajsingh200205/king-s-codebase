import Header from "@/components/homepage/Header"
import Hero from "@/components/homepage/Hero"
import SplitHero from "@/components/homepage/SplitHero"
import HeadWelcome from "@/components/homepage/HeadWelcome"
import KingsHighlights from "@/components/homepage/KingsHighlights"
import FadeSection from "@/components/homepage/FadeSection"
import BannerSection from "@/components/homepage/BannerSection"
import DiscoverKings from "@/components/homepage/DiscoverKings"
import KingsStories from "@/components/homepage/KingsStories"
import NewsSection from "@/components/homepage/NewsSection"
import Footer from "@/components/homepage/Footer"
import { Split } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[rgb(210 18 69)]">
      <Header />
      <Hero />
      <SplitHero />
      <HeadWelcome />
      <KingsHighlights />
      <FadeSection />
      <BannerSection />
      <DiscoverKings />
      <KingsStories />
      <NewsSection />
      <Footer />
    </div>
  );
}
