import { getLoginUser } from 'package-test-modules'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const token = localStorage.getItem("token")
    const { isSuccess } = useSelector(state => state.auth)
    console.log(isSuccess)
    const handleSubmit = (e) => {
        e.preventDefault()
        const loginData = {
            email: email,
            password: password
        }
        dispatch(getLoginUser(loginData))
        setEmail("")
        setPassword("")
    }

    useEffect(() => {
        if (token && isSuccess) {
            navigate("/dashboard")
        } else {
            navigate("/")
        }
    }, [token, isSuccess])


    return (
        <>
            <div class="container">
                <h1>Login form</h1>
                <form class="form">
                    <input type="email" placeholder="Enter email" value={email} name='email' onChange={(e) => setEmail(e.target.value)} />
                    <input type="password" placeholder="Enter password" value={password} name='password' onChange={(e) => setPassword(e.target.value)} />
                    <button
                        onClick={handleSubmit}
                    >Login Response</button>

                </form>
            </div >
        </>
    )
}

export default Login