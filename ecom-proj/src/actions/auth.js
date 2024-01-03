import axios from "axios"
 export const signUpwithPasswordandEmail= (details,callback)=>{

    return async(dispatch)=>{

        try
        {  
            const response=await axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyD7ZABbwt0ExCPDZsGr2Fzxa0M2j7wv1Pk`,
         { email:details.email, password:details.password,returnSecureToken:true})

         dispatch({
            type:"SIGNUP",
            payload:response.data
         })
        localStorage.setItem("token",response.data.idToken)

     return callback(response.data)
     }
         catch(error){
            console.log(error.response)
            return callback({
                error:true,
                response:error.response
            })
         }

    }
}

export const signInwithPasswordandEmail=(details,callback)=>{

    return async (dispatch)=>{

        try{
            const response=await axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyD7ZABbwt0ExCPDZsGr2Fzxa0M2j7wv1Pk`,
            { email:details.email, password:details.password,returnSecureToken:true})

            dispatch({
                type:"SIGNIN",
                payload:response.data
             })

        localStorage.setItem("token",response.data.idToken)

         return callback(response.data)
        }
        catch(error){
            console.log(error.response)
            return callback({
                error:true,
                response:error.response
            })
        }
    }


}

export const checkIsLoggedIn=()=>{

    return async(dispatch)=>{

        try{
            let token=localStorage.getItem("token")

            if(!token)return;

            const response=await axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=AIzaSyD7ZABbwt0ExCPDZsGr2Fzxa0M2j7wv1Pk`,
            { idToken:token})

            dispatch({
                type:"SIGNIN",
                payload:{
                   idToken:token,
                   localId:response.data.users[0].localId,
                ...response.data}
             })
        }
        catch(error){
            console.log(error.response)
        }

    }
}