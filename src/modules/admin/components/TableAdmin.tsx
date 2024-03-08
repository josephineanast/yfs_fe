import { Table, TablePagination, TableHeader } from "@/components/Elements";
import { useTable } from "@/hooks";
import { useGetEnvImpact } from "../hooks/useGetEnvImpact";
import { useState, useEffect, useCallback } from "react";
import { formatDate } from "@/utils/formatDate";
import { Skeleton } from "@mui/material";

export const TableAdmin = () => {
  const [query, actions] = useTable();
  const [keyword, setKeyword] = useState("");

  const { data, total_page, isLoading } = useGetEnvImpact({
    keyword: keyword,
    sortingBy: query.sortingBy ?? "",
    sortingType: query.sortingType,
    page: query.page,
    limit: query.limit,
  });

  const handleChangeSearch = (data: string) => {
    actions.setPage(1);
    setKeyword(data);
  };

  const handleRedirectEmpty = useCallback(() => {
    actions.setPage(1);
  }, [actions]);

  useEffect(() => {
    if (query.page > 1 && !isLoading && data?.length === 0) {
      handleRedirectEmpty();
    }
  }, [handleRedirectEmpty, query.page, isLoading, data]);

  const handleSort = (column: string) => {
    actions.setPage(1);
    actions.toggleSort(column);
  };

  return (
    <>
      {data.length === 0 && isLoading === true ? (
        <Skeleton animation="wave" />
      ) : (
        <>
          {data && data.length > 0 && (
            <>
              <TableHeader
                SearchFieldProps={{
                  placeholder: "Search",
                }}
                onSearch={handleChangeSearch}
              ></TableHeader>
              <Table
                getKey={(row) => row.id}
                data={data}
                config={[
                  {
                    label: "ID",
                    render: (row) => row.id,
                    onSort: () => handleSort("id"),
                  },
                  {
                    label: "Date Created",
                    render: (row) => row && formatDate(row.createdAt),
                  },
                  {
                    label: "Emissions Estimate",
                    render: (row) => row.emissionsEstimate,
                  },
                  {
                    label: "Energy Use Estimate",
                    render: (row) => row.energyUseEstimate,
                  },
                  {
                    label: "Water Use Estimate",
                    render: (row) => row.waterUsageEstimate,
                  },
                  {
                    label: "Scope 1",
                    render: (row) => row.scopeOne,
                  },
                  {
                    label: "Scope 2",
                    render: (row) => row.scopeTwo,
                  },
                  {
                    label: "Scope 3",
                    render: (row) => row.scopeThree,
                  },
                ]}
              />
              <TablePagination
                count={query.limit * total_page}
                page={query.page}
                rowsPerPage={query.limit}
                onPageChange={actions.setPage}
                onRowsPerPageChange={actions.setLimit}
              />
            </>
          )}
        </>
      )}
    </>
  );
};
