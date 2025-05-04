//this page is only for understanding Gustavs leessons, not relevant for assignment so you can ignore it
//but I will need this later for my allotment page
//onChange - eventhandler primärt vid form element
//triggers a function every time the value changes 
import { useState } from "react";

function Onchange() {
    const [name, setName] = useState("Gäst"); //"gäst" är default värde
    const [quantity, setQuantity] = useState(0);
    const [comment, setComment] = useState();
    const [payment, setPayment] = useState("");
    const [shipping, setShipping] = useState("Pick up");
    
    function handleNameChange(e) {
        setName(e.target.value);
    }

    const handleQuantitychange = (e) => {
        setQuantity(e.target.value);
    }
    
    const handleCommentChange = (e) => {
        setComment(e.target.value);
    }

    const handlePaymentChange = (e) => {
        setPayment(e.target.value);
    }

    const handleRadioChange = (e) => {
        setShipping(e.target.value);
    }

    return <div>
            <h2>Checkout</h2>
            <input type="text" value={name} onChange={handleNameChange}/>
            <p>Name : {name}</p>

            <input type="number" value={quantity} onChange={handleQuantitychange}/>
            <p>Quantity: {quantity}</p>

            <textarea value={comment} placeholder="Enter delivery instructions" onChange={handleCommentChange}></textarea>
            <p>Comment: {comment}</p>

            <select value={payment} onChange={handlePaymentChange}>
                <option value="">Select an option</option>
                <option value="Swish">Swish</option>
                <option value="cash">Cash</option>
                <option value="Labour">Hard work at my allotment, mostly digging</option>
            </select>
            <p>Payment chosen: {payment}</p>

            <label>
                <input type="radio" value="Pick up" checked={shipping === "Pick up"} onChange={handleRadioChange}/>
                Pick up
            </label>
            <br />
            <label>
                <input type="radio" value="Delivery" checked={shipping === "Delivery"} onChange={handleRadioChange}/>
                Delivery
            </label>
            <p>Shipping: {shipping}</p>
        </div>;
}

export default Onchange;