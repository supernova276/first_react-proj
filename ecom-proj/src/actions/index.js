 import axios from "axios"
 export const addItemHandler=(item)=>{

    return  dispatch =>{
        dispatch({
        type:"ADD_ITEM",
        payload:{
            item:item
        }
    }
    ) 
 }
}

export const removeItemHandler=(id)=>{
    
    return  dispatch =>{
        dispatch({
        type:"REMOVE_ITEM",
        payload:{
            id:id
        }
    }
    ) 
 }
}

export const clearCartHandler=()=>{
    
    return  dispatch =>{
        dispatch({
        type:"CLEAR_CART",
    }
    ) 
 }
}

export const OrderCartHandler=(callback)=>{

    //this callback passed is mainly to handle the errors as it gives a better view of the errors
    return async(dispatch,getState)=>{
      
        try{
               
            const{auth,cart}=getState()
            console.log("auth id is",auth.localId)

            if(!auth.idToken){

                return callback({
                    error:true,
                    data:{
                        error:"please login to place the order"
                    }
                })
            }    
            const response= await axios.post(`https://testdb-ca8a9-default-rtdb.firebaseio.com/orders/${auth.localId}.json?auth=${auth.idToken}`,
            {...cart})

            dispatch({
                type:"CLEAR_CART"
            })

            return callback({
               error:false,
               data:response.data
        })
        }
        
        catch(error){
    
            return callback({
                error:true,
                ...error.response 
            })
        }
    }
}

export const logout=()=>{

    return (dispatch)=>{
           
        localStorage.removeItem("token")
        dispatch({
             type:"LOGOUT"
        })
    }
}

//we create a store, we declare/dispatch actions(here we basically pass the payload)
// and then we define these actions in the reducers