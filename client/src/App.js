import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import React, { useEffect, useState } from 'react'
import items from './FeaturedData'
import Inventory from './Inventory'
import Gallery from './Gallery'
import Navbar from './Navbar'
import Facilities from './Facilities'
import Hero from './Hero'
import Queries from './Queries'
import FeaturedCar from './FeaturedCar'
import Contact from './Contact'
import Services from './Services'
import Testimonials from './Testimonials'
import Footer from './Footer'

const App = () => {
  const [isPreLoader, setIsPreloader] = useState(true)
  useEffect(() => {
    window.addEventListener('load', () => setIsPreloader(() => !isPreLoader))
  }, [isPreLoader])

  // Back-to- Top Button
  // The back-to-top button is hidden at the beginning
  const [showButton, setShowButton] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 300) {
        setShowButton(true)
      } else {
        setShowButton(false)
      }
    })
  }, [])

  // This function will scroll the window to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // for smoothly scrolling
    })
  }

  return (
    <>
      {/* preloader   */}
      <div
        id={isPreLoader ? 'preloader' : 'hidePreloader'}
        className=' d-flex justify-content-center align-items-center'
      >
        <img src='img/preloader.gif' alt='preloader' />
      </div>
      <Navbar />
      <Hero />
      <Facilities />
      <Inventory />
      <Queries />
      <FeaturedCar items={items} />
      <Gallery />
      <Contact />
      <Services />
      <Testimonials />
      {showButton && (
        <button onClick={scrollToTop} className='back-to-top sm-'>
          &#8679;
        </button>
      )}
      {/* &#8679; is used to create the upward arrow */}
      <Footer />
    </>
  )
}

export default App
