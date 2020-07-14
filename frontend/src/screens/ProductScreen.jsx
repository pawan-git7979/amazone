import React from "react";
import data from "../data";
import { Link } from "react-router-dom";

function ProductScreen(props){
    console.log(props.match.params.id);
    const product= data.products.find(x=> x._id=== props.match.params.id);
    return(
        <div  >
        <div className="back-to-result"> 
        <Link to="/" >Back To Result</Link>
        </div>
        <div className="details ">
            <div className="details-image"> 
            <img src={product.images} alt = " image "/> 
           </div> 
           <div className="details-info">
              <ul>
                  <li>
                      <h4>{product.name} </h4>
                  </li>               
                  <li>
                         {product.rating} stars ({product.numReviews} Reviews)
                  </li>
                  <li>
                     price: <b> ${product.price}</b>
                  </li>
                  <li>
                  Description
                  
                  <div>
                      {product.description}
                  </div>
                  </li>
              </ul>
          </div>  
          <div className="details-action">
           <ul>
               <li>
                   price: ${product.price}
               </li>
               <li>
                   state: {product.state}
               </li>
               <li>
                   Qty: <select >
                       <option >1</option>
                       <option >2</option>
                       <option >3</option>
                       <option >4</option>
                       <option >5</option>
                   </select>
               </li>
               <li>
                   <button class="button">Add To Cart</button>
               </li>
           </ul>
          </div>



        </div>
    
    
    
    
    </div>
    );
}
export default ProductScreen; 