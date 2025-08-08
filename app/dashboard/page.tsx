import DashboardHeader from './components/DashboardHeader'
import FeaturesList from './components/FeaturesList'

export default function DashboardPage() {
  return (
    <>
      <DashboardHeader />
      <main style={{ padding: '20px', maxWidth: '900px', margin: 'auto' }}>
        <h2>Dashboard DSRT</h2>
        <FeaturesList />
      </main>
    </>
  )
}
