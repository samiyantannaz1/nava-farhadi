

import { ReactNode } from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer'
import OffcanvasMenu from '../OffcanvasMenu'
import OffcanvasProvider from '../../context/OffcanvasProvider'

interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <OffcanvasProvider>
      <div className="w-full">
        <Navbar />

        <OffcanvasMenu />

        <main className="w-full">
          {children}
        </main>

        <Footer />
      </div>
    </OffcanvasProvider>
  )
}