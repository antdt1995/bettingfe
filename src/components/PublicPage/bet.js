import React from "react";
import { useState } from "react";
import userService from "../services/user.service";

export default function PlaceBet(props) {
  const { oddId } = props;

  const [betAmount, setBetAmount] = useState([]);

  //   const handleInput = (e) => {
  //     setBetAmount({...betAmount, [e.target.name]: e.target.event})
  //   };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await userService.createInvoiceDetails(oddId, betAmount);
    } catch (error) {
      alert("Create invoice details failed");
    }
  };

  const handleBetAmountChange = (e) => {
    setBetAmount(e.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          value={betAmount}
          onChange={handleBetAmountChange}
          placeholder="Bet Amount"
        />
        <button type="submit">Place bet</button>
      </form>
    </div>
  );
}
