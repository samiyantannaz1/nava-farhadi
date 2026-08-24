
export default function OurApproach() {
  const steps = [
    {
      number: '01',
      title: 'Discover',
      description:
        'Understanding the client, the space, and the way it will be lived in.',
    },
    {
      number: '02',
      title: 'Define',
      description:
        'Developing the overall direction, atmosphere, materials, and visual language.',
    },
    {
      number: '03',
      title: 'Refine',
      description:
        'Carefully selecting furniture, finishes, lighting, and details.',
    },
    {
      number: '04',
      title: 'Create',
      description:
        'Bringing every element together into a cohesive and personal space.',
    },
  ]

  return (
    <section className="border-t border-[#292720]/15 px-8 py-24 md:px-16 lg:px-24 lg:py-32">
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mb-16 grid gap-8 md:grid-cols-2 md:items-end">
          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.25em] text-[#292720]/60">
              Our Approach
            </p>

            <h2 className="max-w-xl font-serif text-4xl leading-tight md:text-5xl lg:text-6xl">
              A thoughtful process behind every space.
            </h2>
          </div>

          <p className="max-w-md text-sm leading-7 text-[#292720]/70 md:justify-self-end">
            From understanding the people and the place to refining every
            material and detail, our process is guided by intention,
            balance, and a deep respect for the character of each space.
          </p>
        </div>

        {/* Steps */}
        <div className="grid border-y border-[#292720]/15 md:grid-cols-2 md:border-x">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className={`
                group
                border-[#292720]/15
                px-0 py-10
                md:px-8 md:py-12
                ${index < 2 ? 'border-b' : ''}
                ${index % 2 === 0 ? 'md:border-r' : ''}
              `}
            >
              <div className="mb-8 flex items-center justify-between">
                <span className="text-xs tracking-[0.2em] text-[#292720]/50">
                  {step.number}
                </span>

                <span className="h-px w-10 bg-[#292720]/30 transition-all duration-500 group-hover:w-16" />
              </div>

              <h3 className="mb-4 font-serif text-3xl">
                {step.title}
              </h3>

              <p className="max-w-md text-sm leading-7 text-[#292720]/70">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}