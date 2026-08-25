

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { ArrowLeft, ArrowRight } from 'lucide-react'

import Container from '../Container'
import { heroSlides } from '../../data/heroSlides'

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [progress, setProgress] = useState(0)

  const nextSlide = () => {
    setProgress(0)

    setCurrentSlide(
      (prev) => (prev + 1) % heroSlides.length
    )
  }

  const prevSlide = () => {
    setProgress(0)

    setCurrentSlide(
      (prev) =>
        (prev - 1 + heroSlides.length) %
        heroSlides.length
    )
  }

  // =========================
  // Auto slide
  // =========================

  useEffect(() => {
    const duration = 4000
    const startTime = Date.now()

    const timer = setInterval(() => {
      const elapsed = Date.now() - startTime

      const percentage = Math.min(
        (elapsed / duration) * 100,
        100
      )

      setProgress(percentage)

      if (elapsed >= duration) {
        clearInterval(timer)

        setCurrentSlide(
          (prev) =>
            (prev + 1) % heroSlides.length
        )

        setProgress(0)
      }
    }, 50)

    return () => clearInterval(timer)
  }, [currentSlide])

  const slide = heroSlides[currentSlide]

  return (
    <section className="relative min-h-screen w-full overflow-hidden">

      {/* =========================
          BACKGROUND SLIDES
      ========================= */}

      <div className="absolute inset-0">

        {heroSlides.map((item, index) => {
          const isActive = index === currentSlide

          return (
            <div
              key={item.id}
              className={`
                absolute
                inset-0
                overflow-hidden
                transition-opacity
                duration-[1200ms]
                ease-in-out
                ${
                  isActive
                    ? 'z-10 opacity-100'
                    : 'z-0 opacity-0'
                }
              `}
            >

              {/* =========================
                  IMAGE
              ========================= */}

              <div
                className={`
                  absolute
                  inset-0
                  transition-transform
                  duration-[2200ms]
                  ease-out
                  ${
                    isActive
                      ? 'scale-100'
                      : 'scale-[1.04]'
                  }
                `}
              >

                {/* Mobile */}
                <div className="absolute inset-0 md:hidden">
                  <Image
                    src={item.mobileImage}
                    alt={item.title}
                    fill
                    priority={index === 0}
                    sizes="100vw"
                    className="object-cover object-center"
                  />
                </div>

                {/* Desktop */}
                <div className="absolute inset-0 hidden md:block">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    priority={index === 0}
                    sizes="100vw"
                    className="object-cover object-center"
                  />
                </div>

              </div>

            </div>
          )
        })}

      </div>

      {/* =========================
          DARK OVERLAY
      ========================= */}

      <div
        className="
          absolute
          inset-0
          z-20
          bg-black/20
        "
      />

      {/* =========================
          HERO CONTENT
      ========================= */}

      <Container>
        <div
          className="
            relative
            z-30
            flex
            min-h-screen
            items-center
            justify-center
            px-6
            text-center
          "
        >

          <div
            key={slide.id}
            className="
              w-full
              max-w-[850px]
              text-white
              animate-[heroTextRise_1.1s_cubic-bezier(0.22,1,0.36,1)]
            "
          >

            {/* Eyebrow */}

            <p
              className="
                mb-5
                text-[10px]
                font-medium
                uppercase
                tracking-[0.28em]
                md:mb-6
                md:text-xs
              "
            >
              {slide.eyebrow}
            </p>

            {/* Title */}

            <h1
  className="
    px-12
    font-serif
    text-[32px]
    leading-[1]
    tracking-[-0.03em]
    sm:px-16
    sm:text-[42px]
    md:px-0
    md:text-6xl
    lg:text-[76px]
  "
>
  {slide.title}
</h1>

            {/* Description */}

            <p
              className="
                mx-auto
                mt-6
                max-w-[520px]
                text-sm
                leading-6
                text-white/90
                md:mt-8
                md:text-base
                md:leading-7
              "
            >
              {slide.description}
            </p>

          </div>

        </div>
      </Container>

      {/* =========================
          PREVIOUS BUTTON
      ========================= */}

      <button
        type="button"
        onClick={prevSlide}
        aria-label="Previous slide"
        className="
          absolute
          left-4
          top-1/2
          z-40
          flex
          h-10
          w-10
          -translate-y-1/2
          items-center
          justify-center
          rounded-full
          border
          border-white/30
          bg-white/10
          text-white
          backdrop-blur-md
          transition
          duration-300
          hover:bg-white/20
          sm:left-6
          sm:h-12
          sm:w-12
          md:left-10
        "
      >
        <ArrowLeft
          size={18}
          strokeWidth={1.4}
        />
      </button>

      {/* =========================
          NEXT BUTTON
      ========================= */}

      <button
        type="button"
        onClick={nextSlide}
        aria-label="Next slide"
        className="
          absolute
          right-4
          top-1/2
          z-40
          flex
          h-10
          w-10
          -translate-y-1/2
          items-center
          justify-center
          rounded-full
          border
          border-white/30
          bg-white/10
          text-white
          backdrop-blur-md
          transition
          duration-300
          hover:bg-white/20
          sm:right-6
          sm:h-12
          sm:w-12
          md:right-10
        "
      >
        <ArrowRight
          size={18}
          strokeWidth={1.4}
        />
      </button>

      {/* =========================
          PROGRESS
      ========================= */}

      <div
        className="
          absolute
          bottom-8
          left-1/2
          z-40
          w-[180px]
          -translate-x-1/2
          sm:w-[220px]
          md:bottom-10
          md:w-[280px]
        "
      >

        <div
          className="
            mb-3
            flex
            items-center
            justify-between
            text-[10px]
            tracking-[0.18em]
            text-white
            sm:text-xs
          "
        >
          <span>
            {String(currentSlide + 1).padStart(2, '0')}
          </span>

          <span className="text-white/50">
            {String(heroSlides.length).padStart(2, '0')}
          </span>
        </div>

        <div className="h-[1px] w-full bg-white/30">

          <div
            className="
              h-full
              bg-white
              transition-[width]
              duration-75
            "
            style={{
              width: `${progress}%`,
            }}
          />

        </div>

      </div>

    </section>
  )
}