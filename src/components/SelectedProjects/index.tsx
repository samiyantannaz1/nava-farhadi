'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

import { projects } from '../../data/projects'
import { basePath } from '@/utils/basePath'

const SelectedProjects = () => {
  return (
    <section className="overflow-hidden bg-[#F4F0E8] px-6 py-24 md:px-10 lg:px-[5vw] lg:py-32">

      {/* Header */}
      <div className="mb-14 flex flex-col gap-8 md:mb-20 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <span className="mb-5 block text-[10px] uppercase tracking-[0.2em] text-[#292720]/60">
            Selected Projects
          </span>

          <h2 className="font-serif text-5xl font-normal leading-[0.95] tracking-[-0.04em] text-[#292720] md:text-6xl lg:text-7xl">
            Spaces with
            <br />
            character.
          </h2>
        </div>

        <p className="max-w-sm text-sm leading-7 text-[#292720]/65 lg:mb-1">
          A selection of residential and interior projects shaped
          around light, material, and timeless design.
        </p>
      </div>

      {/* Projects */}
      <div className="grid grid-cols-1 gap-x-5 gap-y-14 md:grid-cols-2 lg:grid-cols-4 lg:gap-x-5 lg:gap-y-16">

        {projects.map((project, index) => {

          // 1 و 3 ← از چپ
          // 2 و 4 ← از راست
          const fromLeft = index % 2 === 0

          return (
            <motion.div
              key={project.id}
              initial={{
                opacity: 0,
                x: fromLeft ? -120 : 120,
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
                delay: index * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
            >

              <Link
                href={`/projects/${project.slug}`}
                className="group block"
              >

                {/* =========================
                    Image
                ========================== */}
                <div className="relative aspect-3/4 overflow-hidden bg-[#DDD8CE]">

                  <Image
                    src={`${basePath}${project.image}`}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="
                      object-cover
                      transition-transform
                      duration-700
                      ease-out
                      group-hover:scale-[1.04]
                    "
                  />

                  {/* Dark Glass Overlay */}
                  <div
                    className="
                      absolute
                      inset-0
                      flex
                      items-center
                      justify-center
                      bg-black/0
                      backdrop-blur-0
                      opacity-0
                      transition-all
                      duration-500
                      ease-out
                      group-hover:bg-black/25
                      group-hover:backdrop-blur-[3px]
                      group-hover:opacity-100
                    "
                  >

                    {/* View Project Button */}
                    <div
                      className="
                        translate-y-5
                        border
                        border-white/40
                        bg-white/10
                        px-6
                        py-3
                        text-[10px]
                        uppercase
                        tracking-[0.2em]
                        text-white
                        opacity-0
                        backdrop-blur-md
                        transition-all
                        duration-500
                        ease-out
                        group-hover:translate-y-0
                        group-hover:opacity-100
                      "
                    >
                      View Project
                      <span className="ml-2">↗</span>
                    </div>

                  </div>

                  {/* Number */}
                  <span
                    className="
                      absolute
                      left-4
                      top-4
                      text-[10px]
                      tracking-[0.15em]
                      text-white
                      mix-blend-difference
                    "
                  >
                    {project.number}
                  </span>

                </div>

                {/* =========================
                    Project Info
                ========================== */}
                <div
                  dir="ltr"
                  className="
                    mt-4
                    flex
                    items-start
                    justify-between
                    border-t
                    border-[#292720]/20
                    pt-4
                  "
                >

                  <div className="text-left">

                    <div className="flex items-start gap-3">

                      <h3 className="font-serif text-xl font-normal text-[#292720]">
                        {project.title}
                      </h3>

                      <span
                        className="
                          mt-1
                          shrink-0
                          text-lg
                          leading-none
                          transition-transform
                          duration-300
                          group-hover:-translate-y-1
                          group-hover:translate-x-1
                        "
                      >
                        ↗
                      </span>

                    </div>

                    <p className="mt-2 text-[9px] uppercase leading-4 tracking-wider text-[#292720]/50">
                      {project.category}
                    </p>

                  </div>

                </div>

              </Link>

            </motion.div>
          )
        })}

      </div>

    </section>
  )
}

export default SelectedProjects