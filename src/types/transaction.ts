export interface Transaction {
  id: string;
  status: "success" | "failed" | "pending";
  dateIssued: string;
  type: "withdrawal" | "pledge" | "lien" | "deposit";
  commodity: string;
  quantity: string;
  receiptId: string;
  amount: string;
}

export interface ClientDetails {
  id: string;
  name: string;
  status: "active" | "inactive" | "pending";
  phoneNumber: string;
  clientId: string;
  occupation: string;
  lastActivity: string;
  residentialAddress: string;
  activeReceipt: number;
  totalReceipt: number;
  underLien: number;
  cancelled: number;
}
