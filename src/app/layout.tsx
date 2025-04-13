import '../app/globals.css';
import { Inter } from 'next/font/google';
import { Metadata } from 'next';
import { ReactNode } from 'react';
import Link from 'next/link';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
//             </button>
//           </div>
//         </div>
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Pathsync Recruitment',
  description: 'IT and Tech Recruitment Solutions',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
