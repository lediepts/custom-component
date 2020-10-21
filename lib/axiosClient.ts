import Axios from "axios";
import * as queryString from "querystring";

const axiosClient = Axios.create({
  baseURL: process.env.POST_LOGOUT_REDIRECT_URI,
  headers: {
    "content-type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
  },
  paramsSerializer: (param) => queryString.stringify(param),
});
axiosClient.interceptors.request.use(async (config) => {
  return config;
});
axiosClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    throw error;
  }
);
export default axiosClient;
