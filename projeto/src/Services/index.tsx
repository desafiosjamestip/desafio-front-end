import axios from "axios";

const api = axios.create({
  baseURL: "https://pierrekalil1.herokuapp.com/",
});

export default api;
