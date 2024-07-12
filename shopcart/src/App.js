import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  state = {
    products: [
      { id: 1, name: "Unisex Cologne", image: "/products/cologne.jpg", quantity: 0 },
      { id: 2, name: "Apple iWatch", image: "/products/iwatch.jpg", quantity: 0 },
      { id: 3, name: "Unique Mug", image: "/products/mug.jpg", quantity: 0 },
      { id: 4, name: "Men's Wallet", image: "/products/wallet.jpg", quantity: 0 }
    ],
    totalItems: 0
  };

  handleIncrement = (productId) => {
    const newProducts = this.state.products.map(product => {
      if (product.id === productId) {
        product.quantity++;
      }
      return product;
    });
    this.calculateTotal(newProducts);
  };

  calculateTotal = (products) => {
    const totalItems = products.reduce((total, product) => total + product.quantity, 0);
    this.setState({ products, totalItems });
  };

  render() {
    return (
      <Container className="App">
        <Row className="App-header">
          <Col>
            <h1>Shop to React</h1>
          </Col>
          <Col className="text-right">
            <FontAwesomeIcon icon={faShoppingCart} /> {this.state.totalItems}
          </Col>
        </Row>
        <Row>
          {this.state.products.map(product => (
            <Col key={product.id} sm="3" className="text-center mb-4">
              <img src={product.image} alt={product.name} style={{ width: "100px", height: "100px" }} />
              <h5>{product.name}</h5>
              <Button onClick={() => this.handleIncrement(product.id)}>Add to Cart</Button>
              <p>Quantity: {product.quantity}</p>
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}

export default App;
