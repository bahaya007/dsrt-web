export default function HeroSection() {
  return (
    <section className="hero">
      <h1>DSRT</h1>
      <p>Digital Smart Revise Technology</p>
      <button className="btn-primary">Coba Sekarang</button>
      <style jsx>{`
        .hero {
          text-align: center;
          padding: 4rem 2rem;
          background-image: url('https://lodqquddikomudtyemwh.supabase.co/storage/v1/object/sign/dsrt-assets/images%20(8).jpeg?token=...');
          background-size: cover;
          background-position: center;
          color: white;
          text-shadow: 0 0 6px rgba(0,0,0,0.7);
        }
        h1 {
          font-size: 4rem;
          margin-bottom: 1rem;
        }
        p {
          font-size: 1.5rem;
          margin-bottom: 2rem;
        }
        .btn-primary {
          background-color: #0070f3;
          border: none;
          color: white;
          padding: 0.75rem 1.5rem;
          font-size: 1.2rem;
          border-radius: 6px;
          cursor: pointer;
        }
        .btn-primary:hover {
          background-color: #005bb5;
        }
      `}</style>
    </section>
  );
}
