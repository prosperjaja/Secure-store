/**
 * Trade-related types and interfaces
 */

export interface Marketplace {
  id: string;
  name: string;
  description: string;
  tradingFee: string;
  settlementTime: string;
  minimumListing: string;
  paymentMethod: string;
}

export interface TradeReceipt {
  id: string;
  commodity: string;
  availableQuantity: number;
  unit: string;
}

export interface TradeDetails {
  askingPrice: number;
  tradeDuration: string;
  expiryDate: string;
}

export interface TradePledge {
  marketplaceId: string;
  marketplace: Marketplace;
  receiptId: string;
  receipt: TradeReceipt;
  withdrawalQuantity: number;
  askingPrice: number;
  tradeDuration: string;
  expiryDate: string;
}

export type TradeStep = 1 | 2 | 3 | 4;

export const TRADE_DURATIONS = [
  { value: "3", label: "3 months" },
  { value: "6", label: "6 months" },
  { value: "9", label: "9 months" },
  { value: "12", label: "12 months" },
];
