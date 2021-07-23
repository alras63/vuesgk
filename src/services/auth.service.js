import axios from "axios";

const API_URL = "http://46.0.193.126:30000/v1/main/";

class AuthService {
  login(user) {
    return axios
      .post(API_URL + "user/auth", {
        login: user.username,
        password: user.password,
      })
      .then((response) => {
        if (response.data.accessToken) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }

        return response.data;
      });
  }

  logout() {
    localStorage.removeItem("user");
  }

  register(user) {
    return axios.post(API_URL + "signup", {
      username: user.username,
      email: user.email,
      password: user.password,
    });
  }
}

export default new AuthService();
