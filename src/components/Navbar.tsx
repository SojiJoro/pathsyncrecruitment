'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-slate-900 text-white sticky top-0 z-50 border-b border-slate-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo and Brand */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <div className="w-8 h-8 bg-blue-500 rounded flex items-center justify-center font-bold text-sm">
                PS
              </div>
              <span className="ml-3 font-semibold text-lg">
                PathSync
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/learners" className="text-slate-300 hover:text-white transition font-medium">
              Learners
            </Link>
            <Link href="/mentors" className="text-slate-300 hover:text-white transition font-medium">
              Mentors
            </Link>
            <Link href="/employers" className="text-slate-300 hover:text-white transition font-medium">
              Employers
            </Link>
            <Link href="/impact" className="text-slate-300 hover:text-white transition font-medium">
              Impact
            </Link>
            <Link href="/platform" className="text-slate-300 hover:text-white transition font-medium">
              Platform
            </Link>
            <Link 
              href="/access" 
              className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md transition font-medium"
            >
              Access Platform
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex md:hidden items-center">
            <button
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2 rounded-md text-slate-300 hover:text-white hover:bg-slate-800"
            >
              {menuOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-slate-800 border-t border-slate-700">
          <div className="px-4 py-4 space-y-2">
            <Link
              href="/learners"
              onClick={() => setMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-slate-300 hover:text-white hover:bg-slate-700 transition font-medium"
            >
              Learners
            </Link>
            <Link
              href="/mentors"
              onClick={() => setMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-slate-300 hover:text-white hover:bg-slate-700 transition font-medium"
            >
              Mentors
            </Link>
            <Link
              href="/employers"
              onClick={() => setMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-slate-300 hover:text-white hover:bg-slate-700 transition font-medium"
            >
              Employers
            </Link>
            <Link
              href="/impact"
              onClick={() => setMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-slate-300 hover:text-white hover:bg-slate-700 transition font-medium"
            >
              Impact
            </Link>
            <Link
              href="/platform"
              onClick={() => setMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-slate-300 hover:text-white hover:bg-slate-700 transition font-medium"
            >
              Platform
            </Link>
            <Link
              href="/access"
              onClick={() => setMenuOpen(false)}
              className="block px-3 py-2 rounded-md bg-blue-600 hover:bg-blue-700 text-white transition font-medium"
            >
              Access Platform
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
