"use client";

import { PlayCircleIcon } from "@phosphor-icons/react";

export default function StartRecording() {
  return (
    <div
      className="rounded-full p-10 shadow-[0_12px_24px_rgba(45,52,50,0.06)] border-primary"
      aria-description="start session"
    >
      <PlayCircleIcon size={34} fill="#255b7d" weight="fill" />
    </div>
  );
}
