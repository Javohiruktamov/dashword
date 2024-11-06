import React, { useContext, useRef } from 'react'
import { AuthContext } from '../../Components/Context/AuthContext'

const Login = () => {
    let emailRef = useRef(null)
    let passwordRef = useRef(null)
    let {setToken} = useContext(AuthContext)

  const  handleSubmit = e => {
    e.preventDefault()

    let data = {
        email: emailRef.current.value,
        password: passwordRef.current.value
    }
    fetch("https://reqres.in/api/login", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-type": "application/json"
        }
    })
    .then(res => res.json())

    .then(data => {
        if(data.token){
            setToken(data.token)
        }else{
            alert("Incorrect LOGIN or PASSWORD")
        }
    })
  }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input ref={emailRef} type="text" /><br /><br />
                <input ref={passwordRef} type="password" /><br /><br />
                <button>Login</button>
            </form>
        </div>
    )
}

export default Login