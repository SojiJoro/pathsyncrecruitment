'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Left side: Logo and Brand */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image
                src="/logo.png"
                alt="Pathsync Logo"
                width={40}
                height={40}
              />
              <span className="ml-2 font-bold text-xl text-gray-800">
                Pathsync
              </span>
            </Link>
          </div>

          {/* Center/Right side: Desktop Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/about"
              className="text-gray-600 hover:text-gray-800"
            >
              About
            </Link>
            <Link
              href="/jobs"
              className="text-gray-600 hover:text-gray-800"
            >
              Jobs
            </Link>
            <Link
              href="/contact"
              className="text-gray-600 hover:text-gray-800"
            >
              Contact
            </Link>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex md:hidden items-center">
            <button
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2 rounded-md text-gray-600 hover:text-gray-800 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-800"
              aria-label="Toggle navigation menu"
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

      {/* Mobile Menu (shown when open) */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              href="/about"
              onClick={() => setMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50"
            >
              About
            </Link>
            <Link
              href="/jobs"
              onClick={() => setMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50"
            >
              Jobs
            </Link>
            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
