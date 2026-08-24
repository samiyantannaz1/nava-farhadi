export default function Philosophy() {
  return (
    <section className="px-8 py-24 md:px-16 lg:px-24 lg:py-32">
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mb-20 max-w-4xl">
          <p className="mb-6 text-xs uppercase tracking-[0.25em] text-neutral-500">
            Our Philosophy
          </p>

          <h2 className="max-w-3xl text-4xl font-light leading-[1.15] tracking-[-0.02em] md:text-5xl lg:text-6xl">
            Spaces should feel personal, not perfect.
          </h2>

          <p className="mt-8 max-w-2xl text-sm leading-7 text-neutral-600 md:text-base">
            We believe meaningful interiors are shaped by the balance between
            architecture, natural light, material, and the people who inhabit
            them.
          </p>

          <p className="mt-5 max-w-2xl text-sm leading-7 text-neutral-600 md:text-base">
            Rather than following trends, we create spaces with character —
            thoughtful, timeless, and deeply connected to the way they are
            lived in.
          </p>
        </div>

        {/* Philosophy Principles */}
        <div className="grid border-t border-neutral-300 md:grid-cols-3">
          
          {/* Light */}
          <div className="border-b border-neutral-300 py-10 md:border-b-0 md:border-r md:pr-10">
            <span className="text-xs tracking-[0.2em] text-neutral-400">
              01
            </span>

            <h3 className="mt-8 text-xl font-light">
              Light
            </h3>

            <p className="mt-5 text-sm leading-7 text-neutral-600">
              Natural light shapes the mood, rhythm, and atmosphere of every
              space.
            </p>
          </div>

          {/* Material */}
          <div className="border-b border-neutral-300 py-10 md:border-b-0 md:px-10 md:border-r">
            <span className="text-xs tracking-[0.2em] text-neutral-400">
              02
            </span>

            <h3 className="mt-8 text-xl font-light">
              Material
            </h3>

            <p className="mt-5 text-sm leading-7 text-neutral-600">
              Refined materials and layered textures bring depth, warmth, and
              character.
            </p>
          </div>

          {/* Timelessness */}
          <div className="py-10 md:pl-10">
            <span className="text-xs tracking-[0.2em] text-neutral-400">
              03
            </span>

            <h3 className="mt-8 text-xl font-light">
              Timelessness
            </h3>

            <p className="mt-5 text-sm leading-7 text-neutral-600">
              Design that moves beyond trends and remains meaningful over time.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}