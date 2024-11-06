import React, { useContext } from 'react'
import "./Header.scss"
import { AuthContext } from '../Context/AuthContext'
import { useNavigate, useLocation } from 'react-router-dom'
import { DarkmodeContext } from '../Context/DarkModeContext'

const Header = () => {


  let { setToken } = useContext(AuthContext)
  let { setDarkMode, darkMode } = useContext(DarkmodeContext)
  let navigate = useNavigate()
  function handleLogOut() {
    setToken(null)
    navigate("/")
  }
  const handleChangeMode = e => {
    setDarkMode(e.target.value)
    localStorage.setItem("dark", JSON.stringify(e.target.value))
  }
  let location = useLocation()
  console.log(darkMode);
  return (
    <header className={`header ${darkMode == "dark" && "dark"}`}>
      <h1> {location.pathname == "/" ? "OVERVIEW" : location.pathname.slice(1).toUpperCase()} </h1>
      <span>
        <button onClick={handleLogOut}>Log Out</button>
        <select defaultValue={darkMode} onChange={handleChangeMode}>
          <option value="light">Light</option>
          <option value="dark">Dark</option>
        </select>
      </span>
    </header>
  )
}

export default Header