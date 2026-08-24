import Image from 'next/image'
import { basePath } from '@/utils/basePath'

interface GalleryImage {
  src: string
  alt: string
  width: number
  height: number
}

interface OxfordRoadEstateProps {
  images: GalleryImage[]
}

export default function OxfordRoadEstate({
  images,
}: OxfordRoadEstateProps) {
  return (
    <section className="px-6 pb-28 pt-24 md:px-10 lg:px-16 lg:pb-40 lg:pt-32">
      <div className="mx-auto w-full max-w-[1400px]">

        {/* 01 — 1 image */}
        <div className="mb-10 w-full">
          <GalleryItem image={images[0]} />
        </div>

        {/* 02 — 1 image */}
        <div className="mb-10 w-full">
          <GalleryItem image={images[1]} />
        </div>

        {/* 03 — 1 image */}
        <div className="mb-10 w-full">
          <GalleryItem image={images[2]} />
        </div>

        {/* 04 + 05 — 2 images */}
        <div
          dir="rtl"
          className="mb-10 grid grid-cols-1 gap-8 md:grid-cols-2"
        >
          <GalleryItem image={images[3]} />
          <GalleryItem image={images[4]} />
        </div>

        {/* 06 + 07 — 2 images */}
        <div
          dir="rtl"
          className="mb-10 grid grid-cols-1 gap-8 md:grid-cols-2"
        >
          <GalleryItem image={images[5]} />
          <GalleryItem image={images[6]} />
        </div>

        {/* 08 — 1 image */}
        <div className="mb-10 w-full">
          <GalleryItem image={images[7]} />
        </div>

        {/* 09 + 10 + 11 — 3 images */}
        <div
          dir="rtl"
          className="mb-10 grid grid-cols-1 gap-8 md:grid-cols-3"
        >
          <GalleryItem image={images[8]} />
          <GalleryItem image={images[9]} />
          <GalleryItem image={images[10]} />
        </div>

        {/* 12 — 1 image */}
        <div className="mb-10 w-full">
          <GalleryItem image={images[11]} />
        </div>

        {/* 13 + 14 — 2 images */}
        <div
          dir="rtl"
          className="mb-10 grid grid-cols-1 gap-8 md:grid-cols-2"
        >
          <GalleryItem image={images[12]} />
          <GalleryItem image={images[13]} />
        </div>

        {/* 15 — 1 image */}
        <div className="mb-10 w-full">
          <GalleryItem image={images[14]} />
        </div>

        {/* 16 + 17 — 2 images */}
        <div
          dir="rtl"
          className="mb-10 grid grid-cols-1 gap-8 md:grid-cols-2"
        >
          <GalleryItem image={images[15]} />
          <GalleryItem image={images[16]} />
        </div>

        {/* 18 + 19 — 2 images */}
        <div
          dir="rtl"
          className="mb-10 grid grid-cols-1 gap-8 md:grid-cols-2"
        >
          <GalleryItem image={images[17]} />
          <GalleryItem image={images[18]} />
        </div>

        {/* 20 — 1 image */}
        <div className="mb-10 w-full">
          <GalleryItem image={images[19]} />
        </div>

        {/* 21 — 1 image */}
        <div className="mb-10 w-full">
          <GalleryItem image={images[20]} />
        </div>

        {/* 22 + 23 — 2 images */}
        <div
          dir="rtl"
          className="mb-10 grid grid-cols-1 gap-8 md:grid-cols-2"
        >
          <GalleryItem image={images[21]} />
          <GalleryItem image={images[22]} />
        </div>

        {/* 24 — 1 image */}
        <div className="mb-10 w-full">
          <GalleryItem image={images[23]} />
        </div>

        {/* 25 + 26 — 2 images */}
        <div
          dir="rtl"
          className="mb-10 grid grid-cols-1 gap-8 md:grid-cols-2"
        >
          <GalleryItem image={images[24]} />
          <GalleryItem image={images[25]} />
        </div>

        {/* 27 + 28 — 2 images */}
        <div
          dir="rtl"
          className="mb-10 grid grid-cols-1 gap-8 md:grid-cols-2"
        >
          <GalleryItem image={images[26]} />
          <GalleryItem image={images[27]} />
        </div>

        {/* 29 — 1 image */}
        <div className="mb-10 w-full">
          <GalleryItem image={images[28]} />
        </div>

        {/* 30 — 1 image */}
        <div className="mb-10 w-full">
          <GalleryItem image={images[29]} />
        </div>

        {/* 31 — 1 image */}
        <div className="mb-10 w-full">
          <GalleryItem image={images[30]} />
        </div>

        {/* 32 — 1 image */}
        <div className="mb-10 w-full">
          <GalleryItem image={images[31]} />
        </div>

        {/* 33 + 34 — 2 images */}
        <div
          dir="rtl"
          className="mb-10 grid grid-cols-1 gap-8 md:grid-cols-2"
        >
          <GalleryItem image={images[32]} />
          <GalleryItem image={images[33]} />
        </div>

        {/* 35 + 36 — 2 images */}
        <div
          dir="rtl"
          className="mb-10 grid grid-cols-1 gap-8 md:grid-cols-2"
        >
          <GalleryItem image={images[34]} />
          <GalleryItem image={images[35]} />
        </div>

      </div>
    </section>
  )
}

function GalleryItem({
  image,
}: {
  image?: GalleryImage
}) {
  if (!image) {
    return null
  }

  return (
    <div className="w-full overflow-hidden">
      <Image
        src={`${basePath}${image.src}`}
        alt={image.alt}
        width={image.width}
        height={image.height}
        className="block h-auto w-full"
        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 1400px"
      />
    </div>
  )
}