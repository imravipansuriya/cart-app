import React, { useState } from "react";
import list from '../Data'
import Card from "./Card";
import './Amazon.css'

const Amazon = ({handleClick}) =>{
       
    
    return(
           <section className="container">
         <div className="row">
         {
                list.map((item)=> <Card key={item.id} item={item} handleClick={handleClick}/>)
                
            }
         </div>
        </section>
       
    )
}
export default Amazon;