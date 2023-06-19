import axios from "axios";

const API_URL = "http://localhost:8099/auth/";

class AuthService {
  register(firstName, lastName, userName, password, email, phone, bankAccount, bankName) {
    return axios.post(API_URL + "signup", {
      firstName,
      lastName,
      userName,
      password,
      email,
      phone,
      bankAccount,
      bankName,
    });
  }

  login(userName, password) {
    return axios
      .post(API_URL + "signin", {
        userName,
        password,
      })
      .then((response) => {
        if (response.data.jwttoken) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }
        console.log(response.data);
        return response.data;
       
      });
  }

  logout() {
    localStorage.removeItem("user");
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem("user"));
  }
}

export default new AuthService();