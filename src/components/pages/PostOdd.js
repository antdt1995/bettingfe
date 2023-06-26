import React, { useState } from "react";
import adminService from "../services/admin.service";
import DateTimePicker from "react-datetime";
import "react-datetime/css/react-datetime.css";

import moment from "moment";

export default function PostOdd() {
  const [houseId, setHouseId] = useState("");
  const [matchId, setMatchId] = useState("");
  const [oddTypeId, setOddTypeId] = useState("");
  const [oddRate, setOddRate] = useState("");
  const [setScore, setSetScore] = useState("");
  const [endDate, setEndDate] = useState("");
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isUpdateSuccess, setIsUpdateSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formattedDate = moment(endDate).format("YYYY-MM-DD HH:mm");
      await adminService.createOdd(
        houseId,
        matchId,
        oddTypeId,
        oddRate,
        setScore,
        formattedDate
      );
      setIsUpdateSuccess(true);
      setTimeout(() => {
        setIsUpdateSuccess(false);
      }, 3000);
    } catch (error) {
      alert("Create Odd Failed");
    }
  };

  const handleHouseIdChange = (e) => {
    setHouseId(e.target.value);
  };

  const handleMatchIdChange = (e) => {
    setMatchId(e.target.value);
  };

  const handleOddTypeIdChange = (e) => {
    setOddTypeId(e.target.value);
  };

  const handleOddRateChange = (e) => {
    setOddRate(e.target.value);
  };

  const handleSetScoreChange = (e) => {
    setSetScore(e.target.value);
  };

  const handleEndDateChange = (date) => {
    setEndDate(date);
  };

  const handleTogglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  return (
    <>
     
      <button onClick={handleTogglePopup}>
        {isPopupOpen ? 'Cancel' : 'Create Odd'}
      </button>
      {isPopupOpen && (
        <div className="popup">
           {isUpdateSuccess && <p>Create successful!</p>}
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={houseId}
              onChange={handleHouseIdChange}
              placeholder="Input House Id"
              required
            />
            <input
              type="text"
              value={matchId}
              onChange={handleMatchIdChange}
              placeholder="Input Match Id"
              required
            />
            
            <select value={oddTypeId} onChange={handleOddTypeIdChange} required>
              <option><p>Input Odd Type Id</p></option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>

            <input
              type="text"
              value={oddRate}
              onChange={handleOddRateChange}
              placeholder="Input Odd Rate"
              required
            />
            <input
              type="text"
              value={setScore}
              onChange={handleSetScoreChange}
              placeholder="Input Set Score"
              required
            />
            <DateTimePicker
              value={endDate}
              onChange={handleEndDateChange}
              controls={["date", "time"]}
              dateFormat="DD MMM, YYYY"
              timeFormat="HH:mm"
              required
            />
            <button type="submit">Submit</button>
          </form>
        </div>
      )}
    </>
  );
}
