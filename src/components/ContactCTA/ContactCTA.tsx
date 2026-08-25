

// 'use client'

// import Link from 'next/link'
// import { motion } from 'framer-motion'

// export default function ContactCTA() {
//   return (
//     <section className="bg-[#F4F0E8] px-6 py-28 md:px-16 md:py-40 lg:px-[8vw]">
//       <div className="mx-auto max-w-[1300px]">

//         <motion.div
//           initial={{
//             opacity: 0,
//             y: 50,
//           }}
//           whileInView={{
//             opacity: 1,
//             y: 0,
//           }}
//           viewport={{
//             once: true,
//             amount: 0.2,
//           }}
//           transition={{
//             duration: 1,
//             ease: [0.22, 1, 0.36, 1],
//           }}
//           className="
//             border-t
//             border-[#292720]/15
//             pt-16
//             md:pt-24
//           "
//         >

//           {/* Eyebrow */}
//           <p
//             className="
//               mb-6
//               text-[10px]
//               font-medium
//               uppercase
//               tracking-[0.25em]
//               text-[#292720]/50
//               md:text-xs
//             "
//           >
//             Work With Us
//           </p>

//           {/* Heading */}
//           <h2
//             className="
//               max-w-[850px]
//               font-serif
//               text-4xl
//               font-normal
//               leading-[1.05]
//               tracking-[-0.04em]
//               text-[#292720]
//               sm:text-5xl
//               md:text-6xl
//               lg:text-7xl
//             "
//           >
//             Let&apos;s create something timeless.
//           </h2>

//           {/* Description */}
//           <p
//             className="
//               mt-7
//               max-w-[600px]
//               text-sm
//               leading-6
//               text-[#292720]/60
//               md:mt-9
//               md:text-base
//               md:leading-7
//             "
//           >
//             Tell us about your space, your vision, and what you&apos;re
//             looking for. We&apos;ll be in touch to explore how we can
//             bring it to life.
//           </p>

//           {/* CTA */}
//           <Link
//             href="/contact"
//             className="
//               group
//               mt-10
//               inline-flex
//               items-center
//               border-b
//               border-[#292720]/60
//               pb-2
//               text-[10px]
//               font-medium
//               uppercase
//               tracking-[0.2em]
//               text-[#292720]
//               transition-opacity
//               duration-300
//               hover:opacity-50
//               md:mt-12
//               md:text-xs
//             "
//           >
//             <span>
//               Start a Project
//             </span>

//             <span
//               className="
//                 ml-4
//                 text-base
//                 leading-none
//                 transition-transform
//                 duration-300
//                 group-hover:-translate-y-1
//                 group-hover:translate-x-1
//               "
//             >
//               ↗
//             </span>
//           </Link>

//         </motion.div>

//       </div>
//     </section>
//   )
// }



'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export default function ContactCTA() {
  return (
    <section className="bg-[#F4F0E8] px-6 py-28 md:px-16 md:py-40 lg:px-[8vw]">
      <div className="mx-auto max-w-[1300px]">

        <motion.div
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
            amount: 0.2,
          }}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            border-t
            border-[#292720]/15
            pt-16
            md:pt-24
          "
        >

          {/* Eyebrow */}
          <p
            className="
              mb-6
              text-[10px]
              font-medium
              uppercase
              tracking-[0.25em]
              text-[#292720]/50
              md:text-xs
            "
          >
            Work With Us
          </p>

          {/* Heading */}
          <h2
            className="
              max-w-[850px]
              font-serif
              text-4xl
              font-normal
              leading-[1.05]
              tracking-[-0.04em]
              text-[#292720]
              sm:text-5xl
              md:text-6xl
              lg:text-7xl
            "
          >
            Let&apos;s create something timeless.
          </h2>

          {/* Description */}
          <p
            className="
              mt-7
              max-w-[600px]
              text-sm
              leading-6
              text-[#292720]/60
              md:mt-9
              md:text-base
              md:leading-7
            "
          >
            Tell us about your space, your vision, and what you&apos;re
            looking for. We&apos;ll be in touch to explore how we can
            bring it to life.
          </p>

          {/* CTA */}
          <Link
            href="/contact"
            className="
              group
              mt-10
              inline-flex
              items-center
              border-b
              border-[#292720]/60
              pb-2
              text-[10px]
              font-medium
              uppercase
              tracking-[0.2em]
              text-[#292720]
              no-underline
              transition-opacity
              duration-300
              hover:opacity-50
              md:mt-12
              md:text-xs
            "
          >
            <span className="text-[#292720]">
              Start a Project
            </span>

            <span
              className="
                ml-4
                text-[#292720]
                text-base
                leading-none
                transition-transform
                duration-300
                group-hover:-translate-y-1
                group-hover:translate-x-1
              "
            >
              ↗
            </span>
          </Link>

        </motion.div>

      </div>
    </section>
  )
}

