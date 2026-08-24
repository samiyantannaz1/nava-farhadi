export default function AboutHero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">

      {/* Video */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source
          src="/videos/Nava-About-Hero-new.mp4"
          type="video/mp4"
        />
      </video>

      {/* Soft Overlay */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Content */}
      <div className="relative z-10 flex h-full items-end px-8 pb-12 md:px-16 md:pb-16 lg:px-[8vw] lg:pb-20">
        <div className="text-white">
          <p className="mb-4 text-[10px] uppercase tracking-[0.3em]">
            NAVA FARHADI
          </p>

          <h1 className="font-serif text-5xl font-normal leading-[0.95] tracking-[-0.04em] md:text-7xl lg:text-[6.5rem]">
            Architecture · Interior Design
          </h1>
        </div>
      </div>
    </section>
  )
}