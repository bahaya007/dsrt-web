import Link from 'next/link';

export default function LandingPage() {
return (
<div className="container">
<header className="header">
<div className="logo">DSRT</div>
<nav>
<Link href="/auth/login">
<a className="login-btn">Login</a>
</Link>
</nav>
</header>

<main className="hero">  
    <h1>DSRT</h1>  
    <p>Digital Smart Revise Technology</p>  
    <p>Edit smarter with AI + Manual</p>  
    <Link href="/auth/login">  
      <a className="cta-btn">Coba Sekarang</a>  
    </Link>  
  </main>  

  <section className="features">  
    <h2>FITUR UNGGULAN</h2>  
    <div className="grid">  
      <div className="feature-box">  
        <div className="icon">🖼️</div>  
        <p>Restorasi Foto Lama</p>  
      </div>  
      <div className="feature-box">  
        <div className="icon">🎨</div>  
        <p>Graphic Design Tools</p>  
      </div>  
      <div className="feature-box">  
        <div className="icon">✍️</div>  
        <p>Manual Editing Tools</p>  
      </div>  
      <div className="feature-box">  
        <div className="icon">⚙️</div>  
        <p>Preset & Automation</p>  
      </div>  
    </div>  
  </section>  

  <footer>  
    <p>  
      Ikuti kami di{' '}  
      <a  
        href="https://www.instagram.com/dsrt.official.2025"  
        target="_blank"  
        rel="noopener noreferrer"  
      >  
        Instagram DSRT  
      </a>  
    </p>  
  </footer>  

  <style jsx>{`  
    .container {  
      max-width: 900px;  
      margin: 0 auto;  
      padding: 20px;  
      font-family: Arial, sans-serif;  
      color: #333;  
    }  
    .header {  
      display: flex;  
      justify-content: space-between;  
      align-items: center;  
      margin-bottom: 60px;  
    }  
    .logo {  
      font-weight: bold;  
      font-size: 24px;  
    }  
    .login-btn {  
      background: #0070f3;  
      color: white;  
      padding: 8px 16px;  
      border-radius: 5px;  
      text-decoration: none;  
      font-weight: 600;  
    }  
    .hero {  
      text-align: center;  
      margin-bottom: 60px;  
    }  
    .hero h1 {  
      font-size: 48px;  
      margin-bottom: 10px;  
    }  
    .hero p {  
      margin: 5px 0;  
      font-size: 18px;  
    }  
    .cta-btn {  
      margin-top: 20px;  
      display: inline-block;  
      background: #0070f3;  
      color: white;  
      padding: 12px 30px;  
      border-radius: 6px;  
      font-weight: 600;  
      text-decoration: none;  
    }  
    .features {  
      text-align: center;  
      margin-bottom: 60px;  
    }  
    .features h2 {  
      font-size: 28px;  
      margin-bottom: 30px;  
    }  
    .grid {  
      display: grid;  
      grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));  
      gap: 20px;  
    }  
    .feature-box {  
      border: 1px solid #ddd;  
      border-radius: 10px;  
      padding: 20px;  
      font-size: 18px;  
      display: flex;  
      flex-direction: column;  
      align-items: center;  
      background: #fafafa;  
      transition: box-shadow 0.3s ease;  
    }  
    .feature-box:hover {  
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);  
    }  
    .icon {  
      font-size: 40px;  
      margin-bottom: 15px;  
    }  
    footer {  
      text-align: center;  
      padding: 20px 0;  
      border-top: 1px solid #ddd;  
      font-size: 16px;  
    }  
    footer a {  
      color: #0070f3;  
      text-decoration: none;  
      font-weight: 600;  
    }  
  `}</style>  
</div>

);
}

