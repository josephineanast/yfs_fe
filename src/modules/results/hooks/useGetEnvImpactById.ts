import { useQuery } from "@tanstack/react-query";

import { resultsAPI, resultsKey } from "../api";

export const useGetEnvImpactById = (id: string) => {
  return useQuery({
    queryKey: resultsKey.detail(id),
    queryFn: ({ queryKey: [{ id }] }) => resultsAPI.getEnvImpactById(id),
    select: (response) => response.data,
  });
};
