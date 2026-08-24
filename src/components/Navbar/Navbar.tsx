// import { useEffect, useState } from 'react'
// import Link from 'next/link'
// import Container from '../Container'
// import ProjectSubmenu from './ProjectSubmenu'

// export default function Navbar() {
//   const [scrolled, setScrolled] = useState(false)
//   const [projectsOpen, setProjectsOpen] = useState(false)

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > window.innerHeight - 100)
//     }

//     handleScroll()

//     window.addEventListener('scroll', handleScroll)

//     return () => {
//       window.removeEventListener('scroll', handleScroll)
//     }
//   }, [])

//   return (
//     <header
//       className={`fixed left-0 top-0 z-[100] w-full transition-all duration-500 ${
//         scrolled ? 'bg-[#F4F0E8]' : 'pt-5'
//       }`}
//     >
//       <Container>
//         <div
//           className={`flex h-[68px] items-center justify-between transition-all duration-500 ${
//             scrolled
//               ? 'rounded-none border-none bg-[#F4F0E8] px-0'
//               : 'rounded-full border border-white/30 bg-white/10 px-8 backdrop-blur-xl'
//           }`}
//         >
//           {/* Logo */}
//           <Link
//             href="/"
//             className="font-serif text-2xl font-normal tracking-[0.06em] text-[#405044]"
//           >
//             NAVA FARHADI
//           </Link>

//           {/* Navigation */}
//           <nav className="flex items-center gap-9">
//             <Link
//               href="/"
//               className="text-base font-normal text-[#405044] transition-opacity hover:opacity-60"
//             >
//               Home
//             </Link>

//             {/* Projects */}
//             <div className="relative">
//               <div className="flex items-center gap-2">
//                 <Link
//                   href="/projects"
//                   className="text-base font-normal text-[#405044] transition-opacity hover:opacity-60"
//                 >
//                   Projects
//                 </Link>

//                 <button
//                   type="button"
//                   onClick={() => setProjectsOpen((prev) => !prev)}
//                   aria-label="Toggle project categories"
//                   aria-expanded={projectsOpen}
//                   className="flex h-5 w-5 items-center justify-center text-[#405044]"
//                 >
//                   <span
//                     className={`text-xs transition-transform duration-300 ${
//                       projectsOpen ? 'rotate-180' : ''
//                     }`}
//                   >
//                     ↓
//                   </span>
//                 </button>
//               </div>

//               <ProjectSubmenu
//                 open={projectsOpen}
//                 onClose={() => setProjectsOpen(false)}
//               />
//             </div>

//             {/* About */}
//             <Link
//               href="/about"
//               className="text-base font-normal text-[#405044] transition-opacity hover:opacity-60"
//             >
//               About
//             </Link>

//             {/* Contact */}
//             <Link
//               href="/contact"
//               className="text-base font-normal text-[#405044] transition-opacity hover:opacity-60"
//             >
//               Contact
//             </Link>
//           </nav>
//         </div>
//       </Container>
//     </header>
//   )
// }


import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Menu } from 'lucide-react'

import Container from '../Container'
import ProjectSubmenu from './ProjectSubmenu'
import { useOffcanvas } from '../../hooks/useOffcanvas'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [projectsOpen, setProjectsOpen] = useState(false)

  const { openMenu } = useOffcanvas()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > window.innerHeight - 100)
    }

    handleScroll()

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <header
      className={`fixed left-0 top-0 z-[100] w-full transition-all duration-500 ${
        scrolled ? 'bg-[#F4F0E8]' : 'pt-5'
      }`}
    >
      <Container>
        <div
          className={`flex h-[68px] items-center justify-between transition-all duration-500 ${
            scrolled
              ? 'rounded-none border-none bg-[#F4F0E8] px-0'
              : 'rounded-full border border-white/30 bg-white/10 px-8 backdrop-blur-xl'
          }`}
        >
          {/* Logo */}
          <Link
            href="/"
            className="font-serif text-2xl font-normal tracking-[0.06em] text-[#405044]"
          >
            NAVA FARHADI
          </Link>

          {/* =========================
              DESKTOP NAVIGATION
          ========================= */}
          <nav className="hidden items-center gap-9 lg:flex">

            {/* Home */}
            <Link
              href="/"
              className="text-base font-normal text-[#405044] transition-opacity hover:opacity-60"
            >
              Home
            </Link>

            {/* Projects */}
            <div className="relative">
              <div className="flex items-center gap-2">
                <Link
                  href="/projects"
                  className="text-base font-normal text-[#405044] transition-opacity hover:opacity-60"
                >
                  Projects
                </Link>

                <button
                  type="button"
                  onClick={() =>
                    setProjectsOpen((prev) => !prev)
                  }
                  aria-label="Toggle project categories"
                  aria-expanded={projectsOpen}
                  className="flex h-5 w-5 items-center justify-center text-[#405044]"
                >
                  <span
                    className={`text-xs transition-transform duration-300 ${
                      projectsOpen ? 'rotate-180' : ''
                    }`}
                  >
                    ↓
                  </span>
                </button>
              </div>

              <ProjectSubmenu
                open={projectsOpen}
                onClose={() => setProjectsOpen(false)}
              />
            </div>

            {/* About */}
            <Link
              href="/about"
              className="text-base font-normal text-[#405044] transition-opacity hover:opacity-60"
            >
              About
            </Link>

            {/* Contact */}
            <Link
              href="/contact"
              className="text-base font-normal text-[#405044] transition-opacity hover:opacity-60"
            >
              Contact
            </Link>
          </nav>

          {/* =========================
              MOBILE MENU BUTTON
          ========================= */}
          <button
            type="button"
            onClick={openMenu}
            aria-label="Open menu"
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-full
              text-[#405044]
              transition
              hover:bg-[#405044]/10
              lg:hidden
            "
          >
            <Menu
              size={24}
              strokeWidth={1.5}
            />
          </button>
        </div>
      </Container>
    </header>
  )
}