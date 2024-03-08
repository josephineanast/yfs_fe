import { useQuery } from "@tanstack/react-query";
import { overviewAPI, overviewKey } from "../api";

export const useGetDropdownAll = () => {
  return useQuery({
    queryKey: overviewKey.listDropdown(),
    queryFn: overviewAPI.getAllDropdown,
    select: (response) => {
      return response?.data;
    },
  });
};
