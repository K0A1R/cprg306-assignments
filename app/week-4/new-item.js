"use client";
import { useState } from "react";

export default function NewItem() {
  const [quantity, setQuantity] = useState(1);

  let increment = () => {
    if (quantity < 20) {
      setQuantity(quantity + 1);
    }
  };

  let decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  return (
    <section className="flex p-3 mt-3 bg-[#FFFFF0] rounded-lg">
      <p className="flex items-center justify-center bg-[#F5F5F5] rounded-lg text-center font-semibold size-8 mr-1">
        {quantity}
      </p>
      <button
        onClick={decrement}
        className={`${
          quantity === 1
            ? "bg-gray-300 text-gray-700"
            : "bg-red-500 hover:bg-red-600 text-white"
        } rounded-lg font-semibold px-2 mr-1 size-8`}
      >
        -
      </button>
      <button
        onClick={increment}
        className={`${
          quantity === 20
            ? "bg-gray-300 text-gray-700"
            : "bg-green-500 hover:bg-green-600 text-white"
        } rounded-lg font-semibold px-2 size-8`}
      >
        +
      </button>
    </section>
  );
}
