import React from "react";
import { useState } from "react";
import userService from "../services/user.service";
import { useNavigate } from "react-router-dom";
export default function PlaceBet(props) {
  const { oddId } = props;
  const [betAmount, setBetAmount] = useState([]);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await userService.createInvoiceDetails(oddId, betAmount);
      navigate("/accounts");
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
