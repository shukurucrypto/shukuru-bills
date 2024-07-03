"use client";

import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

const SecondaryHeader = ({
  title,
  icon,
}: {
  title: string;
  icon?: boolean;
}) => {
  const router = useRouter();
  return (
    <nav className="w-full h-16 flex flex-row items-center justify-between mb-5 fixed top-0 left-0 right-0 bg-white z-20">
      <div onClick={() => router.back()} className="cursor-pointer flex flex-1">
        <ArrowLeft className="w-6 h-6 ml-4" />
      </div>
      <div className="flex flex-row items-center flex-1 justify-center">
        <div className="flex flex-col items-center">
          <h1 className="text-xl font-bold">{title}</h1>
          {/* <p className="text-[12px] font-medium">UGX 104,000</p> */}
        </div>
      </div>
      <div className="flex flex-1"></div>
    </nav>
  );
};

export default SecondaryHeader;
