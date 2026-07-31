import type { Metadata } from "next";
import LedgerTag from "@/components/LedgerTag";

export const metadata: Metadata = {
  title: "Releases | AKD Spirits",
};

const releases = [
  {
    name: "Release No. 1",
    status: "Coming Soon",
    fields: [
      { label: "Type", value: "Single Barrel" },
      { label: "Mash Bill", value: "TBD" },
      { label: "Proof", value: "TBD" },
      { label: "Barrel No.", value: "AKD-001" },
    ],
    note: "Our first barrel is being tasted and finalized. Details, proof, and release date to follow.",
  },
  {
    name: "Release No. 2",
    status: "In Selection",
    fields: [
      { label: "Type", value: "Small Batch" },
      { label: "Mash Bill", value: "TBD" },
      { label: "Proof", value: "TBD" },
      { label: "Barrels", value: "TBD" },
    ],
    note: "Currently sampling candidate barrels. Nothing here is final until all three of us sign off.",
  },
];

export default function ReleasesPage() {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-6 py-20 sm:px-10 sm:py-28">
        <p className="eyebrow">Releases</p>
        <h1 className="mt-6 max-w-2xl font-display text-4xl leading-tight text-cream sm:text-5xl">
          Every release, logged like it left the rickhouse.
        </h1>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-cream-dim">
          We&rsquo;re a young company &mdash; our first barrels are still
          being selected and tasted. Here&rsquo;s what&rsquo;s in progress.
          Full tasting notes, mash bills, and proof will be added as each
          release is finalized.
        </p>

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          {releases.map((release, i) => (
            <LedgerTag
              key={release.name}
              name={release.name}
              status={release.status}
              fields={release.fields}
              note={release.note}
              rotate={i % 2 === 1}
            />
          ))}
        </div>

        <div className="mt-16 rounded-sm border border-dashed border-line p-8 text-center">
          <p className="font-display text-xl text-cream">
            Want to be notified when Release No. 1 ships?
          </p>
          <p className="mt-2 text-sm text-cream-dim">
            Reach out through the contact page and we&rsquo;ll keep you
            posted.
          </p>
        </div>
      </div>
    </section>
  );
}
