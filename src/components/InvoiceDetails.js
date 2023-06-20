import React, { useState } from "react";
import userService from "./services/user.service";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Odd from './Odd';
export default function PostBet({data}) {
  const [amount, setAmount] = useState("");
  const [odd, setOdd] = useState("");

  const handleAmountSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await userService.postBet();
      console.log(response.data);
      setAmount(response.data.amount);
      setOdd(response.data.id);
    } catch (error) {
      console.log(error);
    }
  };

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  return (
    <Container style={{ color: "white" }}>
        <div className="mt-auto">
      <div className="inputContainer">
        <form onSubmit={handleAmountSubmit}>
          <input
            type="text"
            value={amount}
            onChange={handleAmountChange}
            placeholder="Input Bet Amount"
          />
            <Button className="w-100">Get Your Futute</Button>
        </form>
        </div>
      </div>
    </Container>
  );
}
