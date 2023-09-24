import axios from "axios";

const SERVER_URL =
  import.meta.env.VITE_SERVER_BASE_URL || "http://localhost:6001";

const axiosInstance = axios.create({
  baseURL: SERVER_URL,
});

export { axiosInstance };
