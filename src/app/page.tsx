import AboutSection from "@/components/pages/homePage/AboutSection";
import BannerSection from "@/components/pages/homePage/BannerSection";
import PortfolioSection from "@/components/pages/homePage/PortfolioSection";
import TechnologySection from "@/components/pages/homePage/TechnologySection";

export default function Home() {
  return (
    <>
      <BannerSection />
      <AboutSection />
      <TechnologySection />
      <PortfolioSection />
    </>
  );
}
