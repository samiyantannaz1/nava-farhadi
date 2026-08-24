import Image from 'next/image'

export default function AboutIntro() {
  return (
    <section className="px-8 py-24 md:px-16 md:py-32 lg:px-[10vw] lg:py-40">
      <div className="mx-auto grid max-w-[1200px] gap-16 md:grid-cols-2 md:items-center lg:gap-24">

        {/* Image */}
        <div className="relative aspect-[4/5] overflow-hidden">
          <Image
            src="/images/about/nava-about.webp"
            alt="NAVA FARHADI interior design"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

        {/* Content */}
        <div>
          <span className="text-[10px] uppercase tracking-[0.25em] text-[#292720]/50">
            About NAVA
          </span>

          <h2 className="mt-6 max-w-xl font-serif text-4xl font-normal leading-[1] tracking-[-0.04em] md:text-5xl lg:text-6xl">
            Designing spaces
            <br />
            with intention.
          </h2>

          <div className="mt-8 max-w-xl space-y-5 text-sm leading-7 text-[#292720]/70 md:text-base">
            <p>
              NAVA FARHADI is an architecture and interior design studio
              focused on creating thoughtful, timeless spaces shaped by
              light, material, and the way people live.
            </p>

            <p>
              Our approach brings together architectural clarity, refined
              materials, and carefully considered details to create interiors
              that feel both contemporary and deeply personal.
            </p>

            <p>
              We believe the most meaningful spaces are not defined by
              trends. They are shaped by proportion, atmosphere,
              craftsmanship, and the stories of the people who inhabit them.
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}
