import axios from "axios";

export default axios.create({
  // baseURL: "https://bucodel-sis-backend.onrender.com"
  baseURL: "http://localhost:5000",
  //   withCredentials: true
});
