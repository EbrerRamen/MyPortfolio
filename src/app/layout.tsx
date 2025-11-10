import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Link from 'next/link'; // Import Link
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Abrar Rahman - Portfolio',
  description: 'Ultra-modern portfolio showcasing my work',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="fixed top-0 w-full bg-glass-bg backdrop-blur-md border-b border-gray-800 shadow-xl z-50 transition-all duration-300 ease-in-out py-3">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16 items-center">
              <Link
                href="/"
                className="text-3xl font-extrabold text-white hover:text-indigo-400 transition-colors duration-300"
              >
                Abrar Rahman
              </Link>
              <div className="space-x-6">
                <Link
                  href="#home"
                  className="text-lg font-medium text-gray-300 hover:text-white transition-colors duration-300 relative group"
                >
                  Home
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-indigo-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                </Link>
                <Link
                  href="#about"
                  className="text-lg font-medium text-gray-300 hover:text-white transition-colors duration-300 relative group"
                >
                  About
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-indigo-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                </Link>
                <Link
                  href="#projects"
                  className="text-lg font-medium text-gray-300 hover:text-white transition-colors duration-300 relative group"
                >
                  Projects
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-indigo-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                </Link>
                <Link
                  href="#contact"
                  className="text-lg font-medium text-gray-300 hover:text-white transition-colors duration-300 relative group"
                >
                  Contact
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-indigo-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                </Link>
              </div>
            </div>
          </div>
        </nav>
        <main>{children}</main>
      </body>
    </html>
  );
}
