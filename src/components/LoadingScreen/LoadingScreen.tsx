import { motion } from 'framer-motion'

export default function LoadingScreen() {
  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: '-100%' }}
      transition={{
        duration: 1.2,
        delay: 1.8,
        ease: [0.76, 0, 0.24, 1],
      }}
      className="fixed inset-0 z-9999 flex items-center justify-center bg-[#292720]"
    >
      <div className="text-center text-[#F4F0E8]">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="font-serif text-4xl tracking-[-0.04em] md:text-6xl"
        >
          NAVA FARHADI
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.4,
          }}
          className="mt-4 text-[9px] uppercase tracking-[0.35em] text-[#F4F0E8]/60 md:text-[10px]"
        >
          Interior Design Studio
        </motion.p>
      </div>
    </motion.div>
  )
}