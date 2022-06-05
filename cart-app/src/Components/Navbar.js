import React from 'react'
import './Navbar.css'

const Navbar = ({setShow, size}) =>{
    return(
        <nav>
            <div className='nav_box'>
                <span className='my_shop' onClick={()=>setShow(true)}>My Cart</span>
                <div className='cart' onClick={()=>setShow(false)}>  
                    <span><i className="fa-solid fa-cart-shopping"></i></span>
                    <span className='productCount'>{size}</span>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;