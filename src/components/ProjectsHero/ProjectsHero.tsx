'use client'

import { motion } from 'framer-motion'

export default function ProjectsHero() {
  return (
    <section className="overflow-hidden bg-[#F4F0E8] px-6 pb-20 pt-32 md:px-16 md:pb-28 md:pt-40 lg:px-[8vw] lg:pb-36 lg:pt-48">
      <div className="mx-auto max-w-[1300px]">

        <motion.div
          initial={{
            opacity: 0,
            y: 50,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="max-w-[1000px]"
        >

          {/* Eyebrow */}
          <p
            className="
              mb-6
              text-[10px]
              font-medium
              uppercase
              tracking-[0.25em]
              text-[#292720]/50
              md:mb-8
              md:text-xs
            "
          >
            Projects
          </p>

          {/* Heading */}
          <h1
            className="
              font-serif
              text-[40px]
              font-normal
              leading-[0.98]
              tracking-[-0.04em]
              text-[#292720]
              sm:text-5xl
              md:text-6xl
              lg:text-[76px]
            "
          >
            A collection of spaces
            <br />
            shaped with intention.
          </h1>

          {/* Description */}
          <p
            className="
              mt-7
              max-w-[560px]
              text-sm
              leading-7
              text-[#292720]/65
              md:mt-9
              md:text-base
            "
          >
            Residential interiors and architectural projects shaped by light,
            material, proportion, and the way people live.
          </p>

        </motion.div>

      </div>
    </section>
  )
}