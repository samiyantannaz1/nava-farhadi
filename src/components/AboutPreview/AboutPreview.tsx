import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function AboutPreview() {
  return (
    <section className="overflow-hidden bg-[#F4F0E8] px-8 py-24 md:px-16 md:py-32 lg:px-[12vw] lg:py-40">
      <div className="mx-auto grid max-w-300 items-center gap-16 md:grid-cols-2 md:gap-20 lg:gap-28">

        {/* Image */}
        <motion.div
          initial={{
            opacity: 0,
            x: -100,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative"
        >
          <div className="overflow-hidden">
            <Image
              src="/images/about/nava.webp"
              alt="Nava Farhadi"
              width={700}
              height={900}
              className="h-auto w-full object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{
            opacity: 0,
            x: 100,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 1,
            delay: 0.15,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <span className="text-[10px] uppercase tracking-[0.25em] text-[#292720]/50">
            About the Studio
          </span>

          <h2 className="mt-6 max-w-xl font-serif text-4xl font-normal leading-[1.05] tracking-[-0.04em] md:text-5xl lg:text-6xl">
            Spaces are personal.
            <br />
            They should tell a story.
          </h2>

          <p className="mt-8 max-w-lg text-sm leading-7 text-[#292720]/70 md:text-base">
            NAVA FARHADI is an interior design studio focused on creating
            thoughtful, timeless spaces shaped by character, material, and
            atmosphere.
          </p>

          <p className="mt-5 max-w-lg text-sm leading-7 text-[#292720]/70 md:text-base">
            Every project begins with an understanding of how people live,
            creating interiors that feel personal, refined, and enduring.
          </p>

          <Link
            href="/about"
            className="mt-10 inline-flex items-center border-b border-[#292720]/60 pb-2 text-[10px] uppercase tracking-[0.2em] transition-opacity duration-300 hover:opacity-50"
          >
            Discover More
            <span className="ml-3">→</span>
          </Link>
        </motion.div>

      </div>
    </section>
  )
}
