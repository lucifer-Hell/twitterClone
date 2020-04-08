// this file is responsible for handling routes logic 
import React from 'react'
import {connect} from 'react-redux'
import {Switch , Redirect ,withRouter, Route} from 'react-router-dom'
import Home from '../components/Home'
import Auth from '../components/Auth'
function Main(){
    return(
        <Switch>
            <Route exact path="/">
                 <Home />
            </Route>
            <Route exact path="/signUp">
                 <Auth heading={"Welcome to warbler"} signUp buttonText="Sign Up" />
            </Route> 
            <Route exact path="/login">
                 <Auth heading={"Welcome Back :)"} buttonText="Log In" />
            </Route>
        </Switch>
    )
}
function mapStateToProps(state){
    return (
        {
            ...state
        }
    )
}

export default withRouter(connect(mapStateToProps)(Main))