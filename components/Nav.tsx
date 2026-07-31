import Link from "next/link";

const links = [
  { href: "/our-story", label: "Our Story" },
  { href: "/releases", label: "Releases" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-line-soft bg-bg/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 sm:px-10">
        <Link href="/" className="group flex items-center gap-3">
          <span
            className="flex h-9 w-9 items-center justify-center rounded-full border border-gold-dim text-[0.65rem] font-mono tracking-[0.15em] text-gold-bright transition-colors group-hover:border-gold-bright"
            aria-hidden
          >
            AKD
          </span>
          <span className="font-display text-lg tracking-wide text-cream">
            AKD Spirits
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden gap-8 sm:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="eyebrow text-cream-dim transition-colors hover:text-gold-bright"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <details className="relative sm:hidden">
          <summary className="eyebrow list-none text-cream-dim [&::-webkit-details-marker]:hidden">
            Menu
          </summary>
          <div className="absolute right-0 mt-3 flex w-44 flex-col gap-3 rounded border border-line bg-bg-panel p-4 shadow-xl">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="eyebrow text-cream-dim transition-colors hover:text-gold-bright"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </details>
      </div>
    </header>
  );
}
