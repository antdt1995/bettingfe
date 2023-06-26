import React, { useState } from "react";
import adminService from "../services/admin.service";
import "react-datetime/css/react-datetime.css";


export default function UpdateMatch() {
  const [homeScore, setHomeScore] = useState("");
  const [awayScore, setAwayScore] = useState("");
  const [totalScore, setTotalScore] = useState("");
  const [matchId, setMatchId] = useState("");
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isUpdateSuccess, setIsUpdateSuccess] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await adminService.updateMatch(matchId, homeScore, awayScore, totalScore);
      setIsUpdateSuccess(true);
      setTimeout(() => {
        setIsUpdateSuccess(false);
      }, 3000);
    } catch (error) {
      console.error("Update Match Fail", error);
      alert("Update Match Failed");
    }
  };
  const handlerHomeScore = (e) => {
    setHomeScore(e.target.value);
  };
  const handlerAwayScore = (e) => {
    setAwayScore(e.target.value);
  };
  const handlerTotalScore = (e) => {
    setTotalScore(e.target.value);
  };
  const handlerMatchId = (e) => {
    setMatchId(e.target.value);
  };
  const handleTogglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };
  return (
    <>
      <button onClick={handleTogglePopup}>
        {isPopupOpen ? "Cancel" : "Update Match"}
      </button>
      {isPopupOpen && (
        <div className="popup" style={{ display: "block" }}>
          {isUpdateSuccess && <p>Update successful!</p>}
          <form onSubmit={handleSubmit}>
            <input
              type="number"
              value={matchId}
              onChange={handlerMatchId}
              placeholder="Input Match Id"
            />
            <input
              type="number"
              value={homeScore}
              onChange={handlerHomeScore}
              placeholder="Input Home Score"
            />
            <input
              type="number"
              value={awayScore}
              onChange={handlerAwayScore}
              placeholder="Input Away Score "
            />
            <input
              type="number"
              value={totalScore}
              onChange={handlerTotalScore}
              placeholder="Input Total Score"
            />
            <button type="submit">Submit</button>
          </form>
        </div>
      )}
    </>
  );
}
