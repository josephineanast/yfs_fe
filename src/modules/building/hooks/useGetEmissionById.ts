import { useQuery } from "@tanstack/react-query";

import { buildingAPI, buildingKey } from "../api";

export const useGetEmissionById = (id: string) => {
  return useQuery({
    queryKey: buildingKey.detail(id),
    queryFn: ({ queryKey: [{ id }] }) => buildingAPI.getEmissionFactorById(id),
    select: (response) => response.data,
  });
};
