export default function HeroSection() {
  return (
    <section
      style={{
        backgroundImage: 'url(/wallpaper.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        borderRadius: '10px',
        padding: '80px 40px',
        color: 'white',
        textAlign: 'center',
        marginBottom: '40px',
        boxShadow: 'inset 0 0 0 1000px rgba(0,0,0,0.4)'
      }}
    >
      <h2 style={{ fontSize: '3rem', marginBottom: '20px', fontWeight: 'bold' }}>
        Digital Smart Revise Technology
      </h2>
      <p style={{ fontSize: '1.25rem', marginBottom: '40px' }}>
        Teknologi Restorasi Foto AI konservatif dan natural untuk hasil terbaik.
      </p>
      <button style={{ fontSize: '1.25rem', padding: '12px 36px' }}>Coba Sekarang</button>
    </section>
  )
}
