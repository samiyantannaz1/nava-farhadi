import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { roomGallery } from '@/data/roomGallery'

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

  const images = roomGallery.filter(
    (item) => item.category.toLowerCase() === title?.toLowerCase()
  )

  if (!title) {
    return (
      <main className="min-h-screen bg-[#F4F0E8] px-8 pb-32 pt-40">
        <div className="mx-auto max-w-[1300px]">
          <h1 className="font-serif text-5xl text-[#405044]">
            Category not found
          </h1>

          <Link
            href="/projects"
            className="mt-8 inline-block text-sm uppercase tracking-[0.2em] text-[#405044]"
          >
            Back to Projects
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-[#F4F0E8] px-8 pb-32 pt-40 md:px-16 lg:px-[8vw]">
      <div className="mx-auto max-w-[1300px]">

        {/* Header */}
        <div className="mb-20">
          <span className="text-[10px] uppercase tracking-[0.3em] text-[#405044]/50">
            Interior Spaces
          </span>

          <h1 className="mt-5 font-serif text-5xl font-normal text-[#405044] md:text-6xl lg:text-7xl">
            {title}
          </h1>

          <div className="mt-6 h-px w-full bg-[#405044]/15" />
        </div>

        {/* Gallery */}
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 md:grid-cols-2">
          {images.map((image) => (
            <Link
              key={image.id}
              href={`/projects/${image.projectSlug}`}
              className="group"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-[#DDD7CC]">
                <Image
                  src={image.src}
                  alt={`${image.project} ${image.category}`}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              <div className="mt-5 flex items-end justify-between border-b border-[#405044]/15 pb-4">
                <div>
                  <span className="text-[10px] uppercase tracking-[0.25em] text-[#405044]/45">
                    {image.category}
                  </span>

                  <h2 className="mt-2 font-serif text-2xl text-[#405044]">
                    {image.project}
                  </h2>
                </div>

                <span className="text-sm text-[#405044] transition-transform duration-300 group-hover:translate-x-1">
                  ↗
                </span>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </main>
  )
}