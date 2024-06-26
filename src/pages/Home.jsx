import React from 'react'
import Headers from '../components/Headers/Headers'
import Banner from '../components/BasicComponent/Banner'
import OrderOnline from '../components/OrderOnline/OrderOnline'
import Restaurents from '../components/Restaurent/Restaurents'


function Home() {
  return (
    <div>
        <Headers />
        <Restaurents />
        <Banner  />
        <OrderOnline />
    </div>
  )
}

export default Home