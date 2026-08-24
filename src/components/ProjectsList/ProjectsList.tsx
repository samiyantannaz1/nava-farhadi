import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { projects } from '@/data/projects'

export default function ProjectsList() {
  return (
    <section className="px-8 pb-28 md:px-16 lg:px-[8vw] lg:pb-40">
      <div className="mx-auto max-w-[1300px]">

        {/* Projects List */}
        <div className="border-t border-[#292720]/15">

          {projects.map((project, index) => (
            <ProjectItem
              key={project.id}
              project={project}
              index={index}
            />
          ))}

        </div>

      </div>
    </section>
  )
}

interface ProjectItemProps {
  project: (typeof projects)[number]
  index: number
}

function ProjectItem({
  project,
  index,
}: ProjectItemProps) {
  const itemRef = useRef<HTMLElement | null>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const element = itemRef.current

    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(element)
        }
      },
      {
        threshold: 0.15,
      }
    )

    observer.observe(element)

    return () => observer.disconnect()
  }, [])

  // 01 و 03 ← از چپ
  // 02 و 04 ← از راست
  const isEven = index % 2 === 0

  return (
    <article
      ref={itemRef}
      className={`
        group
        border-b
        border-[#292720]/15
        py-14
        transition-all
        duration-[1000ms]
        ease-[cubic-bezier(0.22,1,0.36,1)]
        md:py-20
        ${
          isVisible
            ? 'translate-x-0 opacity-100'
            : isEven
              ? '-translate-x-20 opacity-0'
              : 'translate-x-20 opacity-0'
        }
      `}
    >

      <Link
        href={`/projects/${project.slug}`}
        className={`
          flex
          flex-col
          gap-8
          md:items-center
          ${
            isEven
              ? 'md:flex-row'
              : 'md:flex-row-reverse'
          }
        `}
      >

        {/* =========================
            IMAGE
        ========================== */}

        <div className="w-full md:w-[42%]">
          <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#DDD7CC]">

            <Image
              src={project.image}
              alt={project.title}
              fill
              sizes="(max-width: 768px) 100vw, 42vw"
              className="
                object-cover
                transition-transform
                duration-700
                ease-out
                group-hover:scale-[1.04]
              "
            />

            {/* Project Number */}
            <span
              className="
                absolute
                left-4
                top-4
                text-[10px]
                uppercase
                tracking-[0.25em]
                text-white
                mix-blend-difference
              "
            >
              {project.number}
            </span>

          </div>
        </div>

        {/* =========================
            PROJECT CONTENT
        ========================== */}

        <div
          className={`
            flex
            w-full
            flex-1
            flex-col
            justify-between
            md:min-h-[260px]
            ${
              isEven
                ? 'md:items-start md:text-left'
                : 'md:items-end md:text-right'
            }
          `}
        >

          <div className="md:max-w-[430px]">

            {/* Number */}

            <span
              className="
                text-[10px]
                uppercase
                tracking-[0.25em]
                text-[#292720]/45
              "
            >
              Project {project.number}
            </span>

            {/* Title */}

            <h2
              className="
                mt-5
                font-serif
                text-4xl
                font-normal
                leading-[0.95]
                tracking-[-0.03em]
                text-[#292720]
                md:text-5xl
                lg:text-6xl
              "
            >
              {project.title}
            </h2>

            {/* Location */}

            <p
              className="
                mt-4
                text-[10px]
                uppercase
                tracking-[0.2em]
                text-[#292720]/50
              "
            >
              {project.location}
            </p>

            {/* Category */}

            <p
              className="
                mt-2
                text-sm
                leading-6
                text-[#292720]/65
              "
            >
              {project.category}
            </p>

          </div>

          {/* =========================
              VIEW PROJECT
          ========================== */}

          <div
            className={`
              mt-10
              flex
              items-center
              gap-3
              text-[10px]
              uppercase
              tracking-[0.2em]
              text-[#292720]
              ${
                isEven
                  ? 'md:self-start'
                  : 'md:self-end'
              }
            `}
          >
            <span>
              View Project
            </span>

            <span
              className="
                text-sm
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

        </div>

      </Link>

    </article>
  )
}