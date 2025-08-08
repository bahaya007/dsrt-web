import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
  return (
    <header style={{
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '10px 20px', backgroundColor: 'white', boxShadow: '0 2px 6px rgba(0,0,0,0.1)'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <Image src="/dsrt-logo.png" alt="DSRT Logo" width={48} height={48} />
        <h1 style={{ margin: 0, fontWeight: 'bold', fontSize: '1.5rem' }}>DSRT</h1>
      </div>
      <nav>
        <Link href="/dashboard">
          <button>Login</button>
        </Link>
      </nav>
    </header>
  )
}
