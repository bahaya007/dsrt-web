
// app/layout.tsx
import './globals.css';
import { Analytics } from '@vercel/analytics/react';

export const metadata = {
  title: 'DSRT Landing Page',
  description: 'Digital Smart Revise Technology',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
