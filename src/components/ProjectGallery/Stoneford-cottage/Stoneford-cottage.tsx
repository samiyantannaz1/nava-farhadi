import Image from 'next/image'

interface GalleryImage {
  src: string
  alt: string
  width: number
  height: number
}

interface StonefordCottageProps {
  images: GalleryImage[]
}

export default function StonefordCottage({
  images,
}: StonefordCottageProps) {
  return (
    <section className="px-6 pb-28 pt-24 md:px-10 lg:px-16 lg:pb-40 lg:pt-32">
      <div className="mx-auto w-full max-w-[1400px]">

        {images.map((image, index) => {
          const position = index % 4

          {/* تمام عرض */}
          if (position === 0) {
            return (
              <div
                key={image.src}
                className="mb-10 w-full"
              >
                <GalleryItem image={image} />
              </div>
            )
          }

          {/* شروع سه ستون */}
          if (position === 1) {
            return (
              <div
                key={`row-${index}`}
                className="mb-10 grid grid-cols-1 gap-8 md:grid-cols-3"
              >
                <GalleryItem image={images[index]} />
                <GalleryItem image={images[index + 1]} />
                <GalleryItem image={images[index + 2]} />
              </div>
            )
          }

          return null
        })}

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
        src={image.src}
        alt={image.alt}
        width={image.width}
        height={image.height}
        className="block h-auto w-full"
        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 33vw, 1400px"
      />
    </div>
  )
}