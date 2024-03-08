import { queryClient } from "@/libs/react-query";
import { useMutation } from "@tanstack/react-query";

import { overviewAPI, overviewKey } from "../api";

export const useDeleteSubCategory = () => {
  return useMutation({
    mutationFn: overviewAPI.deleteSubCategoryInvoice,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: overviewKey.all,
      });
    },
  });
};
