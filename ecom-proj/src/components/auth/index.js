import { useState } from "react"
import { NavLink, Navigate, useParams,useNavigate} from "react-router-dom"
import axios from "axios"
import Loader from "../UI/Loader"
import { useDispatch } from "react-redux" 
import {signUpwithPasswordandEmail} from "../../actions/auth.js"
import {signInwithPasswordandEmail} from "../../actions/auth.js"
const AuthIndex=()=>{

    const params=useParams()
    const dispatch=useDispatch()
    const navigate=useNavigate()

    const [details,setDetails]=useState({
        email:"",
        password:""
    })
    const[loader,setLoader]=useState(false)

    const handleInput=(e)=>{
         setDetails({
            ...details,
           [ e.target.name]:e.target.value
         })
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        setLoader(true)
        if(params.login==="signup"){
           dispatch(signUpwithPasswordandEmail(details,(data)=>{
             if(data.error){
                 alert("their is some authentication problem")
             }
             else{
                   alert("successfully signedup")
                   navigate('/') 
                //    when we do not want the user to have the functionaluty of the back button
             }
             setLoader(false)
           }))
        }
        else if(params.login==="login"){
            dispatch(signInwithPasswordandEmail(details,(data)=>{
                if(data.error){
                    alert("their is some authentication problem")
                }
                else{
                      alert("successfully logged in")
                      navigate('/') 
                   //    when we do not want the user to have the functionaluty of the back button
                }
                setLoader(false)
              }))

        }
        setLoader(false)
    }
    return (
        <>
        <div className="auth-container">
        <div className="auth-container--box">
            <div className="tab-selector">
                <NavLink exact to={"/login"}><h3>Login</h3></NavLink>
                <NavLink exact to={"/signup"}><h3>Signup</h3></NavLink>
            </div>
            <form autoComplete="off" onSubmit={handleSubmit}>
                <div className="input-wrap">
                    <label htmlFor="email">Email</label>
                    <input 
                        type="text" 
                        name="email" 
                        placeholder="enter email"
                        value={details.email}
                        onChange={handleInput}
                    />
                </div>
                <div className="input-wrap">
                    <label htmlFor="password">Password</label>
                    <input 
                        type="password" 
                        name="password" placeholder="enter password"  
                        value={details.password}
                        onChange={handleInput}
                        />
                </div>
                <div className="button-wrap">
                    <button className="login-btn">
                       {params.login==="login"? "Login" : "signup"}
                    </button>
                </div>
            </form>
        </div>
    </div>
    {loader && <Loader></Loader>}
  </>
    )
}
export default AuthIndex