import React from 'react'
import {Link } from 'react-router-dom'
import {connect} from 'react-redux'
import './navbar.css'
function Navbar(props)
{
    const [isAuthenticated,userName]=[props.isAuthenticated,props.userName]
    console.log(isAuthenticated)
  let options=  (isAuthenticated===true)?
            (
        <ul className="navbar-nav navbar-right mr-auto mt-2 mt-lg-0 " id="navOptions">
        <li className="nav-item ">
        
        <Link to="/dashboard" style={{textDecoration:"none"}}><span className="nav-link">Dashboard</span></Link>
        </li>
        <li className="nav-item ">
        <Link to="/new" style={{textDecoration:"none"}}><span className="nav-link">Add New Message</span></Link>
        </li>
    </ul>           ): (
            <ul className="navbar-nav navbar-right mr-auto mt-2 mt-lg-0 " id="navOptions">
                        <li className="nav-item ">
                        <Link to="/signUp" style={{textDecoration:"none"}}><span className="nav-link">Sign Up</span></Link>
                        </li>
                        <li className="nav-item ">
                        <Link to="/logIn" style={{textDecoration:"none"}}><span className="nav-link">Log In</span></Link>
                        </li>
                    </ul>
            )
  
  

    return(
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
       
             <Link to ="/" className="navbar-brand " >VIT SHORTS</Link>
       
            <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                   {options}
            </div>
      </nav>
      
    )
}

function mapStateToProps(state){
    return(
        {
           isAuthenticated:state.currentUser.isAuthenticated,
           username:state.currentUser.userName
        }
    )
}
export default connect(mapStateToProps)(Navbar);