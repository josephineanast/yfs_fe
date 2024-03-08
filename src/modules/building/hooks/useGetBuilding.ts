import { useQuery } from "@tanstack/react-query";

import {
  OptionsGetBuildingInvoice,
  buildingAPI,
  buildingKey,
  ResponseGetBuildingInvoice,
} from "../api";

export const useGetBuilding = (options: OptionsGetBuildingInvoice) => {
  const { data, isLoading, isError } = useQuery({
    queryKey: buildingKey.list(options),
    queryFn: () => buildingAPI.getBuildingInvoice(options),
  });
  if (isLoading || isError) {
    return {
      data: [] as ResponseGetBuildingInvoice["data"],
      total_page: 0,
      current_page: 1,
      isLoading,
      isError,
    };
  }
  return {
    // @ts-expect-error object already in correct format
    data: data?.data.data as ResponseGetBuildingInvoice["data"],
    total_page: data?.total_page ?? 0,
    current_page: data?.current_page,
    isLoading,
    isError,
  };
};
