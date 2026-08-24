

'use client'

import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-[#405044] px-8 py-16 text-[#F4F0E8] md:px-16 md:py-20 lg:px-[8vw]">
    
      <div className="mx-auto max-w-[1300px]">

        {/* Main Footer */}
        <div className="grid gap-16 border-b border-[#F4F0E8]/15 pb-16 md:grid-cols-2 lg:grid-cols-[1.5fr_0.7fr_0.7fr]">

          {/* Brand */}
          <div>
            <Link
              href="/"
              className="font-serif text-3xl tracking-[0.06em]"
            >
              NAVA FARHADI
            </Link>

            <p className="mt-6 max-w-[320px] text-sm leading-7 text-[#F4F0E8]/60">
              Thoughtful interiors shaped around light, material,
              and timeless design.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#F4F0E8]/40">
              Navigation
            </span>

            <nav className="mt-7 flex flex-col items-start gap-4">
              <Link
                href="/"
                className="text-sm transition-opacity duration-300 hover:opacity-50"
              >
                Home
              </Link>

              <Link
                href="/projects"
                className="text-sm transition-opacity duration-300 hover:opacity-50"
              >
                Projects
              </Link>

              <Link
                href="/about"
                className="text-sm transition-opacity duration-300 hover:opacity-50"
              >
                About
              </Link>

              <Link
                href="/contact"
                className="text-sm transition-opacity duration-300 hover:opacity-50"
              >
                Contact
              </Link>
            </nav>
          </div>

          {/* Connect */}
          <div>
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#F4F0E8]/40">
              Connect
            </span>

            <div className="mt-7 flex flex-col items-start gap-4">

              {/* Instagram */}
              <a
                href="#"
                className="group flex items-center gap-2 text-sm transition-opacity duration-300 hover:opacity-50"
              >
                <span>Instagram</span>

                <ArrowUpRight
                  size={13}
                  strokeWidth={1.5}
                  className="
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                    group-hover:-translate-y-1
                  "
                />
              </a>

              {/* LinkedIn */}
            <a
  href="https://www.linkedin.com/in/tannaz-samiyan-69a884395/"
  target="_blank"
  rel="noopener noreferrer"
  className="group flex items-center gap-2 text-sm transition-opacity duration-300 hover:opacity-50"
>
  <span>LinkedIn</span>

  <ArrowUpRight
    size={13}
    strokeWidth={1.5}
    className="
      transition-transform
      duration-300
      group-hover:translate-x-1
      group-hover:-translate-y-1
    "
  />
</a>

              {/* Email */}
       <a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=samiyantannaz1@gmail.com"
  target="_blank"
  rel="noopener noreferrer"
  className="group flex items-center gap-2 text-sm transition-opacity duration-300 hover:opacity-50"
>
  <span>Email</span>

  <ArrowUpRight
    size={13}
    strokeWidth={1.5}
    className="
      transition-transform
      duration-300
      group-hover:translate-x-1
      group-hover:-translate-y-1
    "
  />
</a>
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="flex flex-col gap-5 pt-7 text-[10px] uppercase tracking-[0.2em] text-[#F4F0E8]/40 md:flex-row md:items-center md:justify-between">

          <span>
            © 2026 NAVA FARHADI
          </span>

          <button
            type="button"
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: 'smooth',
              })
            }
            className="
              group
              flex
              items-center
              gap-2
              self-start
              transition-opacity
              duration-300
              hover:opacity-70
              md:self-auto
            "
          >
            <span>Back to top</span>

            <ArrowUpRight
              size={13}
              strokeWidth={1.5}
              className="
                transition-transform
                duration-300
                group-hover:-translate-y-1
              "
            />
          </button>

        </div>

      </div>
    </footer>
  )
}