import DashboardHeader from './components/DashboardHeader';
import FeaturesList from './components/FeaturesList';

export default function DashboardPage() {
  return (
    <>
      <DashboardHeader />
      <main>
        <h1>Dashboard</h1>
        <FeaturesList />
      </main>
      <style jsx>{`
        main {
          padding: 2rem;
          max-width: 900px;
          margin: 0 auto;
        }
      `}</style>
    </>
  );
}
