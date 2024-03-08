import Axios, { AxiosError, InternalAxiosRequestConfig } from "axios";
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

function errorHandler(error: AxiosError) {
  return Promise.reject(error);
}

axios.interceptors.request.use(requestHandler, errorHandler);
