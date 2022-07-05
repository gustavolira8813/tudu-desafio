import axios from "axios";

const api = axios.create({
  baseURL: "https://desafiotudo-api.herokuapp.com/",
});

export default api;
