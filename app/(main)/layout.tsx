import React, { ReactNode } from "react";
import ReactQueryProvider from "../context/reactquery-provider";
import { Toaster } from "sonner";

const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <ReactQueryProvider>
      <div className="flex flex-1 flex-grow bg-slate-50 flex-col min-h-screen">
        {children}

        <Toaster />
      </div>
    </ReactQueryProvider>
  );
};

export default MainLayout;
