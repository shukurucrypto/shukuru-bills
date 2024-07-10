"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { useAccount } from "wagmi";

export default function Home() {
  const { address } = useAccount();

  const router = useRouter();

  return (
    <main className="flex items-center justify-center bg-defaultColor h-screen flex-col p-8">
      <div className="flex flex-1 items-center justify-end flex-col py-10">
        <h1 className="text-xl font-semibold my-3">
          Pay for <span className="underline">everyday</span> bills
        </h1>

        <p className="text-[11px] text-white">
          {address?.slice(0, 3)} ....{address?.slice(-4)}
        </p>
      </div>

      <div className="w-full">
        <Button
          onClick={() => router.push("/home")}
          className="w-full flex flex-row items-center justify-center bg-green-600 font-semibold"
        >
          Get Started
          <ArrowRight size={20} />
        </Button>
      </div>
    </main>
  );
}
