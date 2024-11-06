import React from 'react'
import { Link, NavLink } from "react-router-dom"
import "./ListItem.scss"

const ListItem = ({href, content, icon}) => {
  return (
    <li className='list__item'>
        <NavLink to={href}> {icon} {content} </NavLink>
    </li>
  )
}

export default ListItem