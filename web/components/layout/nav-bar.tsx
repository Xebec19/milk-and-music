"use client";

import Link from "next/link";
import environment from "@/environment";
import { CowIcon, FingerprintIcon, SignInIcon } from "@phosphor-icons/react";

export default function Navbar() {
  return (
    <header className="fixed top-0 w-full z-50 surface-section backdrop-blur-xl">
      <div className="flex items-center justify-between px-6 py-4 w-full max-w-5xl mx-auto">
        <Link href="/" className="flex items-center gap-2">
          <CowIcon size={34} fill="#255b7d" />
          <span className="font-['Plus_Jakarta_Sans'] tracking-tight font-bold text-lg text-primary">
            {environment.SITE_NAME}
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          <Link href="#" className="font-medium text-primary transition-opacity hover:opacity-80">
            Session
          </Link>
          <Link href="#" className="font-medium text-primary transition-opacity hover:opacity-80">
            History
          </Link>
          <Link href="#" className="font-medium text-primary transition-opacity hover:opacity-80">
            Settings
          </Link>
        </nav>
        <div className="w-10 h-10 rounded-full flex items-center justify-center overflow-hidden">
          <SignInIcon size={34} fill="#255b7d" />
        </div>
      </div>
    </header>
  );
}
