import axios from "axios";

const API_URL = "http://localhost:8080/bet/admin/";
const token = JSON.parse(localStorage.getItem("user"));
class AdminService {
  GetAccount() {
    return axios.get(API_URL + "accounts", {
      headers: {
        Authorization: "Bearer " + token.token,
      },
    });
  }
  CreateMatch(homeId, awayId){
    return axios.post(`${API_URL}footballmatchs/${homeId}/${awayId}`, {
      headers: {
        Authorization: "Bearer " + token.token,
      },
    });
  }
}
export default new AdminService();