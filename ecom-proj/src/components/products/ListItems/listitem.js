import AddtoCartIcon from "../../../assets/icons/add_cart.svg"
import Modal from "../../UI/Modal.js"
import {Fragment, useState} from "react"
import{useSelector,useDispatch} from "react-redux"
import { addItemHandler,removeItemHandler } from "../../../actions/index.js"

// pass updateItemTitle
const ListItem=({data})=>{

// const[counter,setCounter]=useState(0)
const[showModal,setModal]=useState(false)
const item=useSelector(state=>state.cart.items.find((item)=>item.id===data.id))
// we get the curren state of a particular item from the store
const dispatch=useDispatch()

const increaseCounter=(e)=>{
    e.stopPropagation()  //here we dont want the event to buble upto modal div
    // addItem(data.id)
    // // setCounter(counter+1)
    dispatch(addItemHandler(data))
}
const decreaseCounter=(e)=>{
    e.stopPropagation()   //same as above
    
    dispatch(removeItemHandler(data.id))
    // if(counter===1)
    //      removeItem(data.id)
        // this ensure that the item is removed only after all its copies are delted
    // setCounter(counter-1<0?0:counter-1)
}
const handleModal=()=>{
    setModal(previousState => !previousState)
}

    return (
        <Fragment>
        <div onClick={handleModal} className={"item-card"}>
            <img className={"img-fluid"}src={`../../assets/${data.thumbnail}`} alt={data.title}></img>
            <div className={"item-card__information"}>
                <div className={"pricing"}>
                    <span>{ `Rs. ${data.discountedPrice}`}</span>
                    <small>
                        <strike> {`Rs. ${data.price}`}</strike>
                    </small>
                </div>
                <div className={"title"}>
                <h3>{data.title}</h3>
                </div>
                {/* <button onClick={()=>{updateItemTitle(data.id)}}>Update the title</button> */}
                {/* the above way of writing functin means the same as the onclick function written */}
            </div>
            <small className={"cart-message"}></small>

            {
              !item || item?.quantity<1?  <button className={"cart-add"} onClick={increaseCounter}>
               <span>Add to Cart</span>
               <img src={AddtoCartIcon} alt="cart-icon"></img>
           </button> :

              <div className={"cart-addon"}>
              <button onClick={decreaseCounter}><span>-</span></button>
              <span className="counter">{item.quantity}</span>
              <button onClick={increaseCounter}><span>+</span></button>
              </div>

            }
        </div>
        {showModal && <Modal onClose={handleModal}>
            <div className="item-card__modal">
                <div className="img-wrap">
                <img className={"img-fluid"}src={`../../assets/${data.thumbnail}`} alt={data.title}></img>
                </div>
                <div className="meta">
                    <h3>{data.title}</h3>
                    <div className="pricing">
                   <span>{ `Rs. ${data.discountedPrice}`}</span>
                    <small>
                        <strike> {`Rs. ${data.price}`}</strike>
                    </small>
                </div>
                <p>{data.description}</p>
                {
               !item || item?.quantity<1?  <button className={"cart-add card-add__modal"} onClick={increaseCounter}>
               <span>Add to Cart</span>
               <img src={AddtoCartIcon} alt="cart-icon"></img>
           </button> :

              <div className={"cart-addon card-addon__modal"}>
              <button onClick={decreaseCounter}><span>-</span></button>
              <span className="counter">{item.quantity}</span>
              <button onClick={increaseCounter}><span>+</span></button>
              </div>

            }
                </div>
            </div>
            </Modal>}
        </Fragment>
    )
}
export default  ListItem