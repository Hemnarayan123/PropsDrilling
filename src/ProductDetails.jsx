import React from 'react';
import { useParams } from 'react-router-dom';
import './Cart.css'

function ProductDetails({ products }) {
  const { productId } = useParams();
  const product = products.find(product => product.id === parseInt(productId));

  return (
    <div>
    <h2>Product Details</h2>
    {product ? (
      <div className="product-details">
        <img src={product.image} />
        <div className="details">
          <h3>{product.name}</h3>
          <p>Price: ${product.price}</p>
          <p>Rating: {product.rating}</p>
        </div>
      </div>
    ) : (
      <p>Product not found.</p>
    )}
  </div>
  );
}

export default ProductDetails;
