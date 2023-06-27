import React, { useState } from "react";
import adminService from "../services/admin.service";

export default function GetPayment() {
  const [id, setId] = useState("");
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isUpdateSuccess, setIsUpdateSuccess] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await adminService.completeTransaction(id);
      setIsUpdateSuccess(true);
      setTimeout(() => {
        setIsUpdateSuccess(false);
      }, 3000);
    } catch (error) {
      alert("Payment Fail");
    }
  };
  const handleIdChange = (e) => {
    setId(e.target.value);
  };
  const handleTogglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  return (
    <>
      <button onClick={handleTogglePopup}>
        {isPopupOpen ? "Cancel" : "Complete Transaction"}
      </button>
      {isPopupOpen && (
        <div className="popup">
          {isUpdateSuccess && <p>Transaction successful!</p>}
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={id}
              onChange={handleIdChange}
              placeholder="Input Id"
              required
            />
            <button type="submit">Get Payment</button>
          </form>
        </div>
      )}
    </>
  );
}
