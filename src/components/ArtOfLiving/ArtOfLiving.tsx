import Image from "next/image";

export default function ArtOfLiving() {
  return (
    <section className="px-8 py-24 md:px-16 lg:px-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2 lg:gap-20">

        {/* Image */}
        <div className="relative aspect-[4/5] overflow-hidden">
          <Image
            src="/images/about/art-of-living-new.webp"
            alt="NAVA FARHADI interior design"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

        {/* Content */}
        <div className="max-w-xl">
          <p className="mb-6 text-xs uppercase tracking-[0.25em] text-neutral-500">
            The Art of Living
          </p>

          <h2 className="text-4xl font-light leading-[1.15] tracking-[-0.02em] md:text-5xl lg:text-6xl">
            Designing spaces that feel like home.
          </h2>

          <div className="mt-8 space-y-5 text-sm leading-7 text-neutral-600 md:text-base">
            <p>
              We believe a beautiful interior is more than a collection of
              beautiful objects. It is a reflection of the people who live
              there.
            </p>

            <p>
              Our approach brings together architectural sensitivity, refined
              materials, thoughtful furniture selections, and carefully
              considered details to create spaces that feel natural, elegant,
              and truly lived in.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
