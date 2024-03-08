import { axios } from "@/libs/axios";
import {
  OptionsCreateEnvImpact,
  OptionsGetEnvImpact,
  ResponseCreateEnvImpact,
  ResponseGetEnvImpact,
  ResponseGetEnvImpactById,
} from "./results.types";

const createEnvImpact = (
  data: OptionsCreateEnvImpact
): Promise<ResponseCreateEnvImpact> => {
  return axios.post("/environmental-impact", data.body);
};

const getEnvImpactAll = (
  options: OptionsGetEnvImpact
): Promise<ResponseGetEnvImpact> => {
  return axios.get("/environmental-impact", { params: options });
};

const getEnvImpactById = (id: string) =>
  axios.get<ResponseGetEnvImpactById>(`/environmental-impact/${id}`);

export const resultsAPI = {
  createEnvImpact,
  getEnvImpactAll,
  getEnvImpactById,
};
