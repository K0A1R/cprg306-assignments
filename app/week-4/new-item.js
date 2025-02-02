"use client";
import { useState } from "react";

export default function NewItem() {
  let [quantity, setQuantity] = useState(1);
  function increment() {
    setQuantity(quantity + 1);
  }
  function decrement() {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  }
  return (
    <div className="flex items-center justify-center gap-2 rounded bg-slate-700 w-32 h-12">
      <p className="bg-slate-400 w-6 rounded text-center">{quantity}</p>
      <button
        className="bg-red-500 hover:bg-red-600 rounded size-6"
        onClick={decrement}
      >
        -
      </button>
      <button
        className="bg-green-500 hover:bg-green-600 rounded size-6"
        onClick={increment}
      >
        +
      </button>
    </div>
  );
}
