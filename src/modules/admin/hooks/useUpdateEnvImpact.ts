import { queryClient } from "@/libs/react-query";
import { useMutation } from "@tanstack/react-query";

import { adminAPI, adminKey } from "../api";

export const useUpdateEnvImpact = () => {
  return useMutation({
    mutationFn: adminAPI.updateEnvImpact,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: adminKey.details(),
      });
    },
  });
};
