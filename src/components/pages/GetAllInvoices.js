import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import "./GetAllInvoices.css"


export default function GetAllInvoice() {
  const URL = "http://localhost:8080/bet/user/invoices";
  const user = JSON.parse(localStorage.getItem("user"));
  const [data, setData] = useState([]);
  const getData = () => {
    axios
      .get(URL, {
        headers: {
          Authorization: "Bearer " + user.token,
        },
      })
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
    <button onClick={getData}>Get all invoice</button>
    <div className="container">
      
      {data.map((invoice) => {
        return (
          <div key={invoice.id} className="invoice">
            <tr>
            <th>invoice ID: {invoice.id}</th>
            </tr>
            <tr>
            <td>Total Bet: ${invoice.totalBet}</td>
            </tr>
            <ul>
              {invoice.invoiceDetails.map((invoicedetails) => {
                return (
                  <li key={invoicedetails.invoiceId}>
                    <p>oddID: {invoicedetails.oddId}</p>
                    <p>Bet Amount: ${invoicedetails.betAmount}</p>
                  </li>
                );
              })}
            </ul>
            
          </div>
        );
      })}
    </div>
    </>
  );
}
