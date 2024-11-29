"use client";
import { useState } from "react";

export default function NewItem() {
  const [quantity, setQuantity] = useState(1);

  let Increment = () => {
    if (quantity < 20) {
      setQuantity(quantity + 1);
    }
  };

  let Decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  return (
    <section className="flex p-3 mt-3 bg-white">
      <p className="w-10">{quantity}</p>
      <button
        onClick={Decrement}
        className={`${
          quantity === 1
            ? "bg-gray-400"
            : "bg-blue-400 hover:bg-blue-500 focus:border-2 focus:border-blue-300"
        } rounded-lg px-2 mr-1 text-white  h-8 w-8`}
      >
        -
      </button>
      <button
        onClick={Increment}
        className={`${
          quantity === 20
            ? "bg-gray-400"
            : "bg-blue-400 hover:bg-blue-500 focus:border-2 focus:border-blue-300"
        } rounded-lg px-2 text-white h-8 w-8`}
      >
        +
      </button>
    </section>
  );
}
