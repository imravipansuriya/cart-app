import React from "react";
import './Card.css'

const Card = ({item, handleClick}) =>{
    const {id, title, detail, price, img} = item;
    return( 
      <div className="col-lg-4">
            <div className="card" key={id} style={{width: '18rem'}}>
            <div className="card-img-top">
                <img className="img-fluid" src={img} alt=""/>
            </div>
            <div className="details">
                <p>{title}</p>
                <p>{detail}</p>
                <p>Rs {price}</p>
                <button className="btn" onClick={() => handleClick(item) }>Add to Cart</button>
            </div>
        </div>
      </div>
    )
}

export default Card;