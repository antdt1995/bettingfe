import React, { useState } from "react";
import Container from "react-bootstrap/Container";

export default function Cart({ items }) {
  return (
    <Container style={{ color: "white" }}>
      <h2>Shopping Cart</h2>
      {items && items.length > 0 ? (
        <ul>
          {items.map((item, index) => (
            <li key={index}>
              <div>
                <p>Odd ID: {item.id}</p>
                <p>Home Team: {item.homeTeamName}</p>
                <p>Odd Type: {item.oddType}</p>
                <p>Odd Rate: {item.oddRate}</p>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>No items in the cart</p>
      )}
    </Container>
  );
}
