import { ActivityI, AssetEnum, BillI } from "@/types";

export const activities: ActivityI[] = [
  {
    id: 1,
    title: "GOTV Subscription",
    amount: 15000,
    type: "Monthly package",
    asset: AssetEnum.cUSD,
  },
  {
    id: 2,
    title: "DSTV Subscription",
    amount: 45000,
    type: "Monthly package",
    asset: AssetEnum.USDC,
  },
  {
    id: 3,
    title: "Paid Yaka",
    amount: 15000,
    type: "Monthly package",
    asset: AssetEnum.USDT,
  },
];

export const tvBills: BillI[] = [
  {
    id: 1,
    name: "GOTV",
    fiat: "UGX",
    billType: "TV",
    image:
      "https://pbs.twimg.com/profile_images/1777212944914305024/UDX_y1B9_400x400.jpg",
    packages: [
      {
        id: 1,
        name: "GOtv Supa",
        amount: 17.61,
        country: "UGX",
        fiat: 65_000,
      },
      {
        id: 2,
        name: "GOtv Lite",
        amount: 25.74,
        country: "UGX",
        fiat: 95_000,
      },
      {
        id: 3,
        name: "GOtv Max",
        amount: 13.28,
        country: "UGX",
        fiat: 49_000,
      },
      {
        id: 4,
        name: "GOtv Value",
        amount: 5.69,
        country: "UGX",
        fiat: 21_000,
      },
      {
        id: 5,
        name: "GOtv Plus",
        amount: 9.24,
        country: "UGX",
        fiat: 34_000,
      },
      {
        id: 6,
        name: "GOtv Supa Plus Bouquet",
        amount: 28.18,
        country: "UGX",
        fiat: 104_000,
      },
    ],
  },
  {
    id: 2,
    name: "DSTV",
    fiat: "UGX",
    billType: "TV",
    image:
      "https://pbs.twimg.com/profile_images/1744643557195927552/h67Mth-v_400x400.jpg",
    packages: [
      {
        id: 1,
        name: "DStv Access",
        amount: 11.65,
        country: "UGX",
        fiat: 43_000,
      },
      {
        id: 2,
        name: "DStv Family",
        amount: 17.34,
        country: "UGX",
        fiat: 64_000,
      },
      {
        id: 3,
        name: "DStv Compact",
        amount: 28.18,
        country: "UGX",
        fiat: 104_000,
      },
      {
        id: 4,
        name: "DStv Compact Plus",
        amount: 43.35,
        country: "UGX",
        fiat: 160_000,
      },
      {
        id: 5,
        name: "DStv Premium E/Afr + Showmax",
        amount: 74.52,
        country: "UGX",
        fiat: 275_000,
      },
    ],
  },
  {
    id: 3,
    name: "StarTimes",
    fiat: "UGX",
    billType: "TV",
    image:
      "https://pbs.twimg.com/profile_images/1018739761127845888/7cy5mD98_400x400.jpg",
    packages: [
      {
        id: 1,
        name: "Nova Bouquet - Monthly",
        amount: 3.79,
        country: "UGX",
        fiat: 14_000,
      },
      {
        id: 2,
        name: "Nova Bouquet - Daily",
        amount: 0.38,
        country: "UGX",
        fiat: 1_400,
      },
      {
        id: 3,
        name: "Basic Bouquet - Monthly",
        amount: 5.69,
        country: "UGX",
        fiat: 21_000,
      },
      {
        id: 4,
        name: "Super Bouquet - Weekly",
        amount: 5.42,
        country: "UGX",
        fiat: 20_000,
      },
      {
        id: 5,
        name: "Classic Bouquet - Weekly",
        amount: 3.52,
        country: "UGX",
        fiat: 13_000,
      },
      {
        id: 6,
        name: "Classic Bouquet - Monthly",
        amount: 9.74,
        country: "UGX",
        fiat: 36_000,
      },
      {
        id: 7,
        name: "Classic Bouquet - Daily",
        amount: 0.97,
        country: "UGX",
        fiat: 3_600,
      },
      {
        id: 8,
        name: "Smart Bouquet - Monthly",
        amount: 11.65,
        country: "UGX",
        fiat: 43_000,
      },
    ],
  },
];
