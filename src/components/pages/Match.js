import React, { useState } from "react";
import adminService from "../services/admin.service";
import DateTimePicker  from "react-datetime";
import "react-datetime/css/react-datetime.css";
import Container from "react-bootstrap/Container";
export default function CreateMatch() {
  const [homeId, setHomeId] = useState("");
  const [awayId, setAwayId] = useState("");
    const [selectedDate, setSelectedDate] = useState("");

    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const response = await adminService.createMatch(homeId, awayId);
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    const handleHomeIdChange = (e) => {
      setHomeId(e.target.value);
    };
    const handleAwayIdChange = (e) => {
      setAwayId(e.target.value);
    };

    const handleDateChange = (date) => {
      setSelectedDate(date);
    };
    return (
      <Container style={{ color: "white" }}>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={homeId}
            onChange={handleHomeIdChange}
            placeholder="Input Home Team Id"
          />
        </form>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={awayId}
            onChange={handleAwayIdChange}
            placeholder="Input Away Team Id"
          />
        </form>
        <DateTimePicker label="Controlled picker" value={selectedDate} onChange={setSelectedDate} />
        <button type="submit">Create Match</button>
      </Container>
    );
  };

