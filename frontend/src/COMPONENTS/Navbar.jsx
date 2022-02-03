import React from 'react'
import '../CSS/navbar.css'
import { Link, NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { logout_user } from '../REDUX/ACTION/Login_Action'
import logo from "../../public/IMAGES/logo.png"
import { useHistory } from 'react-router-dom';

function Navbar(props) {

    const user = useSelector(state => state.user)
    const dispatch = useDispatch()
    const history = useHistory();

    function logout() {
        dispatch(logout_user())
        history.push("/");

    }

    return (
        <nav className="nav_wrapper">

            <div className="nav_logo">
                <Link exact to="/"> <img src={logo} alt="" /></Link>


            </div >

            {user && <p style={{ color: "white" }}>Wellcome <span style={{color:"red",marginLeft:"5px",borderBottom:"1px solid"}}>{user.name}</span> </p>}
            {!user && <span></span>}


            {user && <div className="nav_link">

                <NavLink activeClassName="active" exact to="/About"> About</NavLink>
                <NavLink activeClassName="active" exact to="/Contact"> Contact</NavLink>
                <NavLink activeClassName="active" exact to="/Blogs"> Blogs</NavLink>
                <NavLink activeClassName="active" exact to="/Create_todo">Create Todo</NavLink>
                <NavLink activeClassName="active" exact to="/List_todo"> List Todo</NavLink>
                <button className='logout_btn' onClick={logout}>LOGOUT</button>

            </div>
            }
            {!user &&
                <div className="nav_link">
                    <NavLink activeClassName="active" exact to="/Login"> Login</NavLink>
                    <NavLink activeClassName="active" exact to="/About"> About</NavLink>
                    <NavLink activeClassName="active" exact to="/Contact"> Contact</NavLink>
                    <NavLink activeClassName="active" exact to="/Blogs"> Blogs</NavLink>
                </div>
            }



        </nav >

    )
}

export default Navbar
