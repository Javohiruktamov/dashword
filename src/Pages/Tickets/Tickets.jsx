import React, { useContext } from 'react'
import "./Tickets.scss"
import { DarkmodeContext } from '../../Components/Context/DarkModeContext'

const Tickets = () => {
  let {darkMode} = useContext(DarkmodeContext)

  return (
    <div className={`tickets ${darkMode == "dark" && "dark"}`}>
      <div className="container">
        
      </div>
    </div>
  )
}

export default Tickets