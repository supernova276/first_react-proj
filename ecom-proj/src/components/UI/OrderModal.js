import Modal from "./Modal.js"
import OrderSuccessImage from "../../assets/icons/order_success.svg"

const OrderModal=({onClose,orderId})=>{
    return (
        <>
        <Modal onClose={onClose}> <div className="order-container">
            <div className="order-container--success">
                <img src={OrderSuccessImage} alt="success" className="img-fluid"></img>
               <div className="message">
                <h1>Order successfly placed</h1>
                <span>Order Id #{orderId}</span>
               </div>
            </div>
        </div></Modal>
        </>
    )
}
export default OrderModal