import React, { useState, useEffect } from 'react';
import Axios from "axios";

 function GetOddByMatch() {
  const [data, setData] = useState([]);
  const [matchId, setMatchId] = useState("");

  useEffect(() => {
    if (matchId) {
      Axios.get(`http://localhost:8099/public/odds/match/${matchId}`)
        .then((res) => {
          console.log(res.data);
          setData(res.data);
        })
        .catch((err) => console.log(err));
    }
  }, [matchId]);

  const arr = data.map((item, index) => {
    return (
      <tr key={index}>
        <td>{item.id}</td>
        <td>{item.homeTeamName}</td>
        <td>{item.oddRate}</td>
        <td>{item.oddType}</td>
        <td>{item.setScore}</td>
        <td>{item.endDate}</td>
      </tr>
    );
  });

  const handleInputChange = (event) => {
    setMatchId(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        value={matchId}
        onChange={handleInputChange}
        placeholder="input Match Id"
      />

      {arr.length >= 0 ? (
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>HomeTeam</th>
              <th>OddRate</th>
              <th>OddType</th>
              <th>setScore</th>
              <th>endDate</th>
            </tr>
          </thead>
          <tbody>{arr}</tbody>
        </table>
      ) : (
        <p>No data to display</p>
      )}
    </div>
  );
}

export default function showOdd(){
  return (
    <table>
    <thead>
      <tr>
        <th>Id</th>
        <th>HomeTeam</th>
        <th>OddRate</th>
        <th>OddType</th>
        <th>setScore</th>
        <th>endDate</th>
      </tr>
    </thead>
    <tbody>{GetOddByMatch()}</tbody>
  </table>
  )
}