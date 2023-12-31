import {useEffect,useState} from "react"
import ListItem from "./ListItems/listitem.js"
import Loader from "../UI/Loader.js"
import axios from "axios"
import Form from "./Form.js"
import {useParams,useNavigate, useLocation} from "react-router-dom"


const Products=()=>{
  const[items,setItem]=useState([])

  const[loader,setloader]=useState(true)
  const params=useParams()
  const history=useNavigate()
  const {search}=useLocation();
  const queryParams=new URLSearchParams(search).get("search")

  const handleNotFound=()=>{
    history("/404")
  }
  
  // const [presentItems,setPresentItems]=useState([])

  // this item is not being used as we are fetching the data using an api

//  useEffect(()=>{
//              fetch("https://testdb-ca8a9-default-rtdb.firebaseio.com/items.json").then(response=>response.json())
//              .then(response=>console.log(response))
//              .catch(error=>console.log(error))
              
      

//  },[])



useEffect(()=>{  //never make the callback func as async we can make the inner func as aysnc

  async function fun(){


    try{
      let slug=`items.json`
      console.log(params.category)
      if(params.category){
         slug=`items-${params.category}.json`
      }
      if(queryParams && queryParams!="signup" && queryParams!=="login"){
        slug+=`?search=${queryParams}`
      }

    const {data}= await axios.get(`https://testdb-ca8a9-default-rtdb.firebaseio.com/${slug}`)
    console.log(slug)
    if(!data) {
      handleNotFound();
    return;}

    const transformedData=data.map((item,index)=>{
      return{
        ...item,
        id:index
      }
    })
    setloader(false)
   setItem(transformedData)
  }
catch(error){
  setloader(false)
     console.log(error)
  }

//   console.log("rendered")
//   axios.get("https://testdb-ca8a9-default-rtdb.firebaseio.com/items.json")
//   .then(response=>{
//     const data=response.data;
//     const transformedData=data.map((item,index)=>{
//       return{
//         ...item,
//         id:index
//       }
//     }
//   )
//   setItem(transformedData)
// }).catch(error=>console.log(error))
  }
  fun();
  return ()=>{
    setItem([])
    setloader(true)
  }
},[params.category,queryParams])

//////////////////////////////////////////////////updating title/////////////////////////////////////////////////////
// const updateItemTitle =async (itemId)=>{
//   console.log(itemId)
//   const title=`some upadted title`
//   try{
//     await axios.patch(`https://testdb-ca8a9-default-rtdb.firebaseio.com/items/${itemId}.json`,{
//       title:title
//     })
//     let data=[...items]
//     let index=data.findIndex(item=>item.id===itemId)
//     data[index]['title']=title

//     setItem(data)

//   }
//   catch(error){
//     console.log(error)
//   }


// }
///////////////////////conditional rendering///////////////////////////////////////

return(
  <>
  <div className="product-list">
    <div className="product-list--wrapper">
      {
        items.map((item)=>{
          // updateItemTitle={updateItemTitle}
          return (<ListItem data={item} key={item.id}></ListItem>)
        })
      }
      {/* {[<ListItem data={items[0]}></ListItem>,<ListItem data={items[1]}></ListItem>,
    <ListItem data={items[2]}></ListItem>]} */}

    </div>
  </div>
  {loader && <Loader></Loader>}
  </>

)





/////////////////////////////////////////from part////////////////////////////////////////////

// const[item,setItem]=useState({

//   id:0,
//   title:"random item1",
//           price:450,
//           discount:340,
//           thumbnail:"placeholder.png"

// })

//   const handleInput=(e)=>{
//     setItem({
//       ...item,
//       [e.target.name]:e.target.value
//     })
//   }

  
//   const submitForm=(e)=>{
//     e.preventDefault()
// if(item.discount>item.price)alert("discounted price cant be greater")

//   }
//     return (
//       <div className="product-wrapper">
//         <Form item={item} onChangeInput={handleInput} onFormSubmit={submitForm}></Form>
//         <div>
//           <div>
//             <ListItem data={item}></ListItem>   
//             {/* here data becomes the key of the props and in the above case item becomes the key of the prips */
//             /* here the onchanginput function is passed as a prop*/}
//           </div>
//         </div>

//       </div>
//     )
}
export default Products