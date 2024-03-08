import { queryClient } from "@/libs/react-query";
import { useMutation } from "@tanstack/react-query";

import { buildingAPI, buildingKey } from "../api";

export const useDeleteBuilding = () => {
  return useMutation({
    mutationFn: buildingAPI.deleteBuildingInvoice,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: buildingKey.all,
      });
    },
  });
};
