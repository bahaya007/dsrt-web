const features = [
  { title: 'Upload Image', description: 'Unggah foto rusak Anda dengan mudah.' },
  { title: 'Restorasi AI', description: 'Perbaiki foto dengan teknologi AI konservatif.' },
  { title: 'Download Hasil', description: 'Simpan dan cetak hasil foto Anda.' },
  { title: 'Keamanan Data', description: 'Privasi dan keamanan terjamin.' },
];

export default function FeaturesGrid() {
  return (
    <section className="features-grid">
      <h2>Fitur Unggulan</h2>
      <div className="grid">
        {features.map(({ title, description }) => (
          <div key={title} className="feature-card">
            <h3>{title}</h3>
            <p>{description}</p>
          </div>
        ))}
      </div>
      <style jsx>{`
        .features-grid {
          padding: 3rem 2rem;
          max-width: 900px;
          margin: 0 auto;
          text-align: center;
        }
        .grid {
          display: grid;
          gap: 1.5rem;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          margin-top: 2rem;
        }
        .feature-card {
          padding: 1rem;
          border: 1px solid #eee;
          border-radius: 10px;
          background: white;
          box-shadow: 0 2px 6px rgba(0,0,0,0.1);
          transition: box-shadow 0.3s ease;
        }
        .feature-card:hover {
          box-shadow: 0 4px 10px rgba(0,0,0,0.15);
        }
      `}</style>
    </section>
  );
}
