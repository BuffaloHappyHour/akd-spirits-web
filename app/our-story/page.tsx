import type { Metadata } from "next";
import FounderAvatar from "@/components/FounderAvatar";

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
            part of the last decade, separately and together, immersed in
            whiskey: tasting it, teaching it, selling it, and arguing about it
            over a shared glass. AKD Spirits is what happens when three
            people who built their own platforms for talking about whiskey
            decide to start bottling it themselves.
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
              photo="/images/founders/derek-accurso.png"
              bio="Derek is a certified scotch professional and executive bourbon steward who co-founded Neat Notes, a whiskey intelligence platform and tasting journal. Derek also co-founded Buffalo Happy Hour, a multimedia production company focused on whiskey, education, and video production. Derek prefers dark, fruit-forward finished whiskey, whether that's bourbon or scotch."
            />
            <FounderBio
              initials="MK"
              name="Mike Kelly"
              role="Co-Founder"
              photo="/images/founders/mike-kelly.png"
              bio="Mike is an executive bourbon steward and the other co-founder of both Neat Notes and Buffalo Happy Hour. Throughout the years, Mike has had a passion for the marketing and sales side of whiskey, including the purchasing decisions of consumers. Mike prefers a full-bodied, nutty bourbon at all levels of proof."
            />
            <FounderBio
              initials="TD"
              name="Tony DeYoung"
              role="Co-Founder"
              photo="/images/founders/tony-deyoung.png"
              bio="Tony is a WSET II certified whiskey professional with over 20 years of experience in the industry. Tony has extensive knowledge in brand development and whiskey blending, which has helped a number of the companies he's worked for find success. Tony prefers higher-proof finished whiskey that still holds true to traditional tasting profiles."
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
              AKD Spirits Ltd. is intentionally separate from the platforms
              and ventures each of us built before. Those projects taught us
              how to talk about whiskey and who to talk about it with. This
              company exists to do something different: put our names behind
              bottles we chose ourselves.
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
  photo,
  bio,
}: {
  initials: string;
  name: string;
  role: string;
  photo?: string;
  bio: string;
}) {
  return (
    <div className="grid gap-6 sm:grid-cols-[auto_1fr] sm:gap-10">
      <FounderAvatar initials={initials} name={name} photo={photo} size={56} />
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
