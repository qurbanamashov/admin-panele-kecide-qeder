import React from 'react'
import HomeCatagory from '../../Components/HomeComponents/HomeCatagory/HomeCatagory'
import HomeFeatured from '../../Components/HomeComponents/HomeFeatured/HomeFeatured'
import HomeFeaturedProperty from '../../Components/HomeComponents/HomeFeaturedProperty/HomeFeaturedProperty'
import HomeHeader from '../../Components/HomeComponents/HomeHeader/HomeHeader'
import HomeMail from '../../Components/HomeComponents/HomeMail/HomeMail'
import HomePeart from '../../Components/HomeComponents/HomePearl/HomePeart'
import HomeSearch from '../../Components/HomeComponents/HomeSearch/HomeSearch'
import Footer from '../../Layouts/Footer/Footer'
import Navbar from '../../Layouts/Navbar/Navbar'
function Home() {
  return (
    <>
    <Navbar/> 
    <HomeHeader/>
    <HomeSearch/>
    <HomeFeatured/>
    <HomeCatagory/>
    <HomeFeaturedProperty/>
    <HomePeart/>
    <HomeMail/>
    <Footer/> 
    </>
    
  )
}

export default Home