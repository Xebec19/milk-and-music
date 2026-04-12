"use client";

import Link from "next/link";
import environment from "@/environment";
import { CowIcon, FingerprintIcon } from "@phosphor-icons/react";

export default function Navbar() {
  return (
    <nav className="surface-section p-6 flex justify-between">
      <Link href={"/"}>
        <span className="space-x-2 flex items-center">
          <CowIcon size={32} fill={"#172522"} />
          <span className="text-foreground">{environment.SITE_NAME}</span>
        </span>
      </Link>

      <FingerprintIcon size={32} fill={"#172522"} />
    </nav>
  );
}
