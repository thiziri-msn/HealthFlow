import React from 'react'
import Banner from '../components/Banner'
import Header from '../components/Header'
import SpecialityMenu from '../components/SpecialityMenu'
import TopDoctors from '../components/TopDoctors'


const Home = () => {
  return (
    <div>
      <Header />
      <SpecialityMenu />
      <TopDoctors />
      <Banner />
      {/**********  Vert très doux **********/}

    </div>
  )
}

export default Home
