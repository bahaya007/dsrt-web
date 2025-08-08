import Link from 'next/link'

export default function DashboardHeader() {
  return (
    <header style={{
      backgroundColor: '#0070f3',
      color: 'white',
      padding: '15px 20px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      fontWeight: 'bold',
    }}>
      <div>DSRT Dashboard</div>
      <nav>
        <Link href="/landing"><button style={{backgroundColor:'white', color:'#0070f3'}}>Keluar</button></Link>
      </nav>
    </header>
  )
}
