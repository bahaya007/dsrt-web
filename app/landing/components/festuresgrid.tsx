export default function FeaturesGrid() {
  return (
    <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '1rem', padding: '1rem' }}>
      {[1,2,3,4].map((item) => (
        <div key={item} style={{border: '1px solid #ccc', padding: '1rem', textAlign: 'center'}}>
          <p>Fitur Unggulan {item}</p>
          {/* Bisa ditambah icon/gambar nanti */}
        </div>
      ))}
    </section>
  );
}
