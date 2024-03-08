import { BaseResponse, BaseServiceOptions } from "@/services/api/hooks.types";
import { PaginatedParams, PaginatedResponse } from "@/types/api";

export type OptionsCreateEnvImpact = Pick<
  BaseServiceOptions<{
    emissionsEstimate: number;
    energyUseEstimate: number;
    waterUsageEstimate: number;
    scopeOne: number;
    scopeTwo: number;
    scopeThree: number;
  }>,
  "body"
>;

export type ResponseCreateEnvImpact = BaseResponse<{
  message: string;
}>;

export type OptionsGetEnvImpact = PaginatedParams<{
  sortingBy?: string;
  sortingType?: string;
  page?: number;
  limit?: number;
  keyword?: string;
}>;

export type ResponseGetEnvImpactById = {
  data: {
    id: number;
    createdAt: string;
    updatedAt: string;
    deletedAt: string | null;
    emissionsEstimate: number;
    energyUseEstimate: number;
    waterUsageEstimate: number;
    scopeOne: number;
    scopeTwo: number;
    scopeThree: number;
  };
};

export type ResponseGetEnvImpact = PaginatedResponse<{
  id: number;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
  emissionsEstimate: number;
  energyUseEstimate: number;
  waterUsageEstimate: number;
  scopeOne: number;
  scopeTwo: number;
  scopeThree: number;
}>;

export type OptionsUpdateEnvImpact = Pick<
  BaseServiceOptions<{
    id: number;
    emissionsEstimate: number;
    energyUseEstimate: number;
    waterUsageEstimate: number;
    scopeOne: number;
    scopeTwo: number;
    scopeThree: number;
  }>,
  "body"
>;

export type ResponseUpdateEnvImpact = BaseResponse<{
  message: string;
}>;
