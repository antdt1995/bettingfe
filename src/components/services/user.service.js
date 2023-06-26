import axios from "axios";

const API_URL = "http://localhost:8080/bet/user/";
const token = JSON.parse(localStorage.getItem("user"));
class UserService {
  GetAccount() {
    console.log(token);
    return axios.get(API_URL + "accounts", {
      headers: {
        Authorization: "Bearer " + token.token,
      },
    });
  }
  createInvoiceDetails(oddId, betAmount) {
    const URL = `${API_URL}invoicedetails`;
    console.log("invoice details", URL);
    console.log (token.token)
    return axios.post(
      URL,
      {
        oddId,
        betAmount,
      },
      {
        headers: {
          Authorization: "Bearer " + token.token,
        },
      }
    );
  }
}

export default new UserService();
