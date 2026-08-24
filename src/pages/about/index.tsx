// import AboutHero from '@/components/AboutHero/AboutHero'
// import AboutIntro from '@/components/AboutIntro/AboutIntro'
// import Philosophy from '@/components/Philosophy/Philosophy'
// import ArtOfLiving from '@/components/ArtOfLiving/ArtOfLiving'
// import OurApproach from '@/components/OurApproach/OurApproach'
// export default function AboutPage() {
//   return (
//     <main className="min-h-screen bg-[#F4F0E8] text-[#292720]">
//       <AboutHero />
//       <AboutIntro />
//       <Philosophy />
//        <OurApproach />
//       <ArtOfLiving />
//     </main>
//   )
// }


import AboutHero from '@/components/AboutHero/AboutHero'
import AboutIntro from '@/components/AboutIntro/AboutIntro'
import Philosophy from '@/components/Philosophy/Philosophy'
import OurApproach from '@/components/OurApproach/OurApproach'
import ArtOfLiving from '@/components/ArtOfLiving/ArtOfLiving'
import AboutCTA from '@/components/AboutCTA/AboutCTA'

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#F4F0E8] text-[#292720]">

      <AboutHero />
      <AboutIntro />
      <Philosophy />
      <OurApproach />
      <ArtOfLiving />
      <AboutCTA />
    </main>
  )
}