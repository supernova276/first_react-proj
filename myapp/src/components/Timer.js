import { useEffect, useState } from "react"

const Timer=()=>{

    const [counter, setCounter]=useState(0)

    useEffect(()=>{

    let timerid=setInterval(() => {
        setCounter(previousValue=> previousValue+1)
    }, 1000)
    //this ifunction is executed when the component is removed from the dom but the setinterval is aleardy
    //registered
    //this is used to deal with memory leask
    return()=>{
        console.log("timer is unmounted")
        clearInterval(timerid)
    }
},[])

return(

    <div>
        <h1>{counter} Seconds</h1>
    </div>
)
}
export default Timer