import React, { useState } from "react";
import publicService from "../services/public.service";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Signout from "./Signout";

export default function GetOddByMatch({ betAmount }) {
  const [data, setData] = useState([]);
  const [matchId, setMatchId] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await publicService.getOdd(matchId);
      console.log(response.data);
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleInputChange = (event) => {
    setMatchId(event.target.value);
  };


  return (
    <Container style={{ color: "white" }}>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={matchId}
            onChange={handleInputChange}
            placeholder="Input Match ID"
          />
          <button type="submit">Get Odds</button>
        </form>
      </div>

      {data.length > 0 ? (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Odd Id</th>
              <th>Home Team</th>
              <th>Odd Rate</th>
              <th>Odd Type</th>
              <th>Set Score</th>
              <th>End Date</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.id}</td>
                <td>{item.homeTeamName}</td>
                <td>{item.oddRate}</td>
                <td>{item.oddType}</td>
                <td>{item.setScore}</td>
                <td>{item.endDate}</td>
                <td>
                  <div className="mt-auto">
                   
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
         
        </Table>
      ) : (
        <p
          style={{
            fontSize: "18px",
            textAlign: "center",
            border: "1px solid black",
            padding: "10px",
          }}
        >
          No data to display
        </p>
      )}
      <Signout />
    </Container>
  );
}