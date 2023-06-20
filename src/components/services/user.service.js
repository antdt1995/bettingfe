import axios from "axios";

const API_URL = "http://localhost:8099/bet/user/";

export default class UserService {
  static postBet(oddId, betAmount) {
    const user = JSON.parse(localStorage.getItem("user"));
    const token = user?.jwttoken;
    axios.defaults.headers.common["Authorization"] = token
      ? `Bearer ${token}`
      : "";

    return axios.post(API_URL + "invoicedetails", {
      oddId,
      betAmount,
    });
  }
}
