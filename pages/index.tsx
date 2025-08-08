import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>DSRT ArtWeb</title>
        <meta name="description" content="Landing page DSRT ArtWeb" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1a1a1a',
        color: '#fff',
        fontFamily: 'Arial, sans-serif',
        padding: '20px'
      }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Selamat datang di DSRT ArtWeb</h1>
        <p style={{ fontSize: '1.2rem', maxWidth: '600px', textAlign: 'center' }}>
          Website ini sedang dalam pembangunan. Nantikan karya seni dan restorasi terbaik kami!
        </p>
      </main>
    </>
  );
}
