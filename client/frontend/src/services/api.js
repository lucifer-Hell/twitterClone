// this will be defualt generic api to get data
import axios from 'axios'

function responseError(message,code){
        return ({message:message,errorCode:code})
}


async function apiCall(method,url,data,headers=null){
        try{    
                let response
                if(headers===null)
                { response=await axios({baseURL:"http://localhost:8081/",method,url,data}) }
                else{
                 response=await axios({baseURL:"http://localhost:8081/",method,url,data,headers}) 
                        
                }
                return response;

        }   catch(err){
                
                //     console.log("status code:"+err.response.status)
                //     console.log("error by axios :"+JSON.stringify(err.toJSON(),null,2))
                       
                    throw new responseError(err.response.data.Error,err.response.status) ;
        }         
    

}


export default apiCall;