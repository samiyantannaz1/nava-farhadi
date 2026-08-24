import { useEffect, useState } from 'react'
import Link from 'next/link'
import { X, ChevronDown } from 'lucide-react'

import { useOffcanvas } from '../../hooks/useOffcanvas'

export default function OffcanvasMenu() {
  const { isOpen, closeMenu } = useOffcanvas()

  const [projectsOpen, setProjectsOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''

    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <button
          type="button"
          aria-label="Close menu"
          onClick={closeMenu}
          className="
            fixed
            inset-0
            z-[90]
            bg-[#405044]/30
            backdrop-blur-md
            lg:hidden
          "
        />
      )}

      {/* Offcanvas */}
      <aside
        className={`
          fixed
          right-0
          top-0
          z-[100]
          flex
          h-dvh
          w-[82%]
          max-w-[360px]
          flex-col
          overflow-hidden
          bg-[#F4F0E8]/95
          backdrop-blur-xl
          shadow-2xl
          transition-transform
          duration-500
          ease-out
          lg:hidden

          ${isOpen ? 'translate-x-0' : 'translate-x-full'}
        `}
      >
        {/* Header */}
        <div className="flex shrink-0 items-center justify-between border-b border-[#405044]/10 px-7 py-6">
          <Link
            href="/"
            onClick={closeMenu}
            className="font-serif text-xl tracking-[0.06em] text-[#405044]"
          >
            NAVA FARHADI
          </Link>

          <button
            type="button"
            onClick={closeMenu}
            aria-label="Close menu"
            className="
              rounded-full
              p-2
              text-[#405044]
              transition
              hover:bg-[#405044]/10
            "
          >
            <X
              size={22}
              strokeWidth={1.5}
            />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto px-7 py-8">

          <ul>

            {/* Home */}
            <li className="border-b border-[#405044]/10">
              <Link
                href="/"
                onClick={closeMenu}
                className="
                  block
                  py-5
                  font-serif
                  text-2xl
                  text-[#405044]
                "
              >
                Home
              </Link>
            </li>

            {/* Projects */}
            <li className="border-b border-[#405044]/10">

              <div className="flex items-center justify-between">

                <Link
                  href="/projects"
                  onClick={closeMenu}
                  className="
                    flex-1
                    py-5
                    font-serif
                    text-2xl
                    text-[#405044]
                  "
                >
                  Projects
                </Link>

                <button
                  type="button"
                  onClick={() =>
                    setProjectsOpen((prev) => !prev)
                  }
                  aria-label="Toggle project rooms"
                  aria-expanded={projectsOpen}
                  className="
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    text-[#405044]
                  "
                >
                  <ChevronDown
                    size={20}
                    strokeWidth={1.5}
                    className={`
                      transition-transform
                      duration-300
                      ${projectsOpen ? 'rotate-180' : ''}
                    `}
                  />
                </button>

              </div>

              {/* Project rooms */}
              <div
                className={`
                  grid
                  transition-all
                  duration-300
                  ${
                    projectsOpen
                      ? 'grid-rows-[1fr] opacity-100'
                      : 'grid-rows-[0fr] opacity-0'
                  }
                `}
              >
                <div className="overflow-hidden">

                  <div className="pb-5 pl-3">

                    <Link
                      href="/rooms/living-room"
                      onClick={closeMenu}
                      className="
                        block
                        py-3
                        text-sm
                        tracking-[0.08em]
                        text-[#405044]/70
                        transition
                        hover:text-[#405044]
                      "
                    >
                      Living Room
                    </Link>

                    <Link
                      href="/rooms/kitchen"
                      onClick={closeMenu}
                      className="
                        block
                        py-3
                        text-sm
                        tracking-[0.08em]
                        text-[#405044]/70
                        transition
                        hover:text-[#405044]
                      "
                    >
                      Kitchen
                    </Link>

                    <Link
                      href="/rooms/bedroom"
                      onClick={closeMenu}
                      className="
                        block
                        py-3
                        text-sm
                        tracking-[0.08em]
                        text-[#405044]/70
                        transition
                        hover:text-[#405044]
                      "
                    >
                      Bedroom
                    </Link>

                    <Link
                      href="/rooms/bathroom"
                      onClick={closeMenu}
                      className="
                        block
                        py-3
                        text-sm
                        tracking-[0.08em]
                        text-[#405044]/70
                        transition
                        hover:text-[#405044]
                      "
                    >
                      Bathroom
                    </Link>

                    <Link
                      href="/rooms/dining-room"
                      onClick={closeMenu}
                      className="
                        block
                        py-3
                        text-sm
                        tracking-[0.08em]
                        text-[#405044]/70
                        transition
                        hover:text-[#405044]
                      "
                    >
                      Dining Room
                    </Link>

                  </div>

                </div>
              </div>

            </li>

            {/* About */}
            <li className="border-b border-[#405044]/10">
              <Link
                href="/about"
                onClick={closeMenu}
                className="
                  block
                  py-5
                  font-serif
                  text-2xl
                  text-[#405044]
                "
              >
                About
              </Link>
            </li>

            {/* Contact */}
            <li className="border-b border-[#405044]/10">
              <Link
                href="/contact"
                onClick={closeMenu}
                className="
                  block
                  py-5
                  font-serif
                  text-2xl
                  text-[#405044]
                "
              >
                Contact
              </Link>
            </li>

          </ul>

        </nav>

        {/* Bottom */}
        <div className="shrink-0 border-t border-[#405044]/10 px-7 py-6">
          <p className="text-[10px] uppercase tracking-[0.25em] text-[#405044]/50">
            Interior Architecture & Design
          </p>
        </div>

      </aside>
    </>
  )
}