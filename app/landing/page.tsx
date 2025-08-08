import Header from './components/Header';
import HeroSection from './components/HeroSection';
import FeaturesGrid from './components/FeaturesGrid';
import './globals.css';

export default function LandingPage() {
  return (
    <>
      <Header />
      <main className="landing-main">
        <HeroSection />
        <FeaturesGrid />
      </main>
    </>
  );
}
