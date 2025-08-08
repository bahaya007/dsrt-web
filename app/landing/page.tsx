// app/landing/page.tsx
import Link from 'next/link';

export default function LandingPage() {
  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        backgroundImage:
          "url('https://lodqquddikomudtyemwh.supabase.co/storage/v1/object/sign/dsrt-assets/images%20(8).jpeg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8xNzU2NThkNC1mMjJiLTQxZDItYjQ0ZS0zODNiNjkxMGVlNWEiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJkc3J0LWFzc2V0cy9pbWFnZXMgKDgpLmpwZWciLCJpYXQiOjE3NTQ2NDQ2ODQsImV4cCI6MTc4NjE4MDY4NH0.XctLbj5DRS0dqYHvoCbfksMQ-EaUyC-nRFrzElAr4hM')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Link href="/dashboard">
        <button
          style={{
            padding: '12px 24px',
            fontSize: '18px',
            borderRadius: '8px',
            border: 'none',
            cursor: 'pointer',
            backgroundColor: '#0070f3',
            color: 'white',
          }}
        >
          Masuk Dashboard
        </button>
      </Link>
    </div>
  );
}
