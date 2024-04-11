import axios from "axios";

export const ajax = axios.create({
  baseURL: "http://localhost:4000",
  headers: {
    // this line is to tell the server that the client is expecting a JSON response
    Accept: "application/json",
  },
  timeout: 10000,
});
