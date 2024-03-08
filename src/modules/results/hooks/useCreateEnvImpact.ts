import { useMutation } from "@tanstack/react-query";
import { queryClient } from "@/libs/react-query";

import { resultsAPI, resultsKey } from "../api";

export const useCreateEnvImpact = () => {
  return useMutation({
    mutationFn: resultsAPI.createEnvImpact,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: resultsKey.all,
      });
    },
  });
};
