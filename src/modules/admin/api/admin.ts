import { axios } from "@/libs/axios";
import {
  OptionsCreateEnvImpact,
  ResponseCreateEnvImpact,
  OptionsGetEnvImpact,
  OptionsUpdateEnvImpact,
  ResponseGetEnvImpact,
  ResponseGetEnvImpactById,
  ResponseUpdateEnvImpact,
} from "./admin.types";

const createEnvImpact = (
  data: OptionsCreateEnvImpact
): Promise<ResponseCreateEnvImpact> => {
  return axios.post("/environmental-impact", data.body);
};

const getEnvImpactAll = (
  data: OptionsGetEnvImpact
): Promise<ResponseGetEnvImpact> => {
  return axios.get("/environmental-impact", { params: data });
};

const getEnvImpactById = (id: string) =>
  axios.get<ResponseGetEnvImpactById>(`/environmental-impact/${id}`);

const updateEnvImpact = (
  data: OptionsUpdateEnvImpact
): Promise<ResponseUpdateEnvImpact> => {
  return axios.patch(`/environmental-impact/${data?.body?.id}`, data?.body);
};

const deleteEnvImpact = (id: string): Promise<void> => {
  return axios.delete(`/environmental-impact/${id}`);
};

export const adminAPI = {
  createEnvImpact,
  getEnvImpactAll,
  getEnvImpactById,
  updateEnvImpact,
  deleteEnvImpact,
};
