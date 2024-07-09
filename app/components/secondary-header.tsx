"use client";

import { ArrowLeft, Home } from "lucide-react";
import Link from "next/link";
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
      <div onClick={() => router.back()} className="cursor-pointer flex ">
        <ArrowLeft className="w-6 h-6 ml-4" />
      </div>
      <div className="flex flex-row items-center flex-1 justify-center">
        <div className="flex flex-col items-center">
          <h1 className="text-xl font-bold">{title}</h1>
        </div>
      </div>
      <div className="flex  justify-end px-5">
        <Link href="/home">
          <Home className="w-5 h-5 " />
        </Link>
      </div>
    </nav>
  );
};

export default SecondaryHeader;
