import { BaseResponse, BaseServiceOptions } from "@/services/api/hooks.types";
import { PaginatedParams, PaginatedResponse } from "@/types/api";

export type OptionsGetBuildingInvoice = PaginatedParams<{
  sortingBy?: string;
  sortingType?: string;
  page?: number;
  limit?: number;
  keyword?: string;
}>;

export type ResponseGetBuildingInvoice = PaginatedResponse<{
  id: number;
  buildingName: string;
  invoiceDate: string;
  invoiceNo: string;
  nickname: string;
  footprint: number;
  buildingCodes: string;
  emissionFactorId: number;
  quantity: number;
  weight: number;
  priceOnInvoice: number;
  tonnesCo2e: number;
}>;

export type OptionsCreateBuildingInvoice = Pick<
  BaseServiceOptions<{
    buildingName: string;
    invoiceDate: string;
    invoiceNo: string;
    nickname: string;
    footprint: number;
    buildingCodes: string;
    emissionFactorId: number;
    quantity: number;
    weight: number;
    priceOnInvoice: number;
    tonnesCo2e: number;
  }>,
  "body"
>;

export type ResponseCreateBuildingInvoice = BaseResponse<{
  message: string;
}>;

export type ResponseGetBuildingInvoiceById = {
  data: {
    buildingName: string;
    invoiceDate: string;
    invoiceNo: string;
    nickname: string;
    footprint: number;
    buildingCodes: string;
    emissionFactorId: number;
    quantity: number;
    weight: number;
    priceOnInvoice: number;
    tonnesCo2e: number;
  };
};

export type OptionsUpdateBuildingInvoice = Pick<
  BaseServiceOptions<{
    buildingName: string;
    invoiceDate: string;
    invoiceNo: string;
    nickname: string;
    footprint: number;
    buildingCodes: string;
    emissionFactorId: number;
    quantity: number;
    weight: number;
    priceOnInvoice: number;
    tonnesCo2e: number;
  }>,
  "body"
>;

export type ResponseUpdateBuildingInvoice = BaseResponse<{
  message: string;
}>;

export type ResponseAllDropdown = {
  data: {
    id: number;
    danishName: string;
    englishName: string;
    category: string;
    subType: string;
  }[];
};
