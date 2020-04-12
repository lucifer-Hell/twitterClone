import React, { useEffect, useState } from 'react'
import DisplayMessage from '../components/displayMessage'
import NewMessage from '../components/newMessage'
import {connect} from 'react-redux'
import {BrowserRouter as Router,Route,Switch ,useHistory,withRouter} from 'react-router-dom'
// this will be the container 
import handlePosts from '../stores/action/messages'
function Dashboard(props){

  let[posts,setPosts] =useState(props.userPosts)
  useEffect(()=>{
    console.log("re-render")
   
  },[posts])

  function removeMsg(args){
    debugger;
    let data={   
      userDetails:{id:props.currentUser.user.id,token:props.currentUser.user.token},
      ...args
     }
     props.handlePosts("deleteMsg",data)
     
     
  }
 
   function getMessages(){
     debugger;
      let data={
        userDetails:{id:props.currentUser.user.id,token:props.currentUser.user.token}
      }
      props.handlePosts("getAllMsgs",data)
    }
  
     
  async function addPost(msg){
     
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
   try{

    let response= await props.handlePosts("addPost",data)
      response.then(()=>{
          getMessages();
      })
    setPosts(props.userPosts)

   }catch(err){

   }
   // it will returned as thunk prop dont forget that 
    
  
   
}

  
  

    return (    
                <Router>
                <Switch>
                       
                        <Route exact path="/new">
                        <NewMessage addPost={addPost} />
                        </Route>
                        <Route  path="/" >
                       {
                         props.messages.userPosts.map((data)=>{

                           return ( < DisplayMessage data={data} removeMsg={removeMsg} key={data._id}  id={props.currentUser.user.id} />)


                         })
                       }
              <br></br> 
              Click to refresh tweets:         
              <button onClick={getMessages}>GET NEW MSGS</button>
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