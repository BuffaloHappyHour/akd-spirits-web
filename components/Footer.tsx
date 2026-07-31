import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-line-soft bg-bg-panel">
      <div className="mx-auto max-w-6xl px-6 py-14 sm:px-10">
        <div className="grid gap-10 sm:grid-cols-3">
          <div>
            <p className="font-display text-xl text-cream">AKD Spirits</p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-cream-dim">
              Non-distiller producer. We select, taste, and bottle single
              barrel and small batch whiskey under our own name.
            </p>
          </div>

          <div>
            <p className="eyebrow mb-3">Navigate</p>
            <ul className="space-y-2 text-sm text-cream-dim">
              <li>
                <Link href="/our-story" className="hover:text-gold-bright">
                  Our Story
                </Link>
              </li>
              <li>
                <Link href="/releases" className="hover:text-gold-bright">
                  Releases
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-gold-bright">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="eyebrow mb-3">Correspondence</p>
            <p className="text-sm text-cream-dim">
              contact@akdspirits.com
            </p>
            <p className="mt-1 text-sm text-cream-dim">
              Buffalo, New York
            </p>
          </div>
        </div>

        <div className="rule-full my-10" />

        <div className="flex flex-col gap-2 text-xs text-cream-faint sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} AKD Spirits Ltd. All rights reserved.</p>
          <p>Please enjoy responsibly. Must be 21+.</p>
        </div>
      </div>
    </footer>
  );
}
