import Link from "next/link";
import LedgerTag from "@/components/LedgerTag";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-line-soft">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(60% 50% at 80% 0%, rgba(184,135,60,0.10) 0%, rgba(184,135,60,0) 60%)",
          }}
        />
        <div className="relative mx-auto max-w-6xl px-6 py-24 sm:px-10 sm:py-32">
          <p className="eyebrow">Non-Distiller Producer &mdash; Est. 2026</p>
          <h1 className="mt-6 max-w-3xl font-display text-5xl leading-[1.08] text-cream sm:text-7xl">
            Three palates.
            <br />
            <span className="italic text-gold-bright">One barrel</span> at a
            time.
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-cream-dim">
            AKD Spirits sources finished whiskey from distilleries we trust,
            tastes it against palates trained over years in the industry, and
            bottles only what earns the name. We don&rsquo;t distill. We
            choose.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-5">
            <Link
              href="/releases"
              className="rounded-sm border border-gold bg-gold px-6 py-3 text-sm font-medium tracking-wide text-bg transition-colors hover:bg-gold-bright hover:border-gold-bright"
            >
              View Releases
            </Link>
            <Link
              href="/our-story"
              className="eyebrow text-cream-dim transition-colors hover:text-gold-bright"
            >
              Read Our Story &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* The Approach */}
      <section className="border-b border-line-soft bg-bg-panel">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:px-10">
          <p className="eyebrow">The Approach</p>
          <h2 className="mt-4 max-w-2xl font-display text-3xl text-cream sm:text-4xl">
            Sourcing is a craft. So is knowing when to leave a barrel alone.
          </h2>

          <div className="mt-14 grid gap-10 sm:grid-cols-3">
            <ApproachItem
              title="Source"
              body="We build relationships with distilleries across the country and evaluate barrels on merit, not marketing. Every barrel we consider is sampled blind before it earns a second look."
            />
            <ApproachItem
              title="Taste"
              body="Three certified, working palates &mdash; sharpened by years of teaching, judging, and selling whiskey &mdash; have to agree before a barrel becomes a release."
            />
            <ApproachItem
              title="Bottle"
              body="No shortcuts, no filler batches. What ships carries our name, our proof, and our word that it was worth pulling the bung."
            />
          </div>
        </div>
      </section>

      {/* Featured release teaser */}
      <section className="border-b border-line-soft">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:px-10">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="eyebrow">From The Rickhouse</p>
              <h2 className="mt-4 font-display text-3xl text-cream sm:text-4xl">
                Our first pull.
              </h2>
            </div>
            <Link
              href="/releases"
              className="eyebrow text-cream-dim transition-colors hover:text-gold-bright"
            >
              All Releases &rarr;
            </Link>
          </div>

          <div className="mt-10">
            <LedgerTag
              name="Release No. 1"
              status="Coming Soon"
              fields={[
                { label: "Type", value: "Single Barrel" },
                { label: "Mash Bill", value: "TBD" },
                { label: "Proof", value: "TBD" },
                { label: "Barrel No.", value: "AKD-001" },
              ]}
              note="Our first barrel is being tasted and finalized. Details, proof, and release date to follow."
            />
          </div>
        </div>
      </section>

      {/* Founders strip */}
      <section className="bg-bg-panel">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:px-10">
          <p className="eyebrow">Who&rsquo;s Behind The Label</p>
          <h2 className="mt-4 max-w-2xl font-display text-3xl text-cream sm:text-4xl">
            Three friends. Three glasses. One standard.
          </h2>

          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            <FounderCard
              initials="DA"
              name="Derek Accurso"
              role="Co-Founder"
            />
            <FounderCard initials="MK" name="Mike Kelly" role="Co-Founder" />
            <FounderCard
              initials="TD"
              name="Tony DeYoung"
              role="Co-Founder, Three Chord Bourbon"
            />
          </div>

          <div className="mt-10">
            <Link
              href="/our-story"
              className="eyebrow text-cream-dim transition-colors hover:text-gold-bright"
            >
              Meet the founders &rarr;
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

function ApproachItem({ title, body }: { title: string; body: string }) {
  return (
    <div>
      <h3 className="font-display text-xl text-gold-bright">{title}</h3>
      <div className="mt-3 h-px w-10 bg-gold-dim" />
      <p className="mt-4 text-sm leading-relaxed text-cream-dim">{body}</p>
    </div>
  );
}

function FounderCard({
  initials,
  name,
  role,
}: {
  initials: string;
  name: string;
  role: string;
}) {
  return (
    <div className="rounded-sm border border-line p-6">
      <div className="flex h-12 w-12 items-center justify-center rounded-full border border-gold-dim font-mono text-sm text-gold-bright">
        {initials}
      </div>
      <p className="mt-5 font-display text-lg text-cream">{name}</p>
      <p className="mt-1 text-sm text-cream-dim">{role}</p>
    </div>
  );
}
