import axios from 'axios'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import '../CSS/Login.css'
import { login_user } from '../REDUX/ACTION/Login_Action'

function Login() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    function setValue(e) {
        e.target.name === "Email" && setEmail(e.target.value);
        e.target.name === "Password" && setPassword(e.target.value);
    }

    const dispatch = useDispatch()

    function loginCheck() {
        axios.post('http://localhost:5000/login', { email, password }).then(function (res) {
            console.log(res.data);
            if (res.data.status === "ok") {
                dispatch(login_user(res.data.data))
                console.log("login");

            } else {
                alert("User not found")
            }

        })

    }


    return (
        <div className="login_wrapper">
            <h3 className='login_h3'>Login</h3>
            <div className="login_main">
                <input type="text" name="Email" value={email} onChange={function (e) { setValue(e) }} placeholder="Enter Your Email ID" /><br />
                <input type="text" name="Password" value={password} onChange={function (e) { setValue(e) }} placeholder="Enter Your Password" /><br />
                <button className="login_btn" onClick={loginCheck}>Login</button><br /><br />
                <Link exact to="Cr_ac" className='login_link'>CREATE AN ACCOUNT</Link>
            </div>
        </div>
    )
}

export default Login
