import { axios } from "@/libs/axios";
import {
  OptionsCreateBuildingInvoice,
  OptionsGetBuildingInvoice,
  OptionsUpdateBuildingInvoice,
  ResponseCreateBuildingInvoice,
  ResponseGetBuildingInvoice,
  ResponseGetBuildingInvoiceById,
  ResponseUpdateBuildingInvoice,
  ResponseAllDropdown,
  ResponseGetEmissionFactorById,
} from "./building.types";

const createBuildingInvoice = (
  data: OptionsCreateBuildingInvoice
): Promise<ResponseCreateBuildingInvoice> => {
  return axios.post("/invoice", data.body);
};

const getBuildingInvoice = (
  data: OptionsGetBuildingInvoice
): Promise<ResponseGetBuildingInvoice> => {
  return axios.get("/invoice", { params: data });
};

const getBuildingInvoiceById = (id: string) =>
  axios.get<ResponseGetBuildingInvoiceById>(`/invoice/${id}`);

const updateBuildingInvoice = (
  data: OptionsUpdateBuildingInvoice
): Promise<ResponseUpdateBuildingInvoice> => {
  return axios.patch(`/invoice/${data?.body?.id}`, data?.body);
};

const deleteBuildingInvoice = (id: string): Promise<void> => {
  return axios.delete(`/invoice/${id}`);
};

const getAllDropdownProducts = () =>
  axios.get<ResponseAllDropdown>(`/emission-factor/as/dropdown?category=1`);

const getEmissionFactorById = (id: string) =>
  axios.get<ResponseGetEmissionFactorById>(`/emission-factor${id}`);

export const buildingAPI = {
  createBuildingInvoice,
  getBuildingInvoice,
  getBuildingInvoiceById,
  updateBuildingInvoice,
  deleteBuildingInvoice,
  getAllDropdownProducts,
  getEmissionFactorById,
};
