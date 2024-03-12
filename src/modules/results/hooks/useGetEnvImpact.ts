import { useQuery } from "@tanstack/react-query";

import {
  OptionsGetEnvImpact,
  resultsAPI,
  resultsKey,
  ResponseGetEnvImpact,
} from "../api";

export const useGetEnvImpact = (options: OptionsGetEnvImpact) => {
  const { data, isLoading, isError } = useQuery({
    queryKey: resultsKey.list(options),
    queryFn: () => resultsAPI.getEnvImpactAll(options),
  });
  if (isLoading || isError) {
    return {
      data: [] as ResponseGetEnvImpact["data"],
      total_page: 0,
      current_page: 1,
      isLoading,
      isError,
    };
  }
  return {
    data: data?.data as ResponseGetEnvImpact["data"],
    total_page: data?.total_page,
    current_page: data?.current_page,
    isLoading,
    isError,
  };
};
