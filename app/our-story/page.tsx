import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Story | AKD Spirits",
};

export default function OurStoryPage() {
  return (
    <>
      <section className="border-b border-line-soft">
        <div className="mx-auto max-w-4xl px-6 py-20 sm:px-10 sm:py-28">
          <p className="eyebrow">Our Story</p>
          <h1 className="mt-6 font-display text-4xl leading-tight text-cream sm:text-5xl">
            We didn&rsquo;t set out to build a whiskey brand. We set out to
            share what we already loved.
          </h1>
          <p className="mt-8 text-lg leading-relaxed text-cream-dim">
            Derek Accurso, Mike Kelly, and Tony DeYoung have spent the better
            part of the last decade &mdash; separately and together &mdash;
            immersed in whiskey: tasting it, teaching it, selling it, and
            arguing about it over a shared glass. AKD Spirits is what happens
            when three people who built their own platforms for talking about
            whiskey decide to start bottling it themselves.
          </p>
        </div>
      </section>

      {/* Founder bios */}
      <section className="border-b border-line-soft bg-bg-panel">
        <div className="mx-auto max-w-4xl px-6 py-20 sm:px-10">
          <p className="eyebrow">The Founders</p>
          <div className="mt-10 space-y-16">
            <FounderBio
              initials="DA"
              name="Derek Accurso"
              role="Co-Founder"
              bio="Derek is a certified whiskey professional who has spent years building Neat Notes, a home for tasting notes and whiskey education, alongside hosting conversations with the whiskey community through Buffalo Happy Hour. His palate is built on structure &mdash; he wants a whiskey that can explain itself, pour after pour."
            />
            <FounderBio
              initials="MK"
              name="Mike Kelly"
              role="Co-Founder"
              bio="Mike co-built Buffalo Happy Hour and Neat Notes with Derek, and has spent that same stretch of years behind the bar, behind the mic, and behind the tasting table. He's the one who insists a whiskey earn its price before it earns a name."
            />
            <FounderBio
              initials="TD"
              name="Tony DeYoung"
              role="Co-Founder, Three Chord Bourbon"
              bio="Tony brings Three Chord Bourbon's ear for a well-composed pour &mdash; someone who has spent years sourcing, blending, and talking about whiskey with the same discipline he'd bring to a set list. He's the tie-breaker when Derek and Mike can't agree on a barrel."
            />
          </div>
        </div>
      </section>

      {/* Why AKD */}
      <section>
        <div className="mx-auto max-w-4xl px-6 py-20 sm:px-10">
          <p className="eyebrow">Why AKD</p>
          <h2 className="mt-4 font-display text-3xl text-cream sm:text-4xl">
            A name built from three, standing on its own.
          </h2>
          <div className="mt-8 space-y-6 text-base leading-relaxed text-cream-dim">
            <p>
              AKD Spirits Ltd. is intentionally separate from Buffalo Happy
              Hour, Neat Notes, and Three Chord Bourbon. Those platforms
              taught us how to talk about whiskey and who to talk about it
              with. This company exists to do something different: put our
              names behind bottles we chose ourselves.
            </p>
            <p>
              As a non-distiller producer, we don&rsquo;t operate a still.
              Instead, we search out barrels and small runs from distilleries
              we respect, evaluate them against our own standards, and bottle
              only the ones that make it past all three of us. It&rsquo;s a
              slower way to build a whiskey company. We think it&rsquo;s the
              right one.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

function FounderBio({
  initials,
  name,
  role,
  bio,
}: {
  initials: string;
  name: string;
  role: string;
  bio: string;
}) {
  return (
    <div className="grid gap-6 sm:grid-cols-[auto_1fr] sm:gap-10">
      <div className="flex h-14 w-14 items-center justify-center rounded-full border border-gold-dim font-mono text-base text-gold-bright">
        {initials}
      </div>
      <div>
        <p className="font-display text-2xl text-cream">{name}</p>
        <p className="eyebrow mt-1">{role}</p>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-cream-dim">
          {bio}
        </p>
      </div>
    </div>
  );
}
