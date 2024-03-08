import { useQuery } from "@tanstack/react-query";

import {
  OptionsGetSubCategoryInvoice,
  overviewAPI,
  overviewKey,
  ResponseGetSubCategoryInvoice,
} from "../api";

export const useGetSubCategory = (options: OptionsGetSubCategoryInvoice) => {
  const { data, isLoading, isError } = useQuery({
    queryKey: overviewKey.list(options),
    queryFn: () => overviewAPI.getSubCategoryInvoice(options),
  });
  if (isLoading || isError) {
    return {
      data: [] as ResponseGetSubCategoryInvoice["data"],
      total_page: 0,
      current_page: 1,
      isLoading,
      isError,
    };
  }
  return {
    // @ts-expect-error object already in correct format
    data: data?.data.data as ResponseGetSubCategoryInvoice["data"],
    total_page: data?.total_page ?? 0,
    current_page: data?.current_page,
    isLoading,
    isError,
  };
};
