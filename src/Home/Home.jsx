import React from 'react'
import Banner from './Banner'
import HomeCategory from './HomeCategory'
import CategoryShowCase from './CategoryShowCase'
import Register from './Register'
import LocationSpread from './LocationSpread'
import AboutUs from './AboutUs'
import AppSection from './AppSection'


const Home = () => {
  return (
    <div>
      <Banner/>
      <HomeCategory/>
      <CategoryShowCase/>
      <Register/>
      <LocationSpread/>
      <AboutUs/>
      <AppSection/>
    </div>
  )
}

export default Home