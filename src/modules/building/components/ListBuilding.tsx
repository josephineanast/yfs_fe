/* eslint-disable @typescript-eslint/no-explicit-any */
import { Table, TablePagination, TableHeader } from "@/components/Elements";
import { useTable } from "@/hooks";
import { useGetBuilding } from "../hooks";
import { useState, useEffect, useCallback } from "react";
import { formatDate } from "@/utils/formatDate";
import { Skeleton } from "@mui/material";
import { axios } from "@/libs/axios";

export const ListBuilding = () => {
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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const newData = await Promise.all(
          data.map(async (item: any) => {
            const emissionFactorResponse = await axios.get(
              `/emission-factor/${item.emissionFactorId}`
            );
            const emissionFactorData = emissionFactorResponse.data.data;
            const material = emissionFactorData;
            return { ...item, material };
          })
        );
        setNewData(newData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [data]);

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
                data={newData}
                config={[
                  {
                    label: "ID",
                    render: (row) => row.id,
                    onSort: () => handleSort("id"),
                  },
                  {
                    label: "Invoice Date",
                    render: (row) => row && formatDate(row.invoiceDate),
                  },
                  {
                    label: "Invoice No",
                    render: (row) => row.invoiceNo,
                  },
                  {
                    label: "Building Name",
                    render: (row) => row.buildingName,
                  },
                  {
                    label: "Footprint",
                    render: (row) => row.footprint,
                  },
                  {
                    label: "Material/Product",
                    render: (row) => row.material?.danishName,
                  },
                  {
                    label: "Building Codes",
                    render: (row) => row.buildingCodes,
                  },
                  {
                    label: "Nickname",
                    render: (row) => row.nickname,
                  },
                  {
                    label: "Price on Invoice",
                    render: (row) => row.priceOnInvoice,
                  },
                  {
                    label: "Quantity",
                    render: (row) => row.quantity,
                  },
                  {
                    label: "Weight",
                    render: (row) => row.weight,
                  },
                  {
                    label: "Tonnes CO2e",
                    render: (row) => row.tonnesCo2e,
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
