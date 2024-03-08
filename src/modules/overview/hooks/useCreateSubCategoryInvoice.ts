import { useMutation } from "@tanstack/react-query";
import { queryClient } from "@/libs/react-query";

import { overviewAPI, overviewKey } from "../api";

export const useCreateSubCategoryInvoice = () => {
  return useMutation({
    mutationFn: overviewAPI.createSubCategoryInvoice,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: overviewKey.all,
      });
    },
  });
};
