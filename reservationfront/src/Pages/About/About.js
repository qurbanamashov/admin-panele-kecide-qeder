import React from 'react'
import AboutHeader from '../../Components/AboutComponent/AboutHeader/AboutHeader'
import AboutRioWeUse from '../../Components/AboutComponent/AboutRioWeUse/AboutRioWeUse'
import HomePeart from '../../Components/HomeComponents/HomePearl/HomePeart'
import Footer from '../../Layouts/Footer/Footer'
import Navbar from '../../Layouts/Navbar/Navbar'

function About() {
  return (
    <>
      <Navbar />
      <AboutHeader />
      <AboutRioWeUse/>
      <HomePeart/>
      <Footer />
    </>
  )
}

export default About