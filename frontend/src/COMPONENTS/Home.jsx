import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <div>
            <h1>Home page</h1>
            <Link to="/Create_todo">CRATE TODO</Link> <br /><br />
            <Link to="/List_todo">LIST TODO</Link>
            
        </div>
    )
}

export default Home
