import React from 'react'
import './Restaurent.css'
import Cards from '../Cards/Cards'
import Banner from '../BasicComponent/Banner'


function Restaurent({text,data}) {
  return (
    <div>
        
        <h1 className='HeadingofRestaurent'>{text}</h1>
        <Banner lower = 'true' upper= '' />
        <Cards data = {data} />
    </div>
  )
}

export default Restaurent