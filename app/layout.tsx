import './globals.css';

export const metadata = {
  title: 'DSRT Platform',
  description: 'Digital Smart Revise Technology',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
