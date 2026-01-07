import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroSection from '../components/HeroSection'

function Home() {
  return (
    <div>
      <Navbar />
        <HeroSection />
      <Footer />
    </div>
  )
}

export default Home