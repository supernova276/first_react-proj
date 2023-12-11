import Products  from "./components/products/products.js";
import Header from "./components/products/Header/header.js"
import SubHeader from  "./components/products/SubHeader/SubHeader.js"
import { useState } from "react";
import { useSelector,useDispatch} from "react-redux"


const  App=()=> {

  // const[cartItems,setCart]=useState([])
  const items=useSelector(state=>state.items)
  const totalAmount=useSelector(state=>state.totalAmount)
  const dispatch=useDispatch()
  const[eventQueue,setEventQueue]=useState({
    id:"",
    type:""
  })
  //the idea is the function should be invoked at the correct time
  //that is it should be invoked from the child that is producing the same effect
  const handleAddItem=(item)=>{ 
    // let items=[...cartItems]
    // console.log("cart1",cartItems.length)
    // console.log("len of items",items.length)
    // let index=items.findIndex(i=>i.id===item.id)
    // if(index>-1){
    //   items[index]=item
    
    // }
    // else{
    //   items.push(item)
  
    // }
    // setCart([...items])

    dispatch({
      type:"ADD_ITEM",
      payload:{
          item:item
      }
  }
  )
  }
  const handleRemoveItem=(item)=>{

    // let items=[...cartItems]
    // let index=items.findIndex(i=>i.id===item.id)
    // if(items[index].quantity===0){
    //   items.splice(index,1)
    // }
    // else{
    //   items[index]=item;
    // }

    // setCart([...items])
    dispatch({
      type:"REMOVE_ITEM",
      payload:{
          id:item.id
      }
  })
  }

  const handleEventQueue=(id,type)=>{
    console.log({id,type})
    setEventQueue({id,type})
  }


  return(
    <div>
  <Header items={items} totalAmount={totalAmount} onHandleEvent={handleEventQueue}></Header>
  <SubHeader></SubHeader>
  <Products addItem={handleAddItem} removeItem={handleRemoveItem} eventState={eventQueue} ></Products>
  </div>
  )
}
export default App;
