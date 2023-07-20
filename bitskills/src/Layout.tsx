import React from 'react'
import Navbar from './organisms/Navbar/Navbar'

type Props = {
    children: React.ReactNode
}

export default function Layout({children}: Props) {
  return (
    <div>
    <header>
      <Navbar/>
    </header>
    <main>
      {children}
    </main>
    <footer>
    </footer>
  </div>
  )
}