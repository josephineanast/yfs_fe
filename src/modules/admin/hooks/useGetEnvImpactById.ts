import { useQuery } from "@tanstack/react-query";

import { adminAPI, adminKey } from "../api";

export const useGetEnvImpactById = (id: string) => {
  return useQuery({
    queryKey: adminKey.detail(id),
    queryFn: ({ queryKey: [{ id }] }) => adminAPI.getEnvImpactById(id),
    select: (response) => response.data,
  });
};
