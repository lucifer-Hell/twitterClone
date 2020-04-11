// this will be landing page

import React from 'react'
import {withRouter, Link } from 'react-router-dom'

const Home=(props)=>{
    return(
        <div>
         <Link to=  "/logIn" >
        <button type ="button" className="btn btn-primary" >
            Login
        </button>

       </Link>
        <br/> 
        OR 
        <br/>
        <Link to="/signUp">
            <button type="button" className="btn btn-secondary">
                Sign Up
            </button>
        </Link>
        </div>

    )
}

export default withRouter(Home)