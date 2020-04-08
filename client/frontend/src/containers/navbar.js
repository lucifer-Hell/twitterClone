import React from 'react'
import {Link } from 'react-router-dom'
import {connect} from 'react-redux'
import './navbar.css'
function Navbar(props)
{
    return(
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
       
             <Link to ="/" className="navbar-brand " >VIT SHORTS</Link>
       
            <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          
                   <ul className="navbar-nav navbar-right mr-auto mt-2 mt-lg-0 " id="navOptions">
                        <li classNameName="nav-item ">
                        <Link to="/signUp" style={{textDecoration:"none"}}><span className="nav-link">Sign Up</span></Link>
                        </li>
                        <li className="nav-item ">
                        <Link to="/logIn" style={{textDecoration:"none"}}><span className="nav-link">Log In</span></Link>
                        </li>
                    </ul>
            </div>
      </nav>
      
    )
}

function mapStateToProps(state){
    return(
        {
           ...state
        }
    )
}
export default connect(mapStateToProps)(Navbar);