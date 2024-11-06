import React from 'react'
import "./Card.scss"

const Card = ({img,title,email, red, green, blue}) => {
  return (
    <div className={`card ${red || blue || green}`}>
        <img src={img} alt="" />
        <h3>{title}</h3>
        <p>{email}</p>
    </div>
  )
}

export default Card