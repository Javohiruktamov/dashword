import React, { useContext } from 'react'
import { DarkmodeContext } from '../../Components/Context/DarkModeContext'
import "./Ideas.scss"
const Ideas = () => {
  let {darkMode} = useContext(DarkmodeContext)

  return (
    <div className={`ideas ${darkMode == "dark" && "dark"}`}>
        <h1>Ideas</h1>
    </div>
  )
}

export default Ideas