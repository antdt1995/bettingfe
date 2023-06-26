import React, { useState,useEffect } from "react";
import publicService from "../services/public.service";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import PlaceBet from "./bet";

export default function GetOddByMatch({matchId}) {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await publicService.getOdd(matchId);
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
              <th>Betting</th>
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
                <PlaceBet oddId={item.id}/>
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
 
    </Container>
  );
}