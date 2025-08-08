import Image from 'next/image';

export default function Header() {
  return (
    <header className="header">
      <div className="logo">
        <Image
          src="https://lodqquddikomudtyemwh.supabase.co/storage/v1/object/sign/dsrt-assets/file_0000000073c061f7922490cd14178abc.png?token=..." 
          alt="DSRT Logo"
          width={120}
          height={40}
          priority
        />
      </div>
      <nav>
        <button className="btn-login">Login</button>
      </nav>
      <style jsx>{`
        .header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem 2rem;
          background: #fff;
          box-shadow: 0 1px 4px rgba(0,0,0,0.1);
        }
        .btn-login {
          background-color: #0070f3;
          color: white;
          border: none;
          padding: 0.5rem 1rem;
          border-radius: 4px;
          cursor: pointer;
        }
        .btn-login:hover {
          background-color: #005bb5;
        }
      `}</style>
    </header>
  );
}
