import { queryClient } from "@/libs/react-query";
import { useMutation } from "@tanstack/react-query";

import { buildingAPI, buildingKey } from "../api";

export const useUpdateBuilding = () => {
  return useMutation({
    mutationFn: buildingAPI.updateBuildingInvoice,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: buildingKey.details(),
      });
    },
  });
};
