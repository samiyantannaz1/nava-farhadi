import ProjectsHero from '@/components/ProjectsHero/ProjectsHero'
import ProjectsList from '@/components/ProjectsList/ProjectsList'

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-[#F4F0E8] text-[#292720]">
      <ProjectsHero />
      <ProjectsList/>
    </main>
  )
}