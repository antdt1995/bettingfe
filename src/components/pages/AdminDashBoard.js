import AdminService from "../services/admin.service";
import userService from "../services/user.service";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import React, { useState, useEffect } from "react";
import Signout from "./Signout";
import Match from "./PostMatch";
import PostOdd from "./PostOdd";
export default function GetAccount() {
  const [data, setData] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await userService.GetAccount();
        console.log(response);
        setData(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  console.log(data);

  return (
    <Container style={{ color: "white" }}>
      {data ? (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>
                <h2>Total Balance</h2>
              </th>
              <th>User Name</th>
              <th>Last Name</th>
              <th>First Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Bank Name</th>
              <th>Bank Account</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                {" "}
                <h4>
                  <strong>$ {data.totalBalance}</strong>
                </h4>{" "}
              </td>
              <td>{data.userName}</td>
              <td>{data.lastName}</td>
              <td>{data.firstName}</td>
              <td>{data.email}</td>
              <td>{data.phone}</td>
              <td>{data.bankName}</td>
              <td>{data.bankAccount}</td>
            </tr>
          </tbody>
          <PostOdd />
          <Match />
        </Table>
      ) : (
        <p>No accounts found.</p>
      )}
             <Signout />
    </Container>
  );
}
