import axios from "axios";

const API_URL = "http://localhost:8080/bet/admin/";
const token = JSON.parse(localStorage.getItem("user"));

class AdminService {
  createMatch(homeId, awayId,startDate) {
    console.log('match', token.token);
    return axios.post(`${API_URL}footballmatchs/${homeId}/${awayId}`, {
      homeId,
      awayId,
      startDate,
    }, {
      headers: {
        Authorization: "Bearer " + token.token
      }
    });
  }
  createOdd(houseId, matchId, oddTypeId, oddRate, setScore, endDate) {
    const URL = `${API_URL}odds/${houseId}/${matchId}/${oddTypeId}`;
    console.log ("odd",URL);
    return axios.post(
      URL,
      {
        houseId,
        matchId,
        oddTypeId,
        oddRate,
        setScore,
        endDate,
      }, {
        headers: {
          Authorization: "Bearer " + token.token
        }
    })
  }
  
}

export default new AdminService();
