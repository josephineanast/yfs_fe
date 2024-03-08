import { BaseResponse, BaseServiceOptions } from "@/services/api/hooks.types";
import { PaginatedParams, PaginatedResponse } from "@/types/api";

export type OptionsGetSubCategoryInvoice = PaginatedParams<{
  sortingBy?: string;
  sortingType?: string;
  page?: number;
  limit?: number;
  keyword?: string;
}>;

export type ResponseGetSubCategoryInvoice = PaginatedResponse<{
  id: number;
  name: string;
  description: string;
  invoiceDate: string;
  invoiceNo: string;
  nickname: string;
  manuel: number;
  emissionFactorId: number;
  amount: number;
  weight: number;
  lifeExpectency: number;
  priceOnInvoice: number;
  tonnesCo2e: number;
}>;

export type OptionsCreateSubCategoryInvoice = Pick<
  BaseServiceOptions<{
    name: string;
    description: string;
    invoiceDate: string;
    invoiceNo: string;
    nickname: string;
    manuel: number;
    emissionFactorId: number;
    amount: number;
    weight: number;
    lifeExpectency: number;
    priceOnInvoice: number;
    tonnesCo2e: number;
  }>,
  "body"
>;

export type ResponseCreateSubCategoryInvoice = BaseResponse<{
  message: string;
}>;

export type ResponseGetSubCategoryInvoiceById = {
  data: {
    name: string;
    description: string;
    invoiceDate: string;
    invoiceNo: string;
    nickname: string;
    manuel: number;
    emissionFactorId: number;
    amount: number;
    weight: number;
    lifeExpectency: number;
    priceOnInvoice: number;
    tonnesCo2e: number;
  };
};

export type OptionsUpdateSubCategoryInvoice = Pick<
  BaseServiceOptions<{
    name: string;
    description: string;
    invoiceDate: string;
    invoiceNo: string;
    nickname: string;
    manuel: number;
    emissionFactorId: number;
    amount: number;
    weight: number;
    lifeExpectency: number;
    priceOnInvoice: number;
    tonnesCo2e: number;
  }>,
  "body"
>;

export type ResponseAllDropdown = {
  data: {
    id: number;
    danishName: string;
    englishName: string;
    category: string;
    subType: string;
  }[];
};

export type ResponseUpdateSubCategoryInvoice = BaseResponse<{
  message: string;
}>;
