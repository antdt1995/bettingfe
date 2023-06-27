import React, { useState } from "react";
import adminService from "../services/admin.service";
import Table from "react-bootstrap/Table";
import moment from "moment";
import DateTimePicker from "react-datetime";

export default function FindWinAccountByMatchId() {
  const [fromDate, setFromDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [limit, setLimit] = useState("");

  const [data, setData] = useState([]);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const dataList = data.filter((item) => item.id !== null);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formattedEndDate = moment(endDate).format("YYYY-MM-DD HH:mm");
      const formattedStartDate = moment(fromDate).format("YYYY-MM-DD HH:mm");
      const response = await adminService.getAllMatchByCountTotalBet(
        formattedStartDate,
        formattedEndDate,
        limit
      );
      setData(response.data);
    } catch (error) {
      alert("Payment Fail");
    }
  };
  const handleFromDateChange = (date) => {
    setFromDate(date);
  };
  const handleEndDateChange = (date) => {
    setEndDate(date);
  };
  const handleLimitChange = (e) => {
    setLimit(e.target.value);
  };

  const handleTogglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  return (
    <>
      <button onClick={handleTogglePopup}>
        {isPopupOpen ? "Cancel" : "Find Match By Count Bet"}
      </button>
      {isPopupOpen && (
        <div className="popup">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={limit}
              onChange={handleLimitChange}
              placeholder="Input number of data"
              required
            />
            <DateTimePicker
              value={fromDate}
              onChange={handleFromDateChange}
              controls={["date", "time"]}
              dateFormat="DD MMM, YYYY"
              timeFormat="HH:mm"
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
          {data && data.length > 0 ? (
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Match Id</th>
                  <th>Home Team</th>
                  <th>Number of bet</th>
                </tr>
              </thead>
              <tbody>
                {dataList.map((item, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{item.id}</td>
                    <td>{item.teamName}</td>
                    <td>{item.numberOfBet}</td>
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
