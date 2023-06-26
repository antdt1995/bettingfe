import React, { useState } from "react";
import adminService from "../services/admin.service";
import DateTimePicker from "react-datetime";
import "react-datetime/css/react-datetime.css";
import { useNavigate } from "react-router-dom";
import moment from "moment";

export default function CreateMatch() {
  const [homeId, setHomeId] = useState("");
  const [awayId, setAwayId] = useState("");
  const [startDate, setStartDate] = useState("");
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isUpdateSuccess, setIsUpdateSuccess] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formattedDate = moment(startDate).format("YYYY-MM-DD HH:mm");
      await adminService
        .createMatch(homeId, awayId, formattedDate)
        setIsUpdateSuccess(true);
      setTimeout(() => {
        setIsUpdateSuccess(false);
      }, 3000);
    } catch (error) {
      alert("Create Match Fail");
    }
  };

  const handleHomeIdChange = (e) => {
    setHomeId(e.target.value);
  };
  const handleAwayIdChange = (e) => {
    setAwayId(e.target.value);
  };

  const handleDateChange = (date) => {
    setStartDate(date);
  };
  const handleTogglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };
  return (
    <>
     <button onClick={handleTogglePopup}>
        {isPopupOpen ? 'Cancel' : 'Create Match'}
      </button>
      {isPopupOpen && (
        <div className="popup" style={{ display: "block" }}>
           {isUpdateSuccess && <p>Create successful!</p>}
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={homeId}
              onChange={handleHomeIdChange}
              placeholder="Input Home Team Id"
            />
            <input
              type="text"
              value={awayId}
              onChange={handleAwayIdChange}
              placeholder="Input Away Team Id"
            />
            <DateTimePicker
              value={startDate}
              onChange={handleDateChange}
              controls={["date", "time"]}
              dateFormat="DD MMM, YYYY"
              timeFormat="HH:mm"
            />
            <button type="submit">Submit</button>
           
          </form>
        </div>
      )}
    </>
  );
}
