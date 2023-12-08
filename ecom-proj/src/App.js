import Products  from "./components/products/products.js";
import Header from "./components/products/Header/header.js"
import SubHeader from  "./components/products/SubHeader/SubHeader.js"
import { useState } from "react";


const  App=()=> {

  const[cartItems,setCart]=useState([])

  const[eventQueue,setEventQueue]=useState({
    id:"",
    type:""
  })

  //the idea is the function should be invoked at the correct time
  //that is it should be invoked from the child that is producing the same effect
  const handleAddItem=(item)=>{ 
    let items=[...cartItems]
    console.log("cart1",cartItems.length)
    console.log("len of items",items.length)
    let index=items.findIndex(i=>i.id===item.id)
    if(index>-1){
      items[index]=item
    
    }
    else{
      items.push(item)
  
    }
    setCart([...items])
  }
  const handleRemoveItem=(item)=>{

    let items=[...cartItems]
    let index=items.findIndex(i=>i.id===item.id)
    if(items[index].quantity===0){
      items.splice(index,1)
    }
    else{
      items[index]=item;
    }

    setCart([...items])
  }

  const handleEventQueue=(id,type)=>{
    console.log({id,type})
    setEventQueue({id,type})
  }
  return(
    <div>
  <Header count={cartItems.length} items={cartItems} onHandleEvent={handleEventQueue}></Header>
  <SubHeader></SubHeader>
  <Products addItem={handleAddItem} removeItem={handleRemoveItem} eventState={eventQueue}></Products>
  </div>
  )
}
export default App;
