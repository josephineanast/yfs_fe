import { OptionsGetEnvImpact } from "./results.types";

export const resultsKey = {
  all: [{ namespace: "results" }] as const,
  lists: () => [{ ...resultsKey.all[0], entity: "list" }] as const,
  list: (options: OptionsGetEnvImpact) =>
    [{ ...resultsKey.lists()[0], options }] as const,
  details: () => [{ ...resultsKey.all[0], entity: "details" }] as const,
  detail: (id: string) => [{ ...resultsKey.details()[0], id }] as const,
};
