import React from 'react'
import LoginCompOne from '../../Components/LoginComponent/LoginComp1/LoginCompOne'
import Footer from '../../Layouts/Footer/Footer'
import Navbar from '../../Layouts/Navbar/Navbar'

function Login() {
    return (
        <>
            <Navbar />
            <LoginCompOne/>
            <Footer />
        </>
    )
}

export default Login