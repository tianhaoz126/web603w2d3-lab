import React from 'react';
import { Row, Col } from 'reactstrap';

const Cart = ({ products }) => {
  const cartItems = products.filter(product => product.quantity > 0);

  return (
    <div>
      <h2>Your Cart Items</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          {cartItems.map(product => (
            <Row key={product.id} className="mb-4 align-items-center cart-item">
              <Col sm="2" className="text-center">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  style={{ width: "100px", height: "100px" }}
                />
              </Col>
              <Col sm="6">
                <h5>{product.name}</h5>
              </Col>
              <Col sm="4" className="text-right">
                <p>Quantity: {product.quantity}</p>
              </Col>
            </Row>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
