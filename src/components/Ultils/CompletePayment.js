import React, { useState } from "react";
import adminService from "../services/admin.service";
import { useNavigate } from "react-router-dom";

export default function GetPayment() {
  const navigate = useNavigate();
  const [matchId, setMatchId] = useState("");
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await adminService.getPayments(matchId);
      navigate("/");
    } catch (error) {
      alert("Payment Fail");
    }
  };
  const handleMatchIdChange = (e) => {
    setMatchId(e.target.value);
  };
  const handleTogglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  return (
    <>
    <button onClick={handleTogglePopup}>
        {isPopupOpen ? 'Cancel' : 'Complete Payment'}
      </button>
      {isPopupOpen && (
        <div className="popup">
      <form onSubmit={handleSubmit}>
        <input type="text" value={matchId} onChange={handleMatchIdChange} placeholder="Input Match Id" required/>
        <button type="submit">Get Payment</button>

      </form>
      </div>
      )}
    </>
  );
}
