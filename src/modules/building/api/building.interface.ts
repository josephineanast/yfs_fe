export interface NewDataItem {
  buildingCodes: string;
  buildingName: string;
  createdAt: string;
  deletedAt: string | null;
  emissionFactorId: number;
  footprint: number;
  id: number;
  invoiceDate: string;
  invoiceNo: string;
  material: {
    allocatedScope: string;
    category: number;
    country: string;
    createdAt: string;
    danishName: string;
    deletedAt: string | null;
    englishName: string;
    id: number;
    outsideScope: string;
    scopeOne: string;
    scopeThree: string;
    scopeTwo: string;
    sourceYear: string;
    subType: string;
    unit: string;
    updatedAt: string;
  };
  nickname: string;
  priceOnInvoice: number;
  quantity: number;
  tonnesCo2e: number;
  updatedAt: string;
  weight: number;
}
