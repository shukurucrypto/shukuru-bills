import { ReactNode } from "react";
import { Toaster } from "sonner";

const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex flex-1 flex-grow bg-slate-50 flex-col min-h-screen">
      {children}

      <Toaster />
    </div>
  );
};

export default MainLayout;
