import React from 'react'
import './Card.css'
import Button from '../Button/Button'
function Card({ image ="", title="", para="", price="", restaurant="" }) {


  return (
    <>
      <div className=" container-of-card">

        <img src={image} alt="" className="image" />
        <div className="content-of-card">
          <div className="title">{title}</div>
          <div className="para-for-card">{para}</div>
          <h>{restaurant}</h>
          <div className="btn-for-card">
            <Button text='View' />
            <p><i>Price: <span>{price ? price : 'Upcoming'}</span></i></p>
          </div>
        </div>

      </div>
    </>
  )
}

export default Card