const fiturList = [
  { title: 'Upload Image', description: 'Unggah foto yang ingin direstorasi.' },
  { title: 'Download / Cetak Print', description: 'Simpan dan cetak hasil restorasi.' },
  { title: 'Fitur Unggulan 1', description: 'Deskripsi fitur unggulan 1.' },
  { title: 'Fitur Unggulan 2', description: 'Deskripsi fitur unggulan 2.' },
]

export default function FeaturesGrid() {
  return (
    <section>
      <h3 style={{ textAlign: 'center', marginBottom: '20px' }}>Fitur Unggulan</h3>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))',
          gap: '20px',
          maxWidth: '1000px',
          margin: 'auto',
        }}
      >
        {fiturList.map(({ title, description }, i) => (
          <div
            key={i}
            style={{
              backgroundColor: 'white',
              borderRadius: '10px',
              padding: '20px',
              boxShadow: '0 0 6px rgba(0,0,0,0.1)',
              textAlign: 'center',
            }}
          >
            <h4>{title}</h4>
            <p>{description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
