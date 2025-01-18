import React from 'react';
import { Container, Table, Button } from "react-bootstrap";

const OrderSummary = ({ cart, removeFromCart }) => {
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <Container className="mt-lg-5 pt-lg-5">
      <h2 className="text-center my-lg-5">Order Summary</h2>
      {cart.length === 0 ? (
        <p className="text-center">Your cart is empty!</p>
      ) : (
        <>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>No</th>
                <th>Item</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item.title}</td>
                  <td>${item.price.toFixed(2)}</td>
                  <td>
                    <Button
                      variant="danger"
                      size="sm"
                      onClick={() => removeFromCart(index)}
                    >
                      Remove
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          <h3 className="mt-3">Total: ${total.toFixed(2)}</h3>
          <Button  variant="danger" size="sm">Check Out</Button>
        </>
      )}
    </Container>
  );
};

export default OrderSummary;
