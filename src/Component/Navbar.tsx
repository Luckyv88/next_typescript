"use client";

import React from "react";
import Link from "next/link";

const Navbar: React.FC = () => {
  return (
    <nav className="flex justify-between items-center bg-[#0a1a33] text-white font-sans px-5 py-2.5">
      
      {/* Logo */}
      <div className="font-bold text-xl">Demo</div>

      {/* Links */}
      <div className="flex gap-4">
        <Link
          href="/"
          className="bg-[#00d4ff] text-[#0a1a33] px-4 py-2 rounded-md font-bold no-underline hover:opacity-90 transition"
        >
          Home
        </Link>

        <Link
          href="/login"
          className="bg-[#00d4ff] text-[#0a1a33] px-4 py-2 rounded-md font-bold no-underline hover:opacity-90 transition"
        >
          Login
        </Link>

        <Link
          href="/registration"
          className="bg-[#00d4ff] text-[#0a1a33] px-4 py-2 rounded-md font-bold no-underline hover:opacity-90 transition"
        >
          Registration
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
