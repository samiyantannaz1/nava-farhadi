'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { motion } from 'framer-motion'
import { roomGallery } from '@/data/roomGallery'
import { basePath } from '@/utils/basePath'

const categoryTitles: Record<string, string> = {
  'living-room': 'Living Room',
  kitchen: 'Kitchen',
  'dining-room': 'Dining Room',
  bedroom: 'Bedroom',
  bathroom: 'Bathroom',
}

export default function RoomCategoryPage() {
  const router = useRouter()
  const { category } = router.query

  if (typeof category !== 'string') {
    return null
  }

  const title = categoryTitles[category]

  if (!title) {
    return (
      <main className="min-h-screen bg-[#F4F0E8] px-6 pb-32 pt-40 md:px-16 lg:px-[8vw]">
        <div className="mx-auto max-w-[1300px]">
          <h1 className="font-serif text-5xl text-[#292720]">
            Category not found
          </h1>

          <Link
            href="/projects"
            className="mt-8 inline-flex items-center gap-3 border-b border-[#292720]/40 pb-2 text-[10px] uppercase tracking-[0.2em] text-[#292720]"
          >
            Back to Projects
            <span>↗</span>
          </Link>
        </div>
      </main>
    )
  }

  const images = roomGallery.filter(
    (item) =>
      item.category.toLowerCase() === title.toLowerCase()
  )

  return (
    <main className="min-h-screen overflow-hidden bg-[#F4F0E8] px-6 pb-32 pt-32 md:px-16 md:pb-36 md:pt-40 lg:px-[8vw] lg:pb-40 lg:pt-48">
      <div className="mx-auto max-w-[1300px]">

        {/* Header */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mb-16 md:mb-20"
        >
          <span className="text-[10px] uppercase tracking-[0.3em] text-[#292720]/50">
            Interior Spaces
          </span>

          <h1 className="mt-5 font-serif text-5xl font-normal leading-[0.95] tracking-[-0.04em] text-[#292720] md:text-6xl lg:text-7xl">
            {title}
          </h1>

          <div className="mt-8 h-px w-full bg-[#292720]/15" />
        </motion.div>

        {/* Gallery */}

        <div className="grid grid-cols-1 gap-x-8 gap-y-16 md:grid-cols-2">

          {images.map((image, index) => {

            const imageSrc = image.src.startsWith('/')
              ? `${basePath}${image.src}`
              : `${basePath}/${image.src}`

            return (
              <motion.div
                key={image.id}
                initial={{
                  opacity: 0,
                  y: 50,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.15,
                }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >

                <Link
                  href={`/projects/${image.projectSlug}`}
                  className="group block"
                >

                  {/* Image */}

                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#DDD7CC]">

                    <Image
                      src={imageSrc}
                      alt={`${image.project} ${image.category}`}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="
                        object-cover
                        transition-transform
                        duration-700
                        ease-out
                        group-hover:scale-[1.04]
                      "
                    />

                  </div>

                  {/* Info */}

                  <div className="mt-5 flex items-end justify-between border-b border-[#292720]/15 pb-4">

                    <div>

                      <span className="text-[10px] uppercase tracking-[0.25em] text-[#292720]/45">
                        {image.category}
                      </span>

                      <h2 className="mt-2 font-serif text-2xl font-normal tracking-[-0.02em] text-[#292720] md:text-3xl">
                        {image.project}
                      </h2>

                    </div>

                    <span className="mb-1 text-sm leading-none text-[#292720] transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1">
                      ↗
                    </span>

                  </div>

                </Link>

              </motion.div>
            )
          })}

        </div>

      </div>
    </main>
  )
}