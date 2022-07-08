import axios from "axios";

const api = axios.create({
  baseURL: "https://exemplo-desafiotudo-api.herokuapp.com/",
});

export default api;
