import Link from 'next/link'

export default function AboutCTA() {
  return (
    <section className="border-t border-[#292720]/15 px-8 py-28 md:px-16 lg:px-24 lg:py-36">
      <div className="mx-auto max-w-7xl text-center">

        <p className="mb-5 text-xs uppercase tracking-[0.25em] text-[#292720]/60">
          Start a conversation
        </p>

        <h2 className="mx-auto max-w-3xl font-serif text-4xl leading-tight md:text-5xl lg:text-6xl">
          Let&apos;s create something meaningful.
        </h2>

        <p className="mx-auto mt-8 max-w-xl text-sm leading-7 text-[#292720]/70">
          Have a space in mind? Let&apos;s talk about how we can shape it
          into something personal, timeless, and truly yours.
        </p>

        <Link
          href="/contact"
          className="group mt-10 inline-flex items-center gap-4 border-b border-[#292720]/40 pb-2 text-xs uppercase tracking-[0.2em] transition-all duration-300 hover:border-[#292720]"
        >
          Get in touch

          <span className="transition-transform duration-300 group-hover:translate-x-2">
            →
          </span>
        </Link>

      </div>
    </section>
  )
}