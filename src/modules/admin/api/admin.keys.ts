import { OptionsGetEnvImpact } from "./admin.types";

export const adminKey = {
  all: [{ namespace: "admin" }] as const,
  lists: () => [{ ...adminKey.all[0], entity: "list" }] as const,
  list: (options: OptionsGetEnvImpact) =>
    [{ ...adminKey.lists()[0], options }] as const,
  details: () => [{ ...adminKey.all[0], entity: "details" }] as const,
  detail: (id: string) => [{ ...adminKey.details()[0], id }] as const,
};
