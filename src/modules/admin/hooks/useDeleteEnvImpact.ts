import { queryClient } from "@/libs/react-query";
import { useMutation } from "@tanstack/react-query";

import { adminAPI, adminKey } from "../api";

export const useDeleteEnvImpact = () => {
  return useMutation({
    mutationFn: adminAPI.deleteEnvImpact,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: adminKey.all,
      });
    },
  });
};
