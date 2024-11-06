import React, { useContext } from 'react'
import { DarkmodeContext } from '../../Components/Context/DarkModeContext'
import "./Contact.scss"

const Contact = () => {
  let {darkMode} = useContext(DarkmodeContext)

  return (
    <div className={`contact ${darkMode == "dark" && "dark"}`}>
        <h1>Contact</h1>
    </div>
  )
}

export default Contact