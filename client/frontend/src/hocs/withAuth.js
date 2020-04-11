import React , {Component} from 'react'
import {connect} from 'react-redux'

 function WithAuth(Comp){
     class HOC extends React.Component{
        
        render(){
                    
                    if(this.props.isAuthenticated){
                        return (<div>Sucess!</div>)
                    }
                    else{
                        return (
                            <Comp {...this.props} />
                    ) 

                    }
                   
          
        }
    }
    
    function mapStateToProps(state){
        return(
            {
            isAuthenticated:state.currentUser.isAuthenticated
        }
        )
    }
    
    return connect(mapStateToProps,null)(HOC)


}

export default WithAuth