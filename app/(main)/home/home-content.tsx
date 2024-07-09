"use client";

import { useAccountBalance } from "@/app/hooks/useAccountBalance";
import { ActivityI } from "@/types";
import Image from "next/image";
import MainLayout from "../layout";
import ActivityCard from "./components/activity-card";
import BalancesCard from "./components/balances-card";
import BillsCards from "./components/bills-cards";

const HomeContent = ({ activities }: { activities: ActivityI[] }) => {
  return (
    <MainLayout>
      <div className="flex flex-1 flex-grow p-4 flex-col ">
        <div className="flex w-full items-center justify-between">
          <h1 className="text-lg font-medium">👋 Hey, good afternoon!</h1>
          <div className="flex flex-row items-center gap-x-1">
            <div className="size-5 relative">
              <Image src="/uganda.png" layout="fill" alt="flag" />
            </div>
            <p className="text-sm font-bold">UG</p>
          </div>
        </div>

        <BalancesCard />

        <h1 className="text-base font-medium my-4">Bill Services</h1>

        <BillsCards />

        <h1 className="text-base my-4 font-medium">Recent activity</h1>

        <div className="w-full rounded-md overflow-hidden border">
          <ActivityCard />
        </div>
      </div>
    </MainLayout>
  );
};

export default HomeContent;
