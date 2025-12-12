import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'MrBeast | Changing the World',
  description: 'Watch crazy challenges, massive giveaways, and world-record breaking videos.',
  icons: {
    icon: '/images/mr beast logo.jpg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

