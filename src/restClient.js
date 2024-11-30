import axios from "axios";
import { REACT_BACKEND_URL, TMDB_API_KEY } from "./constants";

const restClient = axios.create({
  baseURL: REACT_BACKEND_URL,
});

restClient.interceptors.request.use(
  (config) => {
    const token = TMDB_API_KEY;

    if (token) config.headers["Authorization"] = `Bearer ${token}`;

    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export default restClient;
