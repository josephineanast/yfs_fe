import { useQuery } from "@tanstack/react-query";
import { buildingAPI, buildingKey } from "../api";

export const useGetDropdownAllProducts = () => {
  return useQuery({
    queryKey: buildingKey.listDropdown(),
    queryFn: buildingAPI.getAllDropdownProducts,
    select: (response) => {
      return response?.data;
    },
  });
};
