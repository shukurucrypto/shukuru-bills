import React from "react";

const ConfirmedCard = ({
  title,
  value,
  token,
}: {
  title: string;
  value: string;
  token?: boolean;
}) => {
  return (
    <div className="w-full flex flex-row items-center justify-between border-b h-12">
      <h1 className="text-sm font-semibold text-neutral-400">{title}</h1>
      <div className="flex flex-row items-center">
        <h1 className={`font-medium ${token && "underline font-bold"} `}>
          {value}
        </h1>
      </div>
    </div>
  );
};

export default ConfirmedCard;
