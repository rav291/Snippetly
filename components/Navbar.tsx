"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-[var(--color-shocking-700)] backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo / Brand */}
        <Link
          href="/"
          className="text-2xl font-clashDisplay tracking-tight text-white hover:text-purple-300 transition-colors"
        >
          Maverick<span className="">Dev</span>
        </Link>

        {/* Nav Links */}
        <ul className="hidden md:flex gap-8 text-base font-sora text-gray-200">
          <li>
            <Link
              href="#features"
              className="hover:text-purple-400 transition-colors"
            >
              Features
            </Link>
          </li>
          <li>
            <Link
              href="#projects"
              className="hover:text-purple-400 transition-colors"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              href="#about"
              className="hover:text-purple-400 transition-colors"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="#contact"
              className="hover:text-purple-400 transition-colors"
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* CTA Button */}
        <Link
          href="#contact"
          className="rounded-full bg-[var(--color-shocking-500)] px-5 py-2 font-sora text-sm font-medium text-white shadow-lg hover:bg-purple-400 transition-colors"
        >
          Let’s Talk
        </Link>
      </nav>
    </header>
  );
}
