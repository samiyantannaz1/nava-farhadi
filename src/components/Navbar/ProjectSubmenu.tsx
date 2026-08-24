import Link from 'next/link'

interface ProjectSubmenuProps {
  open: boolean
  onClose: () => void
}

const roomCategories = [
  {
    title: 'Living Room',
    slug: 'living-room',
  },
  {
    title: 'Kitchen',
    slug: 'kitchen',
  },
  {
    title: 'Dining Room',
    slug: 'dining-room',
  },
  {
    title: 'Bedroom',
    slug: 'bedroom',
  },
  {
    title: 'Bathroom',
    slug: 'bathroom',
  },
]

export default function ProjectSubmenu({
  open,
  onClose,
}: ProjectSubmenuProps) {
  return (
    <div
      className={`absolute left-1/2 top-full mt-5 w-48 -translate-x-1/2 transition-all duration-300 ${
        open
          ? 'pointer-events-auto translate-y-0 opacity-100'
          : 'pointer-events-none -translate-y-2 opacity-0'
      }`}
    >
     <div className="border border-[#405044]/10 bg-[#F4F0E8]/90 p-3 shadow-[0_12px_40px_rgba(40,45,38,0.08)] backdrop-blur-xl">
        <nav className="flex flex-col">
          {roomCategories.map((room) => (
            <Link
              key={room.slug}
              href={`/rooms/${room.slug}`}
              onClick={onClose}
              className="group flex items-center justify-between px-4 py-3 text-sm text-[#405044] transition-all duration-300 hover:bg-white/20"
            >
              <span>{room.title}</span>

              <span className="translate-x-[-4px] opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                ↗
              </span>
            </Link>
          ))}
        </nav>
      </div>
    </div>
  )
}