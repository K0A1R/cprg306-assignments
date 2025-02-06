"use client";
import { useState } from "react";

export default function NewItem() {
  const [quantity, setQuantity] = useState(1);

  function increment() {
    if (quantity < 20) {
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
        type="button"
        className={`${
          quantity === 1
            ? "bg-gray-300 text-gray-700"
            : "bg-red-500 hover:bg-red-600"
        } rounded-lg size-8 font-bold`}
        disabled={quantity === 1}
        onClick={decrement}
      >
        -
      </button>
      <button
        type="button"
        className={`${
          quantity === 20
            ? "bg-gray-300 text-gray-700"
            : "bg-green-500 hover:bg-green-600"
        } rounded-lg size-8 font-bold`}
        disabled={quantity === 20}
        onClick={increment}
      >
        +
      </button>
    </div>
  );
}
