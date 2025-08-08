// app/dashboard/page.tsx
import Link from 'next/link';

export default function DashboardPage() {
  return (
    <div style={{ padding: 20 }}>
      <h1>Dashboard DSRT</h1>
      <p>Selamat datang di dashboard. Ini halaman contoh yang bisa kamu kembangkan.</p>

      <Link href="/landing">
        <button
          style={{
            marginTop: 20,
            padding: '8px 16px',
            borderRadius: '6px',
            border: '1px solid #ccc',
            backgroundColor: 'white',
            cursor: 'pointer',
          }}
        >
          Kembali ke Landing Page
        </button>
      </Link>
    </div>
  );
}
