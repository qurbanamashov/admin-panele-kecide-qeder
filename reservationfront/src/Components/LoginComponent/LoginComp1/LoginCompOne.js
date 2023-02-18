import axios from 'axios'
import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../../Context/AuthContext'
import "./LoginCompOne.scss"
function LoginCompOne() {
    const [credentials, setCredentials] = useState({
        username: undefined,
        password: undefined,
    })
    const { loading, error, dispatch } = useContext(AuthContext)
    const navigate = useNavigate() 
    const hendleChange = (e) => {
        setCredentials(prev => ({ ...prev, [e.target.id]: e.target.value }))
    }
    const handleClick = async e => {
        e.preventDefault()
        dispatch({type:"LOGIN_START"})
        try {
            const res = await axios.post("/auth/login", credentials);
            dispatch({type:"LOGIN_SUCCESS" , payload : res.data})
            navigate("/")
        } catch (err) {
            dispatch({type:"LOGIN_FAILURE" , payload : err.response.data})
        }
    }
    return (
        <section className='LoginComp'>
            <div className='loginComp_width'>
                <div className='LoginComp_box'>
                    <h2> Log in</h2>
                    <div className='Input_Login'></div>
                    <input type={"text"} onChange={hendleChange} placeholder={"username"} id="username" />
                    <input type={"password"} onChange={hendleChange} placeholder={"password"} id="password" />
                    <button disabled={loading} onClick={handleClick}>Entrance</button>
                    {error && <p>{error.message}</p>}
                </div>
            </div>
        </section>
    )
}

export default LoginCompOne