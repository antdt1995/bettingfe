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
  updateMatch(matchId, homeScore, awayScore, totalScore) {
    console.log('match', token.token);
    return axios.put(`${API_URL}footballmatchs/${matchId}`, {
      matchId,
      homeScore,
      awayScore,
      totalScore,
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
  getPayments(matchId) {
    const URL=`${API_URL}houses/complete/${matchId}`;
    console.log ("payment",URL);
    return axios.post(URL,{
      matchId,
    },{
      headers: {
        Authorization: "Bearer " + token.token
      }
    })
  }
  findWinAccountByMatchId(matchId) {
    const URL = `${API_URL}houses/accountwinlist?matchId=${matchId}`;
    return axios.get(URL, {
      headers: {
        Authorization: "Bearer " + token.token,
      },
      params: {
        matchId: matchId,
      },
    });
  }
  findLostAccountByMatchId(matchId) {
    const URL = `${API_URL}houses/accountloselist?matchId=${matchId}`;
    return axios.get(URL, {
      headers: {
        Authorization: "Bearer " + token.token,
      },
      params: {
        matchId: matchId,
      },
    });
  }
  getAllMatchByCountTotalBet(fromDate, endDate, limit){
    const URL = `${API_URL}footballmatchs/matchlistbycountbet?fromDate=${fromDate}&endate=${endDate}&limit=${limit}`;
    return axios.get(URL,{
      headers: {
        Authorization: "Bearer " + token.token
      },
      params: {
        fromDate: fromDate,
        endDate: endDate,
        limit: limit
      }
    })
  }
  getAllMatchBySumTotalBet(fromDate, endDate, limit){
    const URL = `${API_URL}footballmatchs/matchlistbysumbet?fromDate=${fromDate}&endate=${endDate}&limit=${limit}`;
    return axios.get(URL,{
      headers: {
        Authorization: "Bearer " + token.token
      },
      params: {
        fromDate: fromDate,
        endDate: endDate,
        limit: limit
      }
    })
  }
  
}

export default new AdminService();
