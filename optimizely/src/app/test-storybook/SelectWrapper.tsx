// components/SelectWrapper.tsx
"use client";

import { useState } from "react";
import Select from "@/packages/niteco-ui/components/atoms/select";

const options: any = [
  { label: "99999-MED-RED", value: "test1" },
  { label: "10001-MED-BLU", value: "test2" },
  { label: "99999-MED-RED", value: "test3" },
  { label: "10001-MED-BLU", value: "test4" },
];

export default function SelectWrapper() {
  const handleSelectChange = (option: any) => {
    // console.log("Selected in client:", option);
  };

  return (
    <div className="w-[400px] m-10">
      <Select
        options={options}
        onChange={handleSelectChange}
        placeholder="Select an option"
        disabled={false}
        selectStyles={{}}
      />
    </div>
  );
}
