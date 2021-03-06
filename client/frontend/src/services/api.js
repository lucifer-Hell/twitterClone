// this will be defualt generic api to get data
import axios from 'axios'

function responseError(message,code){
        return ({message:message,errorCode:code})
}


async function apiCall(options){
        try{    
               let response=await axios({baseURL:"http://localhost:8081/",...options}) 
        
                return response;

        }   catch(err){
                
                //     console.log("status code:"+err.response.status)
                //     console.log("error by axios :"+JSON.stringify(err.toJSON(),null,2))
                       
                    throw new responseError(err.response.data.Error,err.response.status) ;
        }         
    

}


export default apiCall;