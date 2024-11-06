import React from 'react'
import "./CardWrapper.scss"

const CardWrapper = ({children}) => {
  return (
    <div className='card__wrapper'>
        {children}
    </div>
  )
}

export default CardWrapper