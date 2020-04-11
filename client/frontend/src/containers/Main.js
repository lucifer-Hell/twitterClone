// this file is responsible for handling routes logic 
import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {Switch , withRouter, Route,useLocation} from 'react-router-dom'
import Home from '../components/Home'
import Auth from '../components/Auth'
import authUser from '../stores/action/auth'
import {clearError} from '../stores/action/error'
import  WithAuth from '../hocs/withAuth'


function Main(props){
   let location=useLocation();
    let clearError=props.clearError
    let {error,currentUser}={props}
   useEffect(()=>{

   },[location.pathname,currentUser])

   
    
   const NewComponent=WithAuth(Home);
    return(
        <Switch>
            <Route exact path="/" >
                <NewComponent />    
            </Route>
               
          
            <Route exact path="/signUp">
                 <Auth heading={"Welcome to warbler"} isAuthenticated={props.currentUser.isAuthenticated} error={props.error} signUp={true} buttonText="Sign Up" />
            </Route> 
            <Route exact path="/login">
                 <Auth authUser={props.authUser} isAuthenticated={props.currentUser.isAuthenticated} error={props.error} signUp={false} heading={"Welcome Back :)"} buttonText="Log In" />
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


export default withRouter(connect(mapStateToProps,{authUser,clearError})(Main))