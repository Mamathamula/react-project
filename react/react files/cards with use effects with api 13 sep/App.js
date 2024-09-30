
import React, { useState, useEffect } from 'react';
import './style.css';
import 'bootstrap/dist/css/bootstrap.css'; 

export default function App() {
  const [state, setState] = useState([]);

  
  useEffect(() => {
    fetch('https://fakestoreapi.com/carts')
      .then((res) => res.json())
      .then((json) => setState(json));
  }, []); 

  return (
    <>
      <div className="container mt-3">
        <div className="row g-4">
          {state.map((list) => {
            return (
              <div className="col-md-4" key={list.id}>
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title text-center">User ID: {list.userId}</h5>
                    <p className="card-description text-center">Date: {list.date}</p>
                    <p className="card-description text-center">
                      Products:
                      <ul>
                        {list.products.map((product, index) => (
                          <li key={index}>
                            Product ID: {product.productId}, Quantity: {product.quantity}
                          </li>
                        ))}
                      </ul>
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
