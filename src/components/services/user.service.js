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
}

export default new UserService();

