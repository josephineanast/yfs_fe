import { useQuery } from "@tanstack/react-query";

import { buildingAPI, buildingKey } from "../api";

export const useGetBuildingById = (id: string) => {
  return useQuery({
    queryKey: buildingKey.detail(id),
    queryFn: ({ queryKey: [{ id }] }) => buildingAPI.getBuildingInvoiceById(id),
    select: (response) => response.data,
  });
};
