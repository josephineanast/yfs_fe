import {
  QueryClient,
  DefaultOptions,
  UseQueryOptions,
  UseMutationOptions,
  MutationCache,
} from "@tanstack/react-query";
import { AxiosError } from "axios";

const queryConfig: DefaultOptions = {
  queries: {
    gcTime: 1000 * 60 * 60 * 24,
    staleTime: 2000,
    retry: 0,
    throwOnError: true,
    refetchOnWindowFocus: false,
  },
};

const mutationCache: MutationCache = new MutationCache();

export const queryClient = new QueryClient({
  defaultOptions: queryConfig,
  mutationCache,
});

export type ExtractFnReturnType<
  FnType extends (...args: unknown[]) => unknown
> = Awaited<ReturnType<FnType>>;

export type QueryConfig<QueryFnType extends (...args: unknown[]) => unknown> =
  Omit<
    UseQueryOptions<ExtractFnReturnType<QueryFnType>>,
    "queryKey" | "queryFn"
  >;

export type MutationConfig<
  MutationFnType extends (...args: unknown[]) => unknown
> = UseMutationOptions<
  ExtractFnReturnType<MutationFnType>,
  AxiosError,
  Parameters<MutationFnType>[0]
>;
