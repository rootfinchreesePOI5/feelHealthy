import React from 'react'
import Hero from '../Components/Hero'
import SpecialityMenu from '../Components/SpecialityMenu'
import TopDoctors from '../Components/TopDoctors'
import Banner from '../Components/Banner'

const Home = () => {
  return (
    <div className='flex flex-col gap-20'>
      <Hero /> 
      <SpecialityMenu/>
      <TopDoctors/>
      <Banner/>
    </div>
  )
}

export default Home
