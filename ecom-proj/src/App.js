import Products  from "./components/products/products.js";
import Header from "./components/products/Header/header.js"
import SubHeader from  "./components/products/SubHeader/SubHeader.js"
import { Routes ,Route,Navigate } from 'react-router-dom';
import AuthIndex from "./components/auth/index.js";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { checkIsLoggedIn } from "./actions/auth.js";


const  App=()=> {

  // this should be called only once

  const authState=useSelector(state=>state.auth)
  let dispatch=useDispatch()
  useEffect(()=>{
    dispatch(checkIsLoggedIn())
  },[])

  return(
    <div>
  <Header></Header>
  <SubHeader></SubHeader>
  <Routes>
  {/* <Route path="/login"  element={<AuthIndex></AuthIndex>}></Route> */}
  {/* <Route path="/signup"  element={<AuthIndex></AuthIndex>}></Route> */}


  { 
  !authState.idToken && 
  ["/:login", "/:signup"].map((path, index) => 
        <Route path={path} element={<AuthIndex></AuthIndex>} key={index} />
    )}
  {/* <Route path="/login" element={<Navigate to="/"></Navigate>}></Route>
  <Route path="/signup" element={<Navigate to="/"></Navigate>}></Route> */}
  <Route path="/404" element={<h1>not found</h1>}></Route>
  <Route path='/:category?' element={<Products/>} />
  <Route path="/:?" element={<Navigate to="/404"></Navigate>}></Route>
  </Routes>
  </div>
  )
}
export default App;
