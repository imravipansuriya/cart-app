import React, {useState, useEffect} from "react";
import './Cart.css'

const Cart = ({cart, setCart, handleChange}) =>{
    const [price, setPrice] = useState(0);

    const handleRemove = (id) => {
      const arr = cart.filter((item) => item.id !== id);
      setCart(arr);
      handlePrice();
    };
  
    const handlePrice = () => {
      let ans = 0;
      cart.map((item) => (ans += item.amount * item.price));
      setPrice(ans);
    };
  
    useEffect(() => {
      handlePrice();
    });
    return (
        <>
        <article>
      {cart.map((item) => (
        <div className="cart_box" key={item.id}>
          <div className="cart_img">
            <img src={item.img} alt="" />
            <p>{item.title}</p>
          </div>
          <div>
            <button className="btn btn-success m-1" onClick={() => handleChange(item, 1)}>+</button>
            <button className="btn">{item.amount}</button>
            <button className="btn btn-danger m-1" onClick={() => handleChange(item, -1)}>-</button>
          </div>
          <div> 
            <span>Rs {item.price}</span>
            <button className="btn m-1" onClick={() => handleRemove(item.id)}>Remove</button>
          </div>
        </div>
      ))}
      <div className="total">
        <span>Total Price of your Cart</span>
        <span>Rs - {price}</span>
      </div>
    </article>
        </>
    );
}

export default Cart;