

import Image from 'next/image'
import type { ReactNode } from 'react'

interface GalleryImage {
  src: string
  alt: string
  width: number
  height: number
}

interface ProjectGalleryProps {
  images: GalleryImage[]
}

interface GalleryItemProps {
  image?: GalleryImage
}

export default function ProjectGallery({
  images,
}: ProjectGalleryProps) {
  const image01 = images[0]
  const image02 = images[1]

  const image03 = images[2]
  const image04 = images[3]

  const image05 = images[4]
  const image06 = images[5]

  const image07 = images[6]
  const image08 = images[7]
  const image09 = images[8]
  const image10 = images[9]

  const image12 = images[11]
  const image13 = images[12]
  const image14 = images[13]

  const image15 = images[14]
  const image16 = images[15]
  const image17 = images[16]
  const image18 = images[17]

  const image19 = images[18]
  const image20 = images[19]
  const image21 = images[20]
  const image22 = images[21]
  const image23 = images[22]

  return (
    <section
      className="
        px-5
        pb-24
        pt-16
        sm:px-8
        sm:pb-28
        sm:pt-20
        md:px-20
        md:pt-24
        lg:px-32
        lg:pb-40
        lg:pt-32
        xl:px-40
      "
    >
      <div className="mx-auto w-full max-w-212.5">

        {/* 01 + 02 */}
        <GalleryRow>
          <GalleryItem image={image01} />
          <GalleryItem image={image02} />
        </GalleryRow>

        {/* 03 + 04 */}
        <GalleryRow>
          <GalleryItem image={image03} />
          <GalleryItem image={image04} />
        </GalleryRow>

        {/* 05 + 06 */}
        <GalleryRow>
          <GalleryItem image={image05} />
          <GalleryItem image={image06} />
        </GalleryRow>

        {/* 07 + 14 | 08 + 09 */}
        <div
          className="
            mb-10
            grid
            grid-cols-1
            gap-10
            md:mb-12
            md:grid-cols-2
            md:gap-8
          "
        >
          <div className="flex flex-col gap-10 md:gap-14">
            <GalleryItem image={image07} />
            <GalleryItem image={image14} />
          </div>

          <div className="flex flex-col gap-10 md:gap-8">
            <GalleryItem image={image08} />
            <GalleryItem image={image09} />
          </div>
        </div>

        {/* 12 + (18 / 13) */}
        <div className="mb-10 md:mb-12">

          {/* Desktop */}
          <div className="hidden md:grid md:grid-cols-2 md:gap-8">

            <GalleryItem image={image12} />

            <div className="flex flex-col gap-8">

              {/* Image 18 */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={image18.src}
                alt={image18.alt}
                width={image18.width}
                height={image18.height}
                className="block h-auto w-full"
              />

              <GalleryItem image={image13} />

            </div>
          </div>

          {/* Mobile */}
          <div className="flex flex-col gap-10 md:hidden">

            <GalleryItem image={image12} />

            {/* Image 18 */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={image18.src}
              alt={image18.alt}
              width={image18.width}
              height={image18.height}
              className="block h-auto w-full"
            />

            <GalleryItem image={image13} />

          </div>

        </div>

        {/* 17 + 22 | 15 */}
        <div
          className="
            mb-10
            grid
            grid-cols-1
            gap-10
            md:mb-12
            md:grid-cols-2
            md:gap-8
          "
        >
          <div className="flex flex-col gap-10 md:gap-8">
            <GalleryItem image={image17} />
            <GalleryItem image={image22} />
          </div>

          <GalleryItem image={image15} />
        </div>

        {/* 16 + 10 */}
        <GalleryRow>
          <GalleryItem image={image16} />
          <GalleryItem image={image10} />
        </GalleryRow>

        {/* 20 + 21 */}
        <GalleryRow>
          <GalleryItem image={image20} />
          <GalleryItem image={image21} />
        </GalleryRow>

        {/* 23 + 19 */}
        <GalleryRow>
          <GalleryItem image={image23} />
          <GalleryItem image={image19} />
        </GalleryRow>

      </div>
    </section>
  )
}

/* =========================
   Gallery Row
========================= */

function GalleryRow({
  children,
}: {
  children: ReactNode
}) {
  return (
    <div
      className="
        mb-10
        grid
        grid-cols-1
        gap-10
        md:mb-12
        md:grid-cols-2
        md:gap-8
      "
    >
      {children}
    </div>
  )
}

/* =========================
   Gallery Item
========================= */

function GalleryItem({
  image,
}: GalleryItemProps) {
  if (!image) {
    return null
  }

  return (
    <div className="w-full overflow-hidden">
      <Image
        src={image.src}
        alt={image.alt}
        width={image.width}
        height={image.height}
        className="block h-auto w-full"
        sizes="
          (max-width: 767px) 100vw,
          (max-width: 1279px) 42vw,
          410px
        "
      />
    </div>
  )
}