import React, { useState, useEffect } from "react";
import publicService from "../services/public.service";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import Odd from './Odd'
export default function GetMatch({ matchId }) {
  const [data, setData] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await publicService.getMatch(matchId);
        console.log(response.data);
        setData(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [matchId]);
  return (
    <Container style={{ color: "white" }}>
     {data ? (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Home Team</th>
              <th>Home Score</th>
              <th>Away Team</th>
              <th>Away Score</th>
              <th>Total Score</th>
              <th>Start Date</th>
            </tr>
          </thead>
          <tbody>
              <tr>
                <td>{data.homeTeamName}</td>
                <td>{data.homeScore}</td>
                <td>{data.awayTeamName}</td>
                <td>{data.awayScore}</td>
                <td>{data.totalScore}</td>
                <td>{data.startDate}</td>
              </tr>
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
      <Odd matchId={matchId} />
    </Container>
  );
}
