import axios from "axios";

const API_URL = "http://localhost:8080/public/";

export default class PublicService {
  static getOdd(matchId, oddId, homeTeam, oddRate, oddType, setScore, endDate) {
    return axios.get(`${API_URL}odds/match/${matchId}`, {
      params: {
        oddId,
        homeTeam,
        oddRate,
        oddType,
        setScore,
        endDate,
      },
    });
  }
  static getMatch(matchId) {
    return axios.get(`${API_URL}footballmatchs/${matchId}`);
  }
}
