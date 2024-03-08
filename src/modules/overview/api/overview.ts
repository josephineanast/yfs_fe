import {
  ResponseAllDropdown,
  OptionsCreateSubCategoryInvoice,
  OptionsGetSubCategoryInvoice,
  OptionsUpdateSubCategoryInvoice,
  ResponseCreateSubCategoryInvoice,
  ResponseGetSubCategoryInvoice,
  ResponseGetSubCategoryInvoiceById,
  ResponseUpdateSubCategoryInvoice,
} from "./overview.types";
import { axios } from "@/libs/axios";

const createSubCategoryInvoice = (
  data: OptionsCreateSubCategoryInvoice
): Promise<ResponseCreateSubCategoryInvoice> => {
  return axios.post("/invoice-item", data.body);
};

const getSubCategoryInvoice = (
  data: OptionsGetSubCategoryInvoice
): Promise<ResponseGetSubCategoryInvoice> => {
  return axios.get("/invoice-item", { params: data });
};

const getSubCategoryInvoiceById = (id: string) =>
  axios.get<ResponseGetSubCategoryInvoiceById>(`/invoice-item/${id}`);

const updateSubCategoryInvoice = (
  data: OptionsUpdateSubCategoryInvoice
): Promise<ResponseUpdateSubCategoryInvoice> => {
  return axios.patch(`/invoice-item/${data?.body?.id}`, data?.body);
};

const deleteSubCategoryInvoice = (id: string): Promise<void> => {
  return axios.delete(`/invoice-item/${id}`);
};

const getAllDropdown = () =>
  axios.get<ResponseAllDropdown>(`/emission-factor/as/dropdown`);

export const overviewAPI = {
  getAllDropdown,
  createSubCategoryInvoice,
  getSubCategoryInvoice,
  getSubCategoryInvoiceById,
  updateSubCategoryInvoice,
  deleteSubCategoryInvoice,
};
