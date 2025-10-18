"use client";

import clsx from "clsx";
import { useState } from "react";

const filterOptions = [
  {
    label: "1Y",
    value: "1Y",
  },
  {
    label: "6M",
    value: "6M",
  },
  {
    label: "3M",
    value: "3M",
  },
  {
    label: "1M",
    value: "1M",
  },
];

export const ChartFilter = () => {
  const [selected, setSelected] = useState<string>("1Y");
  return (
    <div className="rounded-lg p-1.5 bg-slate-100 flex items-center gap-1.5 w-fit">
      {filterOptions.map((option) => (
        <button
          key={option.value}
          className={clsx(
            "!text-sm font-medium text-[#0E1C43] rounded-lg px-2 py-0.5 cursor-pointer",
            selected === option.value && "text-white bg-blue-500"
          )}
          onClick={() => setSelected(option.value)}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
};
