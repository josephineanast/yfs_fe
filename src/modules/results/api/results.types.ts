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
  sortingType?: string;
  page?: number;
  limit?: number;
  keyword?: string;
  sortingBy?: string;
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
