import { useState, useEffect } from "react";

type SortingType = "ASC" | "DESC";

export interface UseTableProps {
  /**
   * Order type.
   * @default 'asc'
   */
  sortingType?: SortingType;
  /**
   * Column key.
   * @default "DESC"
   */
  sortingBy?: string;
  /**
   * Maximum data per page.
   * @default "createdAt"
   */
  limit?: number;
  /**
   * Page number start from 0.
   * @default 0
   */
  page?: number;
}

/**
 * Hook to make table data management easier
 * @param initialValues
 * @returns set of values and respective set functions
 */
export const useTable = (initialValues: UseTableProps = {}) => {
  const {
    sortingType: initialSortingType = "DESC",
    sortingBy: initialSortingBy = "createdAt",
    limit: initialLimit = 10,
    page: initialPage = 1,
  } = initialValues;

  const [sortingType, setSortingType] =
    useState<SortingType>(initialSortingType);
  const [sortingBy, setSortingBy] = useState<string | undefined>(
    initialSortingBy
  );
  const [prevLimit, setPrevLimit] = useState(initialLimit);
  const [limit, setLimit] = useState(initialLimit);
  const [page, setPage] = useState(initialPage);

  const toggleSort = (key: string, newOrder?: SortingType) => {
    if (newOrder) {
      setSortingType(newOrder);
    } else {
      if (key === sortingBy) {
        setSortingType((order) => (order === "ASC" ? "DESC" : "ASC"));
      } else {
        setSortingType("ASC");
      }
    }
    setSortingBy(key);
  };

  const handleSetLimit = (newLimit: number) => {
    setPrevLimit(limit);
    setLimit(newLimit);
  };

  useEffect(() => {
    setPage((page) => Math.ceil((page * prevLimit) / limit));
  }, [prevLimit, limit]);

  return [
    { sortingType, sortingBy, limit, page },
    { toggleSort, setLimit: handleSetLimit, setPage },
  ] as const;
};
