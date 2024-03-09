/* eslint-disable @typescript-eslint/no-explicit-any */
import { Table, TablePagination, TableHeader } from "@/components/Elements";
import { useTable } from "@/hooks";
import { useGetBuilding } from "../hooks";
import React, { useState, useEffect, useCallback, useMemo } from "react";
import { formatDate } from "@/utils/formatDate";
import { Skeleton } from "@mui/material";
import { axios } from "@/libs/axios";

export const ListBuilding = React.memo(() => {
  const [query, actions] = useTable();
  const [keyword, setKeyword] = useState("");
  const [newData, setNewData] = useState<any[]>([]);

  const { data, total_page, isLoading } = useGetBuilding({
    keyword: keyword,
    sortingBy: query.sortingBy ?? "",
    sortingType: query.sortingType,
    page: query.page,
    limit: query.limit,
  });

  const fetchData = useFetchData(data);

  useEffect(() => {
    fetchData().then((newData) => setNewData(newData));
  }, [fetchData, data]);

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

  const tableConfig = useMemo(
    () => [
      {
        label: "ID",
        render: (row: any) => row.id,
        onSort: () => handleSort("id"),
      },
      {
        label: "Invoice Date",
        render: (row: any) => row && formatDate(row.invoiceDate),
      },
      {
        label: "Invoice No",
        render: (row: any) => row.invoiceNo,
      },
      {
        label: "Building Name",
        render: (row: any) => row.buildingName,
      },
      {
        label: "Footprint",
        render: (row: any) => row.footprint,
      },
      {
        label: "Material/Product",
        render: (row: any) => row.material?.danishName,
      },
      {
        label: "Building Codes",
        render: (row: any) => row.buildingCodes,
      },
      {
        label: "Nickname",
        render: (row: any) => row.nickname,
      },
      {
        label: "Price on Invoice",
        render: (row: any) => row.priceOnInvoice,
      },
      {
        label: "Quantity",
        render: (row: any) => row.quantity,
      },
      {
        label: "Weight",
        render: (row: any) => row.weight,
      },
      {
        label: "Tonnes CO2e",
        render: (row: any) => row.tonnesCo2e,
      },
    ],
    [handleSort]
  );

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
                data={newData}
                config={tableConfig}
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
});

// Custom hook to fetch emission factor data
const useFetchData = (data: any[]) => {
  return useCallback(async () => {
    try {
      const emissionFactorIds = data.map((item) => item.emissionFactorId);
      const emissionFactorResponse = await axios.get(
        `/emission-factors?ids=${emissionFactorIds.join(",")}`
      );
      const emissionFactorData: any = emissionFactorResponse.data.data;

      const newData = data.map((item) => {
        const material = emissionFactorData.find(
          (factor: any) => factor.id === item.emissionFactorId
        );
        return { ...item, material };
      });

      return newData;
    } catch (error) {
      console.error("Error fetching data:", error);
      return data;
    }
  }, [data]);
};
