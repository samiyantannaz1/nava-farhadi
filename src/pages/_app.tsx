import { useEffect, useState } from 'react'
import type { AppProps } from 'next/app'
import { motion } from 'framer-motion'

import Layout from '../components/Layout'
import LoadingScreen from '../components/LoadingScreen/LoadingScreen'

import '../styles/globals.css'


export default function App({
  Component,
  pageProps,
}: AppProps) {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
    
      {isLoading && <LoadingScreen />}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: isLoading ? 0 : 1,
        }}
        transition={{
          duration: 1.2,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </motion.div>
    </>
  )
}
//npm install
//npm ls tailwindcss @tailwindcss/postcss postcss