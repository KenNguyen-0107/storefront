"use client";

import { useState } from "react";

interface ProductQuantityProps {
  value?: number;
  min?: number;
  max?: number;
  onChange?: (value: number) => void;
}

export default function ProductQuantity({
  value = 1,
  min = 1,
  max = 99,
  onChange,
}: ProductQuantityProps) {
  const [count, setCount] = useState<number>(value);

  const updateCount = (newValue: number) => {
    const clamped = Math.max(min, Math.min(newValue, max));
    setCount(clamped);
    onChange?.(clamped);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;

    // Allow empty field for editing
    if (val === "") {
      setCount(NaN);
      return;
    }

    // Ensure numeric input
    const parsed = parseInt(val, 10);
    if (!isNaN(parsed)) {
      updateCount(parsed);
    }
  };

  const handleBlur = () => {
    // Re-clamp on blur
    if (isNaN(count)) {
      updateCount(min);
    } else {
      updateCount(count);
    }
  };

  return (
    <div
      className="flex items-center space-x-2"
      role="group"
      aria-label="Product quantity selector"
    >
      <button
        type="button"
        onClick={() => updateCount(count - 1)}
        disabled={count <= min}
        className={`w-8 h-8 rounded-full flex items-center justify-center bg-blue-900 text-white text-lg transition ${
          count <= min ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
        }`}
        aria-label="Decrease quantity"
      >
        &minus;
      </button>

      <input
        type="text"
        inputMode="numeric"
        pattern="[0-9]*"
        min={min}
        max={max}
        value={isNaN(count) ? "" : count}
        onChange={handleInputChange}
        onBlur={handleBlur}
        aria-label="Quantity input"
        className="w-14 h-10 text-center border border-[#8C8B9080] rounded"
      />

      <button
        type="button"
        onClick={() => updateCount(count + 1)}
        disabled={count >= max}
        className={`w-8 h-8 rounded-full flex items-center justify-center bg-blue-900 text-white text-lg transition ${
          count >= max ? "opacity-50 cursor-not-allowed" : " cursor-pointer"
        }`}
        aria-label="Increase quantity"
      >
        +
      </button>
    </div>
  );
}
