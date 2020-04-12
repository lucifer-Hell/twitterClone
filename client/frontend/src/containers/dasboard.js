import React from 'react'
import DisplayMessage from '../components/displayMessage'
import NewMessage from '../components/newMessage'
import {connect} from 'react-redux'
import {BrowserRouter as Router,Route,Switch ,Link,withRouter} from 'react-router-dom'
// this will be the container 
import handlePosts from '../stores/action/messages'
function Dashboard(props){

    console.log(props)
  function addPost(msg){
     
       /// task and data object would be like
                    // data:{
                    //     userDetails:{id,token}
                    //     message:{message}
                    // }
        // task:addPost
      let data={
          userDetails:{id:props.currentUser.user.id,token:props.currentUser.user.token},
          text:msg
      }
      // it will returned as thunk prop dont forget that 
        console.log( props.handlePosts("addPost",data))
      
      console.log(msg)
      
  }

    return (    
                <Router>
                <Switch>
                       
                        <Route exact path="/new">
                        <NewMessage addPost={addPost} />
                        </Route>
                        <Route  path="/" >
                        < DisplayMessage />

                        </Route>
                </Switch>
                </Router>
          

    )

  
}




    function mapStateToProps(state){
        return ({...state})
    }
    
  export default withRouter(connect(mapStateToProps,{handlePosts})(Dashboard))
    






 //withRouter(map);