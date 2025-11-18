export interface Receipt {
  id: string;
  commodity: string;
  quantity: number;
  netWeight: string;
  grade: number;
  dateIssued: string;
  status: "active" | "cancelled" | "pledge" | "trade";
}
