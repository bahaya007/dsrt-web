const features = [
  'Upload dan proses restorasi foto',
  'Kelola preset dan template',
  'Buat Splash Screen dan Banner',
  'Kontrol keamanan platform',
];

export default function FeaturesList() {
  return (
    <section>
      <h3>Fitur Dashboard</h3>
      <ul>
        {features.map(f => (
          <li key={f}>{f}</li>
        ))}
      </ul>
      <style jsx>{`
        ul {
          list-style: disc inside;
          font-size: 1.1rem;
          color: #333;
        }
      `}</style>
    </section>
  );
}
