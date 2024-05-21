import React from 'react'
import Cart from './Cart'
import './Cart.css'

// function Home({products}) {
//   return (
//     <div className="cart-div">
//                 {products.map((product) => (
//                   <Cart
//                     key={product.id}
//                     id={product.id}
//                     image={product.image}
//                     name={product.name}
//                     price={product.price}
//                     rating={product.rating}
//                   />
//                 ))}

//               </div>
//   )
// }

// export default Home

import { Link } from 'react-router-dom';

function Home({ products }) {
  return (
    <div className="cart-div">
      {products.map((product) => (
        <div key={product.id}>
          <div className="product">
            <img src={product.image} alt={product.name} />
            <div>{product.name}</div>
            <div>{product.price}</div>
            <div>{product.rating}</div>
            <Link to={`/productDetails/${product.id}`}><button>See More</button></Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Home;
