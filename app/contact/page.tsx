import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact | AKD Spirits",
};

export default function ContactPage() {
  return (
    <section>
      <div className="mx-auto grid max-w-6xl gap-16 px-6 py-20 sm:px-10 sm:py-28 lg:grid-cols-[1fr_1.2fr]">
        <div>
          <p className="eyebrow">Contact</p>
          <h1 className="mt-6 font-display text-4xl leading-tight text-cream sm:text-5xl">
            Let&rsquo;s talk whiskey.
          </h1>
          <p className="mt-6 max-w-md text-base leading-relaxed text-cream-dim">
            Retailer, distributor, and press inquiries welcome. If you just
            want to talk about barrels, that&rsquo;s welcome too.
          </p>

          <div className="mt-10 space-y-4 font-mono text-sm text-cream-dim">
            <div>
              <p className="text-[0.65rem] uppercase tracking-[0.12em] text-cream-faint">
                Email
              </p>
              <p className="mt-1 text-cream">contact@akdspirits.com</p>
            </div>
            <div>
              <p className="text-[0.65rem] uppercase tracking-[0.12em] text-cream-faint">
                Based In
              </p>
              <p className="mt-1 text-cream">Buffalo, New York</p>
            </div>
          </div>
        </div>

        <div className="rounded-sm border border-line bg-bg-panel p-8 sm:p-10">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
