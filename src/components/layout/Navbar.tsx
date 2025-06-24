"use client";

import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const { data: session } = useSession();
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleMenu = () => setMobileOpen(!mobileOpen);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-xl font-extrabold text-blue-600">
          InstaLanding<span className="text-gray-800">AI</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden sm:flex items-center space-x-6 text-sm text-gray-700">
          <Link href="/dashboard" className="hover:text-blue-600">Dashboard</Link>
          <Link href="/subscribe" className="hover:text-blue-600">Pricing</Link>

          {!session?.user ? (
            <>
              <Link href="/login" className="hover:text-blue-600">Login</Link>
              <Link href="/signup" className="hover:text-blue-600">Sign Up</Link>
            </>
          ) : (
            <button onClick={() => signOut()} className="hover:text-red-600">Logout</button>
          )}
        </div>

        {/* Mobile Button */}
        <button className="sm:hidden" onClick={toggleMenu}>
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile Dropdown */}
      {mobileOpen && (
        <div className="sm:hidden px-4 pb-4 space-y-3 text-sm text-gray-700 bg-white border-t border-gray-200">
          <Link href="/dashboard" onClick={toggleMenu}>Dashboard</Link>
          <Link href="/subscribe" onClick={toggleMenu}>Pricing</Link>
          {!session?.user ? (
            <>
              <Link href="/login" onClick={toggleMenu}>Login</Link>
              <Link href="/signup" onClick={toggleMenu}>Sign Up</Link>
            </>
          ) : (
            <button onClick={() => { signOut(); toggleMenu(); }} className="text-left text-red-600">Logout</button>
          )}
        </div>
      )}
    </header>
  );
}
