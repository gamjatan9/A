import type { Metadata } from 'next';
import { Acme } from 'next/font/google';
import './globals.css';

const acme = Acme({ 
  weight: '400',
  subsets: ['latin'] 
});

export const metadata: Metadata = {
  title: 'AllerGenie',
  description: 'AllerGenie NextJs App',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={acme.className}>{children}</body>
    </html>
  );
}
