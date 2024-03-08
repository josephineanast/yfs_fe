import { useMutation } from "@tanstack/react-query";
import { queryClient } from "@/libs/react-query";

import { buildingAPI, buildingKey } from "../api";

export const useCreateBuilding = () => {
  return useMutation({
    mutationFn: buildingAPI.createBuildingInvoice,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: buildingKey.all,
      });
    },
  });
};
