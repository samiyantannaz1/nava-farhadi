import Image from 'next/image'

interface GalleryImage {
  src: string
  alt: string
  width: number
  height: number
}

interface WillowCreekProps {
  images: GalleryImage[]
}

export default function WillowCreek({
  images,
}: WillowCreekProps) {
  return (
    <section className="px-6 pb-28 pt-24 md:px-10 lg:px-16 lg:pb-40 lg:pt-32">
      <div className="mx-auto w-full max-w-[1400px]">

        {/* 01 */}
        <GalleryRow>
          <GalleryItem image={images[0]} />
        </GalleryRow>

        {/* 02 */}
        <GalleryRow>
          <GalleryItem image={images[1]} />
        </GalleryRow>

        {/* 03 */}
        <GalleryRow>
          <GalleryItem image={images[2]} />
        </GalleryRow>

        {/* 04 */}
        <GalleryRow>
          <GalleryItem image={images[3]} />
        </GalleryRow>

        {/* 05 */}
        <GalleryRow>
          <GalleryItem image={images[4]} />
        </GalleryRow>

        {/* 06 + 07 */}
        <GalleryRow columns={2}>
          <GalleryItem image={images[5]} />
          <GalleryItem image={images[6]} />
        </GalleryRow>

        {/* 08 + 09 */}
        <GalleryRow columns={2}>
          <GalleryItem image={images[7]} />
          <GalleryItem image={images[8]} />
        </GalleryRow>

        {/* 10 */}
        <GalleryRow>
          <GalleryItem image={images[9]} />
        </GalleryRow>

        {/* 11 */}
        <GalleryRow>
          <GalleryItem image={images[10]} />
        </GalleryRow>

        {/* 12 + 13 */}
        <GalleryRow columns={2}>
          <GalleryItem image={images[11]} />
          <GalleryItem image={images[12]} />
        </GalleryRow>

        {/* 14 */}
        <GalleryRow>
          <GalleryItem image={images[13]} />
        </GalleryRow>

        {/* 15 */}
        <GalleryRow>
          <GalleryItem image={images[14]} />
        </GalleryRow>

        {/* 16 + 17 */}
        <GalleryRow columns={2}>
          <GalleryItem image={images[15]} />
          <GalleryItem image={images[16]} />
        </GalleryRow>

        {/* 18 */}
        <GalleryRow>
          <GalleryItem image={images[17]} />
        </GalleryRow>

        {/* 19 + 20 */}
        <GalleryRow columns={2}>
          <GalleryItem image={images[18]} />
          <GalleryItem image={images[19]} />
        </GalleryRow>

        {/* 21 */}
        <GalleryRow>
          <GalleryItem image={images[20]} />
        </GalleryRow>

        {/* 22 */}
        <GalleryRow>
          <GalleryItem image={images[21]} />
        </GalleryRow>

      </div>
    </section>
  )
}

function GalleryRow({
  children,
  columns = 1,
}: {
  children: React.ReactNode
  columns?: 1 | 2
}) {
  return (
    <div
      className={`mb-10 grid gap-8 ${
        columns === 1
          ? 'grid-cols-1'
          : 'grid-cols-1 md:grid-cols-2'
      }`}
    >
      {children}
    </div>
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
        sizes={
          image.width === 622
            ? '(max-width: 768px) 100vw, 50vw'
            : '(max-width: 768px) 100vw, 100vw'
        }
      />
    </div>
  )
}