import { OptionsGetBuildingInvoice } from "./building.types";

export const buildingKey = {
  all: [{ namespace: "building" }] as const,
  lists: () => [{ ...buildingKey.all[0], entity: "list" }] as const,
  list: (options: OptionsGetBuildingInvoice) =>
    [{ ...buildingKey.lists()[0], options }] as const,
  details: () => [{ ...buildingKey.all[0], entity: "details" }] as const,
  detail: (id: string) => [{ ...buildingKey.details()[0], id }] as const,
  getEmission: (id: string) => [{ ...buildingKey.details()[0], id }] as const,
  listDropdown: () =>
    [{ ...buildingKey.all[0], entity: "building-category" }] as const,
};
