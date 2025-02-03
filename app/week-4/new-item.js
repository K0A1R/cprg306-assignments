"use client";
import { useState } from "react";

export default function NewItem() {
  const [quantity, setQuantity] = useState(1);

  function increment() {
    if (quantity < 50) {
      setQuantity(quantity + 1);
    }
  }
  function decrement() {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  }
  return (
    <div className="flex items-center justify-center gap-2 rounded-lg bg-slate-700 w-32 h-12">
      <p className="bg-[#F5F5F5] size-8 rounded-lg flex items-center justify-center font-bold">
        {quantity}
      </p>
      <button
        className={`${
          quantity === 1
            ? "bg-gray-300 text-gray-700"
            : "bg-red-500 hover:bg-red-600"
        } rounded-lg size-8 font-bold`}
        onClick={decrement}
      >
        -
      </button>
      <button
        className={`${
          quantity === 50
            ? "bg-gray-300 text-gray-700"
            : "bg-green-500 hover:bg-green-600"
        } rounded-lg size-8 font-bold`}
        onClick={increment}
      >
        +
      </button>
    </div>
  );
}
