import React from 'react'
import './Card.css'

const Card = (props) => {
  return (
    <div className='card'>
      <img src={props.banner}/>
      <h3>{props.title}</h3>
      <p>{props.price}</p>
      <p>{props.rating} </p>
    </div>
  )
}

export default Card
