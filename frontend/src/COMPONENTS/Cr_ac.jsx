import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Cr_ac() {

    const [name, setName] = useState("")
    const [address, setAddress] = useState("")
    const [age, setAge] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    function setValue(e) {
        e.target.name == "Name" && setName(e.target.value);
        e.target.name == "Address" && setAddress(e.target.value);
        e.target.name == "Age" && setAge(e.target.value);
        e.target.name == "Email" && setEmail(e.target.value);
        e.target.name == "Password" && setPassword(e.target.value);
    }

    //Send data in database----------
    function CreateAccount() {

        var info = { name, address, age, email, password }

        axios.post("http://localhost:5000/creat_account", info).then(function (res) {
            alert(res.data)
        })

    }

    return (

        <div>
            <div className="login_wrapper">
                <h3 className='login_h3'>Create An Account</h3>

                <div className="cr_main">
                    <input type="text" name="Name" value={name} onChange={function (e) { setValue(e) }} placeholder="Enter Your Name" /><br />
                    <input type="text" name="Address" value={address} onChange={function (e) { setValue(e) }} placeholder="Enter Your Address" /><br />
                    <input type="number" name="Age" value={age} onChange={function (e) { setValue(e) }} placeholder="Enter Your Age" /><br />
                    <input type="text" name="Email" value={email} onChange={function (e) { setValue(e) }} placeholder="Enter Your Email ID" /><br />
                    <input type="text" name="Password" value={password} onChange={function (e) { setValue(e) }} placeholder="Enter Your Password" /><br />

                    <button className="login_btn" onClick={CreateAccount}>Create</button><br /><br />
                    <Link exact to="Login" className='login_link'>Login Page</Link>
                </div>
            </div>
        </div>
    )
}

export default Cr_ac
