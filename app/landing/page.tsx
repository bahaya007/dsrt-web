import Header from './components/Header'
import HeroSection from './components/HeroSection'
import FeaturesGrid from './components/FeaturesGrid'

export default function LandingPage() {
  return (
    <>
      <Header />
      <main style={{ padding: '20px', maxWidth: '1200px', margin: 'auto' }}>
        <HeroSection />
        <FeaturesGrid />
      </main>
    </>
  )
}
