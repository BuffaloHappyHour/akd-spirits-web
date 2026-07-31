"use client";

import { useState } from "react";

type FounderAvatarProps = {
  initials: string;
  name: string;
  photo?: string;
  size?: number;
};

export default function FounderAvatar({
  initials,
  name,
  photo,
  size = 56,
}: FounderAvatarProps) {
  const [failed, setFailed] = useState(false);

  if (photo && !failed) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={photo}
        alt={name}
        onError={() => setFailed(true)}
        className="rounded-full border border-gold-dim object-cover"
        style={{ width: size, height: size }}
      />
    );
  }

  return (
    <div
      className="flex items-center justify-center rounded-full border border-gold-dim font-mono text-gold-bright"
      style={{ width: size, height: size, fontSize: size * 0.29 }}
    >
      {initials}
    </div>
  );
}
