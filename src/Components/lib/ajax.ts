import axios from "axios";

export const ajax = axios.create({
  baseURL: isDev
    ? "http://localhost:4000/api/v1"
    : "https://ushop.cws-project.site/api/v1",
  headers: {
    // this line is to tell the server that the client is expecting a JSON response
    Accept: "application/json",
  },
  timeout: 10000,
});
