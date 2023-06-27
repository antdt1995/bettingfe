import React from "react";
import { useState } from "react";
import userService from "../services/user.service";

export default function CreateTransaction() {
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("");
  const [bankAccount, setBankAccount] = useState("");
  const [bankName, setBankName] = useState("");
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isUpdateSuccess, setIsUpdateSuccess] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await userService.createTransaction(amount, type, bankAccount, bankName);
      setIsUpdateSuccess(true);
      setTimeout(() => {
        setIsUpdateSuccess(false);
      }, 3000);
    } catch (error) {
      alert("Create transaction failed");
    }
  };
  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };
  const handleTypeChange = (e) => {
    setType(e.target.value);
  };
  const handleBankAccountChange = (e) => {
    setBankAccount(e.target.value);
  };
  const handleBankNameChange = (e) => {
    setBankName(e.target.value);
  };
  const handleTogglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };
  return (
    <>
      <button onClick={handleTogglePopup}>
        {isPopupOpen ? "Cancel" : "Create Transaction"}
      </button>
      {isPopupOpen && (
        <div className="popup" style={{ display: "block" }}>
          {isUpdateSuccess && <p>Create successful!</p>}
          <form onSubmit={handleSubmit}>
            <input
              type="number"
              value={amount}
              onChange={handleAmountChange}
              placeholder="Input amount"
              required
            />
            <select value={type} onChange={handleTypeChange} required>
              <option disabled value="">
                Input Transaction Type
              </option>
              <option value="DEPOSIT">DEPOSIT</option>
              <option value="WITHDRAW">WITHDRAW</option>
            </select>
            <input
              type="number"
              value={bankAccount}
              onChange={handleBankAccountChange}
              placeholder="Input Bank Account"
            />
            <input
              type="text"
              value={bankName}
              onChange={handleBankNameChange}
              placeholder="Input Bank Name"
            />
            <button type="submit">Submit</button>
          </form>
        </div>
      )}
    </>
  );
}
