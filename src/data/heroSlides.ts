export interface HeroSlide {
  id: number
  eyebrow: string
  title: string
  description: string
  image: string
  mobileImage: string
}

export const heroSlides: HeroSlide[] = [
  {
    id: 1,
    eyebrow: 'Interior Design',
    title: 'Spaces with character.',
    description:
      'Thoughtful interiors shaped around light, material, and timeless design.',
    image: '/images/hero/hero1-new.jpg',
    mobileImage: '/images/hero/hero1-mobile.webp',
  },
  {
    id: 2,
    eyebrow: 'Residential',
    title: 'Designed to belong.',
    description:
      'Elegant residential interiors where architecture and material come together.',
    image: '/images/hero/hero2-new.webp',
    mobileImage: '/images/hero/hero2-mobile.webp',
  },
  {
    id: 3,
    eyebrow: 'Architecture',
    title: 'Form with intention.',
    description:
      'Timeless spaces shaped by proportion, material, and natural light.',
    image: '/images/hero/hero3-new.webp',
    mobileImage: '/images/hero/hero3-mobile.webp',
  },
  {
    id: 4,
    eyebrow: 'Interior Architecture',
    title: 'A quieter kind of luxury.',
    description:
      'Refined interiors created around atmosphere, detail, and timeless character.',
    image: '/images/hero/hero4-new.webp',
    mobileImage: '/images/hero/hero4-mobile.webp',
  },
]
