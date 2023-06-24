import React, { useState } from "react";
import adminService from "../services/admin.service";
import DateTimePicker from "react-datetime";
import "react-datetime/css/react-datetime.css";
import Container from "react-bootstrap/Container";
import { useNavigate } from "react-router-dom";
import moment from "moment";

export default function CreateMatch() {
  const [homeId, setHomeId] = useState("");
  const [awayId, setAwayId] = useState("");
  const [startDate, setStartDate] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formattedDate = moment(startDate).format("YYYY-MM-DD HH:mm");
      const response = await adminService
        .createMatch(homeId, awayId, formattedDate)
        .then(() => {
          navigate("/");
        });
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
  const handleOpenPopup = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };
  return (
    <Container style={{ color: "white" }}>
      <button onClick={handleOpenPopup}>Create Match</button>
      {showPopup && (
        <div className="popup">
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
            <button onClick={handleClosePopup}>Cancel</button>
          </form>
        </div>
      )}
    </Container>
  );
}
