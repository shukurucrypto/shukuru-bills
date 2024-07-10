"use client";

import { ArrowUpDown, Phone, Smartphone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const BillsCards = () => {
  return (
    <>
      <div className="flex w-full flex-row ">
        <div className="w-full h-32 border mb-3 bg-white rounded-md flex flex-col items-center pb-2 overflow-hidden">
          <div className="flex h-full w-full items-center relative bg-black overflow-hidden">
            <Image src="/icons/phone.png" layout="fill" alt="phone" />
          </div>
          <p className="text-xs font-semibold text-center">Airtime & Data</p>
        </div>

        <Link
          href="/tv"
          className="w-full h-32 border mb-3 bg-white rounded-md flex flex-col items-center pb-2 overflow-hidden mx-3"
        >
          <div className="flex h-full w-full items-center relative bg-black overflow-hidden">
            <Image src="/icons/tv.png" layout="fill" alt="phone" />
          </div>
          <p className="text-xs font-semibold text-center">Tv</p>
        </Link>

        <Link
          href="/power"
          className="w-full h-32 border mb-3 bg-white rounded-md flex flex-col items-center pb-2 overflow-hidden mx-3"
        >
          <div className="flex h-full w-full items-center relative bg-black overflow-hidden">
            <Image src="/icons/power.png" layout="fill" alt="phone" />
          </div>
          <p className="text-xs font-semibold text-center">Electricity</p>
        </Link>
      </div>

      <div className="flex w-full flex-row ">
        <Link
          href="/water"
          className="w-full h-32 border  bg-white rounded-md flex flex-col items-center pb-2 overflow-hidden "
        >
          <div className="flex h-full w-full items-center relative bg-black overflow-hidden">
            <Image src="/icons/water.png" layout="fill" alt="phone" />
          </div>
          <p className="text-xs font-semibold text-center">Water</p>
        </Link>

        <div className="w-full h-32  mx-3 rounded-md flex flex-col items-center p-3"></div>
        <div className="w-full h-32   rounded-md flex flex-col items-center p-3"></div>
      </div>
    </>
  );
};

export default BillsCards;
