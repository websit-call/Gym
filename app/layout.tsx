import type {Metadata} from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css'; // Global styles

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });
const space = Space_Grotesk({ subsets: ['latin'], variable: '--font-heading' });

export const metadata: Metadata = {
  title: 'Iron Pulse Fitness',
  description: 'Transform Your Body. Upgrade Your Life. Premium gym in Kolkata.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className="dark scroll-smooth h-full">
      <body className={`${inter.variable} ${space.variable} font-sans bg-[#050505] text-white antialiased selection:bg-red-600 selection:text-white overflow-x-hidden`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
