// 'use client'

// import Image from 'next/image'
// import Link from 'next/link'
// import { motion } from 'framer-motion'

// import { projects } from '@/data/projects'
// import { getImagePath } from '@/utils/getImagePath'

// export default function ProjectsList() {
//   return (
//     <section className="overflow-hidden bg-[#F4F0E8] px-6 pb-28 md:px-16 md:pb-36 lg:px-[8vw] lg:pb-40">
//       <div className="mx-auto max-w-[1300px]">

//         {/* Projects List */}
//         <div className="border-t border-[#292720]/15">

//           {projects.map((project, index) => {
//             const fromLeft = index % 2 === 0

//             return (
//               <motion.article
//                 key={project.id}
//                 initial={{
//                   opacity: 0,
//                   x: fromLeft ? -100 : 100,
//                 }}
//                 whileInView={{
//                   opacity: 1,
//                   x: 0,
//                 }}
//                 viewport={{
//                   once: true,
//                   amount: 0.15,
//                 }}
//                 transition={{
//                   duration: 1,
//                   delay: 0.05,
//                   ease: [0.22, 1, 0.36, 1],
//                 }}
//                 className="group border-b border-[#292720]/15 py-14 md:py-20 lg:py-24"
//               >

//                 <Link
//                   href={`/projects/${project.slug}`}
//                   className={`
//                     flex
//                     flex-col
//                     gap-8
//                     md:items-center
//                     md:gap-12
//                     lg:gap-20
//                     ${
//                       fromLeft
//                         ? 'md:flex-row'
//                         : 'md:flex-row-reverse'
//                     }
//                   `}
//                 >

//                   {/* =========================
//                       IMAGE
//                   ========================= */}

//                   <div className="w-full md:w-[44%]">

//                     <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#DDD7CC]">

//                       <Image
//                         src={getImagePath(project.image)}
//                         alt={project.title}
//                         fill
//                         sizes="(max-width: 768px) 100vw, 44vw"
//                         className="
//                           object-cover
//                           transition-transform
//                           duration-700
//                           ease-out
//                           group-hover:scale-[1.04]
//                         "
//                       />

//                       {/* Project Number */}
//                       <span
//                         className="
//                           absolute
//                           left-4
//                           top-4
//                           text-[10px]
//                           uppercase
//                           tracking-[0.25em]
//                           text-white
//                           mix-blend-difference
//                         "
//                       >
//                         {project.number}
//                       </span>

//                     </div>

//                   </div>

//                   {/* =========================
//                       PROJECT CONTENT
//                   ========================= */}

//                   <div
//                     className={`
//                       flex
//                       w-full
//                       flex-1
//                       flex-col
//                       justify-between
//                       md:min-h-[280px]
//                       ${
//                         fromLeft
//                           ? 'md:items-start md:text-left'
//                           : 'md:items-end md:text-right'
//                       }
//                     `}
//                   >

//                     <div className="md:max-w-[440px]">

//                       {/* Project Number */}

//                       <span
//                         className="
//                           text-[10px]
//                           uppercase
//                           tracking-[0.25em]
//                           text-[#292720]/45
//                         "
//                       >
//                         Project {project.number}
//                       </span>

//                       {/* Title */}

//                       <h2
//                         className="
//                           mt-5
//                           font-serif
//                           text-[38px]
//                           font-normal
//                           leading-[0.95]
//                           tracking-[-0.04em]
//                           text-[#292720]
//                           sm:text-4xl
//                           md:text-5xl
//                           lg:text-6xl
//                         "
//                       >
//                         {project.title}
//                       </h2>

//                       {/* Location */}

//                       <p
//                         className="
//                           mt-5
//                           text-[10px]
//                           uppercase
//                           tracking-[0.2em]
//                           text-[#292720]/50
//                         "
//                       >
//                         {project.location}
//                       </p>

//                       {/* Category */}

//                       <p
//                         className="
//                           mt-2
//                           text-sm
//                           leading-7
//                           text-[#292720]/65
//                           md:text-base
//                         "
//                       >
//                         {project.category}
//                       </p>

//                     </div>

//                     {/* =========================
//                         VIEW PROJECT
//                     ========================= */}

//                     <div
//                       className={`
//                         mt-10
//                         flex
//                         items-center
//                         gap-3
//                         border-b
//                         border-[#292720]/40
//                         pb-2
//                         text-[10px]
//                         font-medium
//                         uppercase
//                         tracking-[0.2em]
//                         text-[#292720]
//                         transition-opacity
//                         duration-300
//                         group-hover:opacity-50
//                         ${
//                           fromLeft
//                             ? 'md:self-start'
//                             : 'md:self-end'
//                         }
//                       `}
//                     >

//                       <span>
//                         View Project
//                       </span>

//                       <span
//                         className="
//                           text-sm
//                           leading-none
//                           transition-transform
//                           duration-300
//                           group-hover:-translate-y-1
//                           group-hover:translate-x-1
//                         "
//                       >
//                         ↗
//                       </span>

//                     </div>

//                   </div>

//                 </Link>

//               </motion.article>
//             )
//           })}

//         </div>

//       </div>
//     </section>
//   )
// }



'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

import { projects } from '@/data/projects'
import { getImagePath } from '@/utils/getImagePath'

export default function ProjectsList() {
  return (
    <section className="overflow-hidden bg-[#F4F0E8] px-6 pb-28 md:px-16 md:pb-36 lg:px-[8vw] lg:pb-40">
      <div className="mx-auto max-w-[1300px]">

        {/* Projects List */}
        <div className="border-t border-[#292720]/15">

          {projects.map((project, index) => {
            const fromLeft = index % 2 === 0

            return (
              <motion.article
                key={project.id}
                initial={{
                  opacity: 0,
                  x: fromLeft ? -100 : 100,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.15,
                }}
                transition={{
                  duration: 1,
                  delay: 0.05,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group border-b border-[#292720]/15 py-14 md:py-20 lg:py-24"
              >

                <Link
                  href={`/projects/${project.slug}`}
                  className={`
                    flex
                    flex-col
                    gap-8
                    text-[#292720]
                    no-underline
                    md:items-center
                    md:gap-12
                    lg:gap-20
                    ${
                      fromLeft
                        ? 'md:flex-row'
                        : 'md:flex-row-reverse'
                    }
                  `}
                >

                  {/* =========================
                      IMAGE
                  ========================= */}

                  <div className="w-full md:w-[44%]">

                    <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#DDD7CC]">

                      <Image
                        src={getImagePath(project.image)}
                        alt={project.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 44vw"
                        className="
                          object-cover
                          transition-transform
                          duration-700
                          ease-out
                          group-hover:scale-[1.04]
                        "
                      />

                      {/* Project Number */}
                      <span
                        className="
                          absolute
                          left-4
                          top-4
                          text-[10px]
                          uppercase
                          tracking-[0.25em]
                          text-white
                          mix-blend-difference
                        "
                      >
                        {project.number}
                      </span>

                    </div>

                  </div>

                  {/* =========================
                      PROJECT CONTENT
                  ========================= */}

                  <div
                    className={`
                      flex
                      w-full
                      flex-1
                      flex-col
                      justify-between
                      md:min-h-[280px]
                      ${
                        fromLeft
                          ? 'md:items-start md:text-left'
                          : 'md:items-end md:text-right'
                      }
                    `}
                  >

                    <div className="md:max-w-[440px]">

                      {/* Project Number */}

                      <span
                        className="
                          text-[10px]
                          uppercase
                          tracking-[0.25em]
                          text-[#292720]/45
                        "
                      >
                        Project {project.number}
                      </span>

                      {/* Title */}

                      <h2
                        className="
                          mt-5
                          font-serif
                          text-[38px]
                          font-normal
                          leading-[0.95]
                          tracking-[-0.04em]
                          text-[#292720]
                          sm:text-4xl
                          md:text-5xl
                          lg:text-6xl
                        "
                      >
                        {project.title}
                      </h2>

                      {/* Location */}

                      <p
                        className="
                          mt-5
                          text-[10px]
                          uppercase
                          tracking-[0.2em]
                          text-[#292720]/50
                        "
                      >
                        {project.location}
                      </p>

                      {/* Category */}

                      <p
                        className="
                          mt-2
                          text-sm
                          leading-7
                          text-[#292720]/65
                          md:text-base
                        "
                      >
                        {project.category}
                      </p>

                    </div>

                    {/* =========================
                        VIEW PROJECT
                    ========================= */}

                    <div
                      className={`
                        mt-10
                        flex
                        items-center
                        gap-3
                        border-b
                        border-[#292720]/40
                        pb-2
                        text-[10px]
                        font-medium
                        uppercase
                        tracking-[0.2em]
                        text-[#292720]
                        transition-opacity
                        duration-300
                        group-hover:opacity-50
                        ${
                          fromLeft
                            ? 'md:self-start'
                            : 'md:self-end'
                        }
                      `}
                    >

                      <span className="text-[#292720]">
                        View Project
                      </span>

                      <span
                        className="
                          text-[#292720]
                          text-sm
                          leading-none
                          transition-transform
                          duration-300
                          group-hover:-translate-y-1
                          group-hover:translate-x-1
                        "
                      >
                        ↗
                      </span>

                    </div>

                  </div>

                </Link>

              </motion.article>
            )
          })}

        </div>

      </div>
    </section>
  )
}

