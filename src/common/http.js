import axios from "axios";
export default axios.create({
  baseURL: "http://626ea4cc034ec185d33e9c05.mockapi.io/",
  headers: {
    "Content-type": "application/json"
  }
});