import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


function SingleProductScreen(){
    let {productId}=useParams()
    const [soldStatus,setSoldStatus]=useState("In Stock")

    return (
        
        <div className='Main'>
            
            {productId} 
            {soldStatus}
            <button onClick={()=>{return setSoldStatus("Sold out")}}></button>
        </div>
    );
}
export default SingleProductScreen;