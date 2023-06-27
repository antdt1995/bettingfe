import axios from "axios";

const API_URL = "http://localhost:8080/bet/user/";
const token = JSON.parse(localStorage.getItem("user"));
class UserService {
  GetAccount() {
    return axios.get(API_URL + "accounts", {
      headers: {
        Authorization: "Bearer " + token.token,
      },
    });
  }
  createInvoiceDetails(oddId, betAmount) {
    const URL = `${API_URL}invoicedetails`;
   
    return axios.post(
      URL,
      [{
        oddId,
        betAmount,
      }],
      {
        headers: {
          Authorization: "Bearer " + token.token,
        },
      }
    );
  }
  createTransaction(amount,type,bankAccount,bankName) {
    const URL = `${API_URL}transactions`;
  
    return axios.post(
      URL,
      {
       amount,
       type,
       bankAccount,
       bankName,
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
