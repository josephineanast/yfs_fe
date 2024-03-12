import Axios, {
  AxiosError,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";
import { url } from "@/utils";

export const axios = Axios.create({
  baseURL: url.BASE_API_URL,
  headers: {
    "Content-Type": "application/json",
    "Api-Version": "v1",
  },
});

function requestHandler(config: InternalAxiosRequestConfig) {
  config.headers.Accept = "application/json";

  return config;
}

function responseHandler(response: AxiosResponse) {
  return response.data;
}

function errorHandler(error: AxiosError) {
  return Promise.reject(error);
}

axios.interceptors.request.use(requestHandler, errorHandler);
axios.interceptors.response.use(responseHandler, errorHandler);
