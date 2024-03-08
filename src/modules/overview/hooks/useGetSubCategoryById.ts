import { useQuery } from "@tanstack/react-query";

import { overviewAPI, overviewKey } from "../api";

export const useGetSubCategoryById = (id: string) => {
  return useQuery({
    queryKey: overviewKey.detail(id),
    queryFn: ({ queryKey: [{ id }] }) =>
      overviewAPI.getSubCategoryInvoiceById(id),
    select: (response) => response.data,
  });
};
