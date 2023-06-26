import React, { useState } from "react";
import adminService from "../services/admin.service";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";


export default function FindWinAccountByMatchId() {
  const [matchId, setMatchId] = useState("");
  const [data, setData] = useState([]);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const dataList=data.filter((item)=>item.id!==null);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await adminService.findWinAccountByMatchId(matchId);
      setData(response.data);
    } catch (error) {
      alert("Payment Fail");
    }
  };

  const handleMatchIdChange = (e) => {
    setMatchId(e.target.value);
  };

  const handleTogglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  return (
<>
        <button onClick={handleTogglePopup}>
        {isPopupOpen ? 'Cancel' : 'Find Win Account'}
      </button>
      {isPopupOpen && (
        <div className="popup">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={matchId}
              onChange={handleMatchIdChange}
              placeholder="Input Match Id"
              required
            />
            <button type="submit">Submit</button>
          </form>
          {data && data.length > 0  ? (
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Account Id</th>
                  <th>Bet Win</th>
                </tr>
              </thead>
              <tbody>
                {dataList.map((item, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{item.id}</td>
                    <td>$ {item.bet}</td>
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
    
        </div>
      )}
</>
  );
}
