export type PaginatedParams<ExtraParams extends object = object> = {
  limit?: number;
  page?: number;
  sortingType?: "DESC" | "ASC";
  sortingBy?: string;
} & ExtraParams;

export type PaginatedResponse<
  Data,
  ExtraProps extends object = Record<string, never>
> = {
  total_page: number;
  current_page: number;
  data: Data[];
} & ExtraProps;
