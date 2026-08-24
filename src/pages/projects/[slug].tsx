import Link from 'next/link'
import { GetStaticPaths, GetStaticProps } from 'next'
import { projects, Project } from '@/data/projects'

import UniversiteGallery from '@/components/ProjectGallery/Université Gallery/UniversiteGallery'
import StonefordCottageGallery from '@/components/ProjectGallery/Stoneford-cottage/Stoneford-cottage'
import OxfordRoadEstate from '@/components/ProjectGallery/oxford-road-estate/OxfordRoadEstate'
import WillowCreek from '@/components/ProjectGallery/willow-creek/WillowCreek'

interface ProjectPageProps {
  project: Project
}

export default function ProjectPage({
  project,
}: ProjectPageProps) {
  const currentIndex = projects.findIndex(
    (item) => item.slug === project.slug
  )

  const previousProject =
    projects[
      (currentIndex - 1 + projects.length) % projects.length
    ]

  const nextProject =
    projects[
      (currentIndex + 1) % projects.length
    ]

  return (
    <main className="min-h-screen bg-[#F4F0E8] text-[#292720]">

      {/* =========================
          HERO
      ========================== */}

      <section className="px-8 pb-20 pt-32 md:px-16 md:pb-24 md:pt-40 lg:px-[12vw] lg:pb-28 lg:pt-44">
        <div className="mx-auto max-w-[1100px]">

          <div className="mb-8 flex items-center justify-between">
            <span className="text-[10px] uppercase tracking-[0.2em] text-[#292720]/50">
              Project {project.number}
            </span>

            <span className="text-[10px] uppercase tracking-[0.2em] text-[#292720]/50">
              {project.location}
            </span>
          </div>

          <h1 className="font-serif text-6xl font-normal leading-[0.9] tracking-[-0.04em] md:text-8xl lg:text-[8rem]">
            {project.title}
          </h1>

        </div>
      </section>

      {/* =========================
          PROJECT INFORMATION
      ========================== */}

      <section className="px-8 py-20 md:px-16 md:py-24 lg:px-[12vw] lg:py-32">
        <div className="mx-auto grid max-w-[1100px] gap-12 md:grid-cols-2 lg:grid-cols-[1fr_2fr]">

          <div>
            <span className="text-[10px] uppercase tracking-[0.2em] text-[#292720]/50">
              About the project
            </span>
          </div>

          <div>
            <p className="max-w-3xl font-serif text-2xl font-normal leading-relaxed md:text-3xl lg:text-4xl">
              {project.description}
            </p>
          </div>

        </div>
      </section>

      {/* =========================
          DETAILS
      ========================== */}

      <section className="border-t border-[#292720]/15 px-8 py-16 md:px-16 lg:px-[12vw]">
        <div className="mx-auto grid max-w-[1100px] grid-cols-2 gap-y-10 md:grid-cols-4">

          <div>
            <span className="text-[9px] uppercase tracking-[0.15em] text-[#292720]/45">
              Location
            </span>

            <p className="mt-3 text-sm">
              {project.location}
            </p>
          </div>

          <div>
            <span className="text-[9px] uppercase tracking-[0.15em] text-[#292720]/45">
              Area
            </span>

            <p className="mt-3 text-sm">
              {project.area || '—'}
            </p>
          </div>

          <div>
            <span className="text-[9px] uppercase tracking-[0.15em] text-[#292720]/45">
              Category
            </span>

            <p className="mt-3 text-sm">
              {project.category}
            </p>
          </div>

          <div>
            <span className="text-[9px] uppercase tracking-[0.15em] text-[#292720]/45">
              Type
            </span>

            <p className="mt-3 text-sm">
              {project.type}
            </p>
          </div>

        </div>
      </section>

      {/* =========================
          GALLERY
      ========================== */}

      {project.slug === 'universite' && project.gallery && (
        <UniversiteGallery images={project.gallery} />
      )}

      {project.slug === 'stoneford-cottage' && project.gallery && (
        <StonefordCottageGallery images={project.gallery} />
      )}

      {project.slug === 'oxford-road-estate' && project.gallery && (
        <OxfordRoadEstate images={project.gallery} />
      )}

      {project.slug === 'willow-creek' && project.gallery && (
        <WillowCreek images={project.gallery} />
      )}

      {/* =========================
          PROJECT NAVIGATION
      ========================== */}

      <section className="px-8 pb-24 pt-24 md:px-16 md:pb-32 lg:px-[8vw] lg:pt-32">

        <div className="mx-auto max-w-[1300px]">

          <div className="mb-12 border-t border-[#292720]/15 pt-5">
            <span className="text-[10px] uppercase tracking-[0.2em] text-[#292720]/45">
              Explore more projects
            </span>
          </div>

          <div className="grid grid-cols-2 gap-8">

            {/* Previous */}

            <Link
              href={`/projects/${previousProject.slug}`}
              className="group"
            >
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#292720]/45">
                Previous
              </span>

              <div className="mt-4 flex items-center gap-3">
                <span className="text-xl transition-transform duration-300 group-hover:-translate-x-1">
                  ←
                </span>

                <h2 className="font-serif text-2xl md:text-4xl">
                  {previousProject.title}
                </h2>
              </div>
            </Link>

            {/* Next */}

            <Link
              href={`/projects/${nextProject.slug}`}
              className="group text-right"
            >
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#292720]/45">
                Next
              </span>

              <div className="mt-4 flex items-center justify-end gap-3">
                <h2 className="font-serif text-2xl md:text-4xl">
                  {nextProject.title}
                </h2>

                <span className="text-xl transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </div>
            </Link>

          </div>

        </div>

      </section>

    </main>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: projects.map((project) => ({
      params: {
        slug: project.slug,
      },
    })),
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({
  params,
}) => {
  const slug = params?.slug as string

  const project = projects.find(
    (project) => project.slug === slug
  )

  if (!project) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      project,
    },
  }
}