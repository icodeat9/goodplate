import axios from "axios";
import store from "./store/index";

export const axiosInstance = axios.create({
  baseURL: "http://localhost:3000/",
  headers: {
    "content-type": "application/json",
    Authorization: store.state.userState.authorizationToken,
  },
});
