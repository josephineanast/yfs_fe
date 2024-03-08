import { OptionsGetSubCategoryInvoice } from ".";

export const overviewKey = {
  all: [{ namespace: "overview" }] as const,
  lists: () => [{ ...overviewKey.all[0], entity: "list" }] as const,
  list: (options: OptionsGetSubCategoryInvoice) =>
    [{ ...overviewKey.lists()[0], options }] as const,
  details: () => [{ ...overviewKey.all[0], entity: "details" }] as const,
  detail: (id: string) => [{ ...overviewKey.details()[0], id }] as const,
  listDropdown: () =>
    [{ ...overviewKey.all[0], entity: "overview-category" }] as const,
};
