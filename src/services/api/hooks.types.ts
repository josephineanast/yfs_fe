type OptionKey = string | number;
type OptionValue =
  | string
  | Array<string>
  | number
  | Array<number>
  | boolean
  | Blob
  | OptionRecord
  | undefined;

export interface OptionRecord {
  [key: OptionKey]: OptionValue;
}

export interface ErrorRecord {
  [key: string]: string[];
}
/**
 * Standard option object for services.
 *
 * @template P - The type of the parameters.
 * @template Q - The type of the query parameters.
 * @template B - The type of the request body.
 */
export interface BaseServiceOptions<
  P extends OptionRecord = OptionRecord,
  Q extends OptionRecord = OptionRecord,
  B extends OptionRecord = OptionRecord
> {
  params?: P;
  query?: Q;
  body?: B;
}

export interface BaseResponse<T> {
  success: boolean;
  message: string;
  data: T;
}

// export interface ErrorResponse extends AxiosError {
//   response: AxiosError['response'] &
//     // FIXME: use this for all error response
//     GeneralApiProblem & {
//       data: {
//         message?: string;
//         errors?: ErrorRecord;
//         data: {
//           errors?: ErrorRecord;
//         };
//       };
//     };
// }

export interface PaginationMetadata {
  total_page: number;
  dataCount: number;
  dataPerPage: number;
  current_page: number;
}

export type QueryPagination = {
  page?: number;
};

export enum SortType {
  earliest = 1,
  latest = 2,
}

/**
 * Guidelines for writing services
 *
 * 1. Folder Structure
 *   - [service name] - Usually refers to the namespace of an endpoint.
 *    - index.ts - Used to aggregate everything in the folder.
 *    - [service name].interfaces.ts - Contains all the object models.
 *    - [service name].keys.ts - react-query keys.
 *    - [service.name].types.ts - Contains all response type, request option type, url param, etc. that does not belong in the interfaces.
 *    - [service name].ts - Contains all the services methods.
 *    - use*.ts - The hooks wrapping react query
 *
 * 2. Naming
 *   - Interfaces - Use "I" as prefix.
 *   - Request Options (Params, Query. Body) - use "Options" as prefix.
 *   - Response - use "Response" as prefix.
 */
