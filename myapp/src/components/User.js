import {useState,useEffect} from "react"
const User=()=>{

    //make sure wether the user is loggedin or not using the usestae hook

    const [isLoggedIn, setIsLoggedIn]=useState(false)

    const handleLogout=()=>{
        localStorage.removeItem("demo-token");
        setIsLoggedIn(false);
    }

    const handleLogin=()=>{
        localStorage.setItem("demo-token",true)
        setIsLoggedIn(true);
    }

    useEffect(()=>{
        const isTokenSet =localStorage.getItem("demo-token");
        setIsLoggedIn(isTokenSet)
        document.title=isTokenSet?"Welcome User":"please Login"
    },[isLoggedIn])
    
    return(
        <div>
            <h1><center>{isLoggedIn?"Welcome User":"please Login"}</center></h1>

            {isLoggedIn?
            <center><button onClick={handleLogout}>Log Out</button></center>:
            <center><button onClick={handleLogin}>Log In</button></center>
            }
        </div>
    )
}

export default User