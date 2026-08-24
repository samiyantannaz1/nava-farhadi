// import image from "../../public/images/projects/Stoneford-cottage/image-new-01.webp"

export interface GalleryImage {
  src: string
  alt: string
  width: number
  height: number
}

export interface Project {
  id: number
  number: string
  slug: string
  title: string
  location: string
  area: string
  category: string
  type: string
  style: string
  description: string
  image: string
  gallery?: GalleryImage[]
}

export const projects: Project[] = [
  {
    id: 1,
    number: '01',
    slug: 'universite',
    title: 'Université',
    location: 'Paris, France',
    area: '200 m²',
    category: 'Residential',
    type: 'Renovation & Decoration',
    style: 'Parisian Contemporary / Timeless Luxury',
    description:
      'A refined Parisian residence shaped around natural light, elegant materials, and a timeless contemporary atmosphere.',
    image: '/images/projects/universite.webp',

    gallery: [
      {
        src: '/images/projects/universite/image-01.webp',
        alt: 'Université interior 01',
        width: 470,
        height: 666,
      },
      {
        src: '/images/projects/universite/image-02.webp',
        alt: 'Université interior 02',
        width: 470,
        height: 666,
      },
      {
        src: '/images/projects/universite/image-03.webp',
        alt: 'Université interior 03',
        width: 535,
        height: 356,
      },
      {
        src: '/images/projects/universite/image-04.webp',
        alt: 'Université interior 04',
        width: 535,
        height: 356,
      },
      {
        src: '/images/projects/universite/image-05.webp',
        alt: 'Université interior 05',
        width: 531,
        height: 755,
      },
      {
        src: '/images/projects/universite/image-06.webp',
        alt: 'Université interior 06',
        width: 531,
        height: 755,
      },
      {
        src: '/images/projects/universite/image-07.webp',
        alt: 'Université interior 07',
        width: 538,
        height: 547,
      },
      {
        src: '/images/projects/universite/image-08.webp',
        alt: 'Université interior 08',
        width: 540,
        height: 759,
      },
      {
        src: '/images/projects/universite/image-09.webp',
        alt: 'Université interior 09',
        width: 534,
        height: 753,
      },
      {
        src: '/images/projects/universite/image-10.webp',
        alt: 'Université interior 10',
        width: 537,
        height: 355,
      },
      {
        src: '/images/projects/universite/image-11.webp',
        alt: 'Université interior 11',
        width: 539,
        height: 761,
      },
      {
        src: '/images/projects/universite/image-12.webp',
        alt: 'Université interior 12',
        width: 534,
        height: 354,
      },
      {
        src: '/images/projects/universite/image-13.webp',
        alt: 'Université interior 13',
        width: 533,
        height: 356,
      },
      {
        src: '/images/projects/universite/image-14.webp',
        alt: 'Université interior 14',
        width: 533,
        height: 356,
      },
      {
        src: '/images/projects/universite/image-15.webp',
        alt: 'Université interior 15',
        width: 536,
        height: 758,
      },
      {
        src: '/images/projects/universite/image-16.webp',
        alt: 'Université interior 16',
        width: 536,
        height: 758,
      },
      {
        src: '/images/projects/universite/image-17.webp',
        alt: 'Université interior 17',
        width: 534,
        height: 760,
      },
      {
        src: '/images/projects/universite/image-18.webp',
        alt: 'Université interior 18',
        width: 533,
        height: 355,
      },
      {
        src: '/images/projects/universite/image-19.webp',
        alt: 'Université interior 19',
        width: 533,
        height: 355,
      },
      {
        src: '/images/projects/universite/image-20.webp',
        alt: 'Université interior 20',
        width: 533,
        height: 355,
      },
      {
        src: '/images/projects/universite/image-21.webp',
        alt: 'Université interior 21',
        width: 533,
        height: 355,
      },
      {
  src: '/images/projects/universite/image-22.webp',
  alt: 'Université interior 22',
  width: 533,
  height: 355,
},
  {
        src: '/images/projects/universite/image-23.webp',
        alt: 'Université interior 23',
        width: 533,
        height:760,
      },
    ],
  },

{
  id: 2,
  number: '02',
  slug: 'stoneford-cottage',
  title: 'Stoneford Cottage',
  location: 'United States',
  area: '',
  category: 'Residential',
  type: 'Interior Design',
  style: 'English Country / Timeless',
  description:
    'A timeless English country-inspired home layered with collected antiques, expressive patterns, warm materials, and thoughtful details, designed as a character-filled forever home for modern family living.',
  image: '/images/projects/Stoneford-cottage/image-new-01.webp',

  gallery: [
    {
      src: '/images/projects/Stoneford-cottage/image-new-01.webp',
      alt: 'Stoneford Cottage interior 01',
      width: 1861,
      height: 855,
    },
    {
      src: '/images/projects/Stoneford-cottage/image-02.webp',
      alt: 'Stoneford Cottage interior 02',
      width: 606,
      height: 809,
    },
    {
      src: '/images/projects/Stoneford-cottage/image-03.webp',
      alt: 'Stoneford Cottage interior 03',
      width: 606,
      height: 809,
    },
    {
      src: '/images/projects/Stoneford-cottage/image-04.webp',
      alt: 'Stoneford Cottage interior 04',
      width: 606,
      height: 809,
    },
    {
      src: '/images/projects/Stoneford-cottage/image-05.webp',
      alt: 'Stoneford Cottage interior 05',
      width: 1861,
      height: 855,
    },
    {
      src: '/images/projects/Stoneford-cottage/image-06.webp',
      alt: 'Stoneford Cottage interior 06',
      width: 606,
      height: 809,
    },
    {
      src: '/images/projects/Stoneford-cottage/image-07.webp',
      alt: 'Stoneford Cottage interior 07',
      width: 606,
      height: 809,
    },
    {
      src: '/images/projects/Stoneford-cottage/image-08.webp',
      alt: 'Stoneford Cottage interior 08',
      width: 606,
      height: 809,
    },
    {
      src: '/images/projects/Stoneford-cottage/image-09.webp',
      alt: 'Stoneford Cottage interior 09',
      width: 1861,
      height: 855,
    },
    {
      src: '/images/projects/Stoneford-cottage/image-10.webp',
      alt: 'Stoneford Cottage interior 10',
      width: 606,
      height: 809,
    },
    {
      src: '/images/projects/Stoneford-cottage/image-11.webp',
      alt: 'Stoneford Cottage interior 11',
      width: 606,
      height: 809,
    },
    {
      src: '/images/projects/Stoneford-cottage/image-12.webp',
      alt: 'Stoneford Cottage interior 12',
      width: 606,
      height: 809,
    },
    {
      src: '/images/projects/Stoneford-cottage/image-13.webp',
      alt: 'Stoneford Cottage interior 13',
      width: 1861,
      height: 855,
    },
    {
      src: '/images/projects/Stoneford-cottage/image-14.webp',
      alt: 'Stoneford Cottage interior 14',
      width: 606,
      height: 809,
    },
    {
      src: '/images/projects/Stoneford-cottage/image-15.webp',
      alt: 'Stoneford Cottage interior 15',
      width: 606,
      height: 809,
    },
    {
      src: '/images/projects/Stoneford-cottage/image-16.webp',
      alt: 'Stoneford Cottage interior 16',
      width: 606,
      height: 809,
    },
    {
      src: '/images/projects/Stoneford-cottage/image-17.webp',
      alt: 'Stoneford Cottage interior 17',
      width: 1861,
      height: 855,
    },
    {
      src: '/images/projects/Stoneford-cottage/image-18.webp',
      alt: 'Stoneford Cottage interior 18',
      width: 606,
      height: 809,
    },
    {
      src: '/images/projects/Stoneford-cottage/image-19.webp',
      alt: 'Stoneford Cottage interior 19',
      width: 606,
      height: 809,
    },
    {
      src: '/images/projects/Stoneford-cottage/image-20.webp',
      alt: 'Stoneford Cottage interior 20',
      width: 606,
      height: 809,
    },
    {
      src: '/images/projects/Stoneford-cottage/image-21.webp',
      alt: 'Stoneford Cottage interior 21',
      width: 1861,
      height: 855,
    },
    {
      src: '/images/projects/Stoneford-cottage/image-22.webp',
      alt: 'Stoneford Cottage interior 22',
      width: 606,
      height: 809,
    },
    {
      src: '/images/projects/Stoneford-cottage/image-23.webp',
      alt: 'Stoneford Cottage interior 23',
      width: 606,
      height: 809,
    },
    {
      src: '/images/projects/Stoneford-cottage/image-24.webp',
      alt: 'Stoneford Cottage interior 24',
      width: 606,
      height: 809,
    },
    {
      src: '/images/projects/Stoneford-cottage/image-25.webp',
      alt: 'Stoneford Cottage interior 25',
      width: 1861,
      height: 855,
    },
    {
      src: '/images/projects/Stoneford-cottage/image-26.webp',
      alt: 'Stoneford Cottage interior 26',
      width: 606,
      height: 809,
    },
    {
      src: '/images/projects/Stoneford-cottage/image-27.webp',
      alt: 'Stoneford Cottage interior 27',
      width: 606,
      height: 809,
    },
    {
      src: '/images/projects/Stoneford-cottage/image-28.webp',
      alt: 'Stoneford Cottage interior 28',
      width: 606,
      height: 809,
    },
    {
      src: '/images/projects/Stoneford-cottage/image-29.webp',
      alt: 'Stoneford Cottage interior 29',
      width: 1861,
      height: 855,
    },
    {
      src: '/images/projects/Stoneford-cottage/image-30.webp',
      alt: 'Stoneford Cottage interior 30',
      width: 606,
      height: 809,
    },
    {
      src: '/images/projects/Stoneford-cottage/image-31.webp',
      alt: 'Stoneford Cottage interior 31',
      width: 606,
      height: 809,
    },
    {
      src: '/images/projects/Stoneford-cottage/image-32.webp',
      alt: 'Stoneford Cottage interior 32',
      width: 606,
      height: 809,
    },
    {
      src: '/images/projects/Stoneford-cottage/image-33.webp',
      alt: 'Stoneford Cottage interior 33',
      width: 1861,
      height: 855,
    },
    {
      src: '/images/projects/Stoneford-cottage/image-34.webp',
      alt: 'Stoneford Cottage interior 34',
      width: 606,
      height: 809,
    },
    {
      src: '/images/projects/Stoneford-cottage/image-35.webp',
      alt: 'Stoneford Cottage interior 35',
      width: 606,
      height: 809,
    },
    {
      src: '/images/projects/Stoneford-cottage/image-36.webp',
      alt: 'Stoneford Cottage interior 36',
      width: 606,
      height: 809,
    },
    {
      src: '/images/projects/Stoneford-cottage/image-37.webp',
      alt: 'Stoneford Cottage interior 37',
      width: 1861,
      height: 855,
    },
    {
      src: '/images/projects/Stoneford-cottage/image-38.webp',
      alt: 'Stoneford Cottage interior 38',
      width: 606,
      height: 809,
    },
    {
      src: '/images/projects/Stoneford-cottage/image-39.webp',
      alt: 'Stoneford Cottage interior 39',
      width: 606,
      height: 809,
    },
    {
      src: '/images/projects/Stoneford-cottage/image-40.webp',
      alt: 'Stoneford Cottage interior 40',
      width: 606,
      height: 809,
    },
    {
      src: '/images/projects/Stoneford-cottage/image-41.webp',
      alt: 'Stoneford Cottage interior 41',
      width: 1861,
      height: 855,
    },
    {
      src: '/images/projects/Stoneford-cottage/image-42.webp',
      alt: 'Stoneford Cottage interior 42',
      width: 606,
      height: 809,
    },
    {
      src: '/images/projects/Stoneford-cottage/image-43.webp',
      alt: 'Stoneford Cottage interior 43',
      width: 606,
      height: 809,
    },
    {
      src: '/images/projects/Stoneford-cottage/image-44.webp',
      alt: 'Stoneford Cottage interior 44',
      width: 606,
      height: 809,
    },
    {
      src: '/images/projects/Stoneford-cottage/image-45.webp',
      alt: 'Stoneford Cottage interior 45',
      width: 1861,
      height: 855,
    },
    {
      src: '/images/projects/Stoneford-cottage/image-46.webp',
      alt: 'Stoneford Cottage interior 46',
      width: 606,
      height: 809,
    },
    {
      src: '/images/projects/Stoneford-cottage/image-47.webp',
      alt: 'Stoneford Cottage interior 47',
      width: 606,
      height: 809,
    },
    {
      src: '/images/projects/Stoneford-cottage/image-48.webp',
      alt: 'Stoneford Cottage interior 48',
      width: 606,
      height: 809,
    },
    {
      src: '/images/projects/Stoneford-cottage/image-49.webp',
      alt: 'Stoneford Cottage interior 49',
      width: 1861,
      height: 855,
    },
    {
      src: '/images/projects/Stoneford-cottage/image-50.webp',
      alt: 'Stoneford Cottage interior 50',
      width: 606,
      height: 809,
    },
    {
      src: '/images/projects/Stoneford-cottage/image-51.webp',
      alt: 'Stoneford Cottage interior 51',
      width: 606,
      height: 809,
    },
    {
      src: '/images/projects/Stoneford-cottage/image-52.webp',
      alt: 'Stoneford Cottage interior 52',
      width: 606,
      height: 809,
    },
    {
      src: '/images/projects/Stoneford-cottage/image-53.webp',
      alt: 'Stoneford Cottage interior 53',
      width: 1861,
      height: 855,
    },
    {
      src: '/images/projects/Stoneford-cottage/image-54.webp',
      alt: 'Stoneford Cottage interior 54',
      width: 606,
      height: 809,
    },
    {
      src: '/images/projects/Stoneford-cottage/image-55.webp',
      alt: 'Stoneford Cottage interior 55',
      width: 606,
      height: 809,
    },
    {
      src: '/images/projects/Stoneford-cottage/image-56.webp',
      alt: 'Stoneford Cottage interior 56',
      width: 606,
      height: 809,
    },
  ],
},


{
  id: 3,
  number: '03',
  slug: 'oxford-road-estate',
  title: 'Oxford Road Estate',
  location: 'London, United Kingdom',
  area: '',
  category: 'Residential',
  type: 'Interior Design',
  style: 'Contemporary / Timeless',
description:
  'A richly layered family home where natural materials, handcrafted details, and collected antiques create a timeless and deeply connected interior. Reclaimed Italian floors, custom millwork, steel windows, commissioned artwork, and carefully repeated architectural details bring warmth, character, and continuity to every space.',
  image: '/images/projects/oxford-road-estate/image-01.webp',

  gallery: [
    {
      src: '/images/projects/oxford-road-estate/image-01.webp',
      alt: 'Oxford Road Estate interior 01',
      width: 1889,
      height: 867,
    },
    {
      src: '/images/projects/oxford-road-estate/image-02.webp',
      alt: 'Oxford Road Estate interior 02',
      width: 1854,
      height: 871,
    },
    {
      src: '/images/projects/oxford-road-estate/image-03.webp',
      alt: 'Oxford Road Estate interior 03',
      width: 1845,
      height: 872,
    },
    {
      src: '/images/projects/oxford-road-estate/image-04.webp',
      alt: 'Oxford Road Estate interior 04',
      width: 918,
      height: 886,
    },
    {
      src: '/images/projects/oxford-road-estate/image-05.webp',
      alt: 'Oxford Road Estate interior 05',
      width: 905,
      height: 881,
    },
    {
      src: '/images/projects/oxford-road-estate/image-06.webp',
      alt: 'Oxford Road Estate interior 06',
      width: 922,
      height: 885,
    },
    {
      src: '/images/projects/oxford-road-estate/image-07.webp',
      alt: 'Oxford Road Estate interior 07',
      width: 925,
      height: 885,
    },
    {
      src: '/images/projects/oxford-road-estate/image-08.webp',
      alt: 'Oxford Road Estate interior 08',
      width: 1860,
      height: 892,
    },
    {
      src: '/images/projects/oxford-road-estate/image-09.webp',
      alt: 'Oxford Road Estate interior 09',
      width: 602,
      height: 831,
    },
    {
      src: '/images/projects/oxford-road-estate/image-10.webp',
      alt: 'Oxford Road Estate interior 10',
      width: 608,
      height: 833,
    },
    {
      src: '/images/projects/oxford-road-estate/image-11.webp',
      alt: 'Oxford Road Estate interior 11',
      width: 598,
      height: 836,
    },
    {
      src: '/images/projects/oxford-road-estate/image-12.webp',
      alt: 'Oxford Road Estate interior 12',
      width: 1854,
      height: 879,
    },
    {
      src: '/images/projects/oxford-road-estate/image-13.webp',
      alt: 'Oxford Road Estate interior 13',
      width: 916,
      height: 879,
    },
    {
      src: '/images/projects/oxford-road-estate/image-14.webp',
      alt: 'Oxford Road Estate interior 14',
      width: 923,
      height: 879,
    },
    {
      src: '/images/projects/oxford-road-estate/image-15.webp',
      alt: 'Oxford Road Estate interior 15',
      width: 1899,
      height: 882,
    },
    {
      src: '/images/projects/oxford-road-estate/image-16.webp',
      alt: 'Oxford Road Estate interior 16',
      width: 911,
      height: 876,
    },
    {
      src: '/images/projects/oxford-road-estate/image-17.webp',
      alt: 'Oxford Road Estate interior 17',
      width: 910,
      height: 862,
    },
    {
      src: '/images/projects/oxford-road-estate/image-18.webp',
      alt: 'Oxford Road Estate interior 18',
      width: 938,
      height: 882,
    },
    {
      src: '/images/projects/oxford-road-estate/image-19.webp',
      alt: 'Oxford Road Estate interior 19',
      width: 906,
      height: 870,
    },
    {
      src: '/images/projects/oxford-road-estate/image-20.webp',
      alt: 'Oxford Road Estate interior 20',
      width: 1860,
      height: 878,
    },
    {
      src: '/images/projects/oxford-road-estate/image-21.webp',
      alt: 'Oxford Road Estate interior 21',
      width: 1880,
      height: 882,
    },
    {
      src: '/images/projects/oxford-road-estate/image-22.webp',
      alt: 'Oxford Road Estate interior 22',
      width: 928,
      height: 882,
    },
    {
      src: '/images/projects/oxford-road-estate/image-23.webp',
      alt: 'Oxford Road Estate interior 23',
      width: 918,
      height: 876,
    },
    {
      src: '/images/projects/oxford-road-estate/image-24.webp',
      alt: 'Oxford Road Estate interior 24',
      width: 1865,
      height: 882,
    },
    {
      src: '/images/projects/oxford-road-estate/image-25.webp',
      alt: 'Oxford Road Estate interior 25',
      width: 915,
      height: 877,
    },
    {
      src: '/images/projects/oxford-road-estate/image-26.webp',
      alt: 'Oxford Road Estate interior 26',
      width: 923,
      height: 877,
    },
    {
      src: '/images/projects/oxford-road-estate/image-27.webp',
      alt: 'Oxford Road Estate interior 27',
      width: 921,
      height: 847,
    },
    {
      src: '/images/projects/oxford-road-estate/image-28.webp',
      alt: 'Oxford Road Estate interior 28',
      width: 910,
      height: 847,
    },
    {
      src: '/images/projects/oxford-road-estate/image-29.webp',
      alt: 'Oxford Road Estate interior 29',
      width: 1863,
      height: 882,
    },
    {
      src: '/images/projects/oxford-road-estate/image-30.webp',
      alt: 'Oxford Road Estate interior 30',
      width: 1866,
      height: 873,
    },
    {
      src: '/images/projects/oxford-road-estate/image-31.webp',
      alt: 'Oxford Road Estate interior 31',
      width: 1857,
      height: 876,
    },
    {
      src: '/images/projects/oxford-road-estate/image-32.webp',
      alt: 'Oxford Road Estate interior 32',
      width: 1860,
      height: 886,
    },
    {
      src: '/images/projects/oxford-road-estate/image-33.webp',
      alt: 'Oxford Road Estate interior 33',
      width: 902,
      height: 871,
    },
    {
      src: '/images/projects/oxford-road-estate/image-34.webp',
      alt: 'Oxford Road Estate interior 34',
      width: 921,
      height: 879,
    },
    {
      src: '/images/projects/oxford-road-estate/image-35.webp',
      alt: 'Oxford Road Estate interior 35',
      width: 915,
      height: 876,
    },
    {
      src: '/images/projects/oxford-road-estate/image-36.webp',
      alt: 'Oxford Road Estate interior 36',
      width: 859,
      height: 871,
    },
  ],
},
{
  id: 4,
  number: '04',
  slug: 'willow-creek',
  title: 'Willow Creek Estate',
  location: 'Park City, Utah',
  area: '',
  category: 'Residential',
  type: 'Interior Design',
  style: 'Rustic Mountain / Refined Luxury',
description:
  'A sophisticated mountain retreat in Park City, shaped by rugged stone, stained timber, rich textiles, and collected details. The interiors balance rustic character with refined elegance, creating a warm, layered home deeply connected to its surroundings.',
  image: '/images/projects/willow-creek/image-01.webp',

  gallery: [
    {
      src: '/images/projects/willow-creek/image-01.webp',
      alt: 'Willow Creek Estate interior 01',
      width: 1293,
      height: 721,
    },
    {
      src: '/images/projects/willow-creek/image-02.webp',
      alt: 'Willow Creek Estate interior 02',
      width: 1293,
      height: 721,
    },
    {
      src: '/images/projects/willow-creek/image-03.webp',
      alt: 'Willow Creek Estate interior 03',
      width: 1293,
      height: 721,
    },
    {
      src: '/images/projects/willow-creek/image-04.webp',
      alt: 'Willow Creek Estate interior 04',
      width: 1293,
      height: 721,
    },
    {
      src: '/images/projects/willow-creek/image-05.webp',
      alt: 'Willow Creek Estate interior 05',
      width: 1293,
      height: 721,
    },
    {
      src: '/images/projects/willow-creek/image-06.webp',
      alt: 'Willow Creek Estate interior 06',
      width: 622,
      height: 757,
    },
    {
      src: '/images/projects/willow-creek/image-07.webp',
      alt: 'Willow Creek Estate interior 07',
      width: 622,
      height: 757,
    },
    {
      src: '/images/projects/willow-creek/image-08.webp',
      alt: 'Willow Creek Estate interior 08',
      width: 622,
      height: 757,
    },
    {
      src: '/images/projects/willow-creek/image-09.webp',
      alt: 'Willow Creek Estate interior 09',
      width: 622,
      height: 757,
    },
    {
      src: '/images/projects/willow-creek/image-10.webp',
      alt: 'Willow Creek Estate interior 10',
      width: 1293,
      height: 721,
    },
    {
      src: '/images/projects/willow-creek/image-11.webp',
      alt: 'Willow Creek Estate interior 11',
      width: 1293,
      height: 721,
    },
    {
      src: '/images/projects/willow-creek/image-12.webp',
      alt: 'Willow Creek Estate interior 12',
      width: 622,
      height: 757,
    },
    {
      src: '/images/projects/willow-creek/image-13.webp',
      alt: 'Willow Creek Estate interior 13',
      width: 622,
      height: 757,
    },
    {
      src: '/images/projects/willow-creek/image-14.webp',
      alt: 'Willow Creek Estate interior 14',
      width: 1293,
      height: 721,
    },
    {
      src: '/images/projects/willow-creek/image-15.webp',
      alt: 'Willow Creek Estate interior 15',
      width: 1293,
      height: 721,
    },
    {
      src: '/images/projects/willow-creek/image-16.webp',
      alt: 'Willow Creek Estate interior 16',
      width: 622,
      height: 757,
    },
    {
      src: '/images/projects/willow-creek/image-17.webp',
      alt: 'Willow Creek Estate interior 17',
      width: 622,
      height: 757,
    },
    {
      src: '/images/projects/willow-creek/image-18.webp',
      alt: 'Willow Creek Estate interior 18',
      width: 1293,
      height: 721,
    },
    {
      src: '/images/projects/willow-creek/image-19.webp',
      alt: 'Willow Creek Estate interior 19',
      width: 622,
      height: 757,
    },
    {
      src: '/images/projects/willow-creek/image-20.webp',
      alt: 'Willow Creek Estate interior 20',
      width: 622,
      height: 757,
    },
    {
      src: '/images/projects/willow-creek/image-21.webp',
      alt: 'Willow Creek Estate interior 21',
      width: 1293,
      height: 721,
    },
    {
      src: '/images/projects/willow-creek/image-22.webp',
      alt: 'Willow Creek Estate interior 22',
      width: 1293,
      height: 721,
    },
  ],
},
]






