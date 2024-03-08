import { useMutation } from "@tanstack/react-query";
import { queryClient } from "@/libs/react-query";

import { adminKey, adminAPI } from "../api";

export const useCreateEnvImpact = () => {
  return useMutation({
    mutationFn: adminAPI.createEnvImpact,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: adminKey.all,
      });
    },
  });
};
