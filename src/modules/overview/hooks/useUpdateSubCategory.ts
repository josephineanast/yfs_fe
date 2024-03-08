import { queryClient } from "@/libs/react-query";
import { useMutation } from "@tanstack/react-query";

import { overviewAPI, overviewKey } from "../api";

export const useUpdateSubCategory = () => {
  return useMutation({
    mutationFn: overviewAPI.updateSubCategoryInvoice,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: overviewKey.details(),
      });
    },
  });
};
