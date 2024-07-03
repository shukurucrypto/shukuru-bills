import { Loader } from "lucide-react";
import React from "react";

const LoadingPage = () => {
  return (
    <div className="flex flex-1 items-center justify-center">
      <Loader className="w-12 h-12 animate-spin" />
    </div>
  );
};

export default LoadingPage;
