export enum AssetEnum {
  "cUSD" = "cUSD",
  "USDC" = "USDC",
  "USDT" = "USDT",
}

export interface ActivityI {
  id: string | number;
  title: string;
  amount: number;
  type: string;
  asset: AssetEnum;
}

export interface BillI {
  id: string | number;
  name: string;
  fiat: string;
  billType: "TV" | "Internet" | "Electricity" | "Water";
  image: string;
  packages: PackageI[];
}

export interface PackageI {
  id: string | number;
  name: string;
  amount: number;
  duration?: string;
  fiat: number;
  country: string | "UGX";
}

export interface PriceI {
  id: string | number;
  amount: number;
  country: string;
}

export interface AccountI {
  id: string | number;
  name: String;
  accountNo: String;
  address: String;
}

export interface BillInfoI {
  username?: string;
  password?: string;
  action: "paybilladvice";
  provider: "umeme" | "yaka";
  account: string;
  amount: string;
}
