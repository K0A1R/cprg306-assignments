"use client";
import { useState } from "react";

export default function NewItem() {
  const [quantity, setQuantity] = useState(1);
  const [name, setName] = useState("");
  const [category, setCategory] = useState("produce");

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

  let handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <form
      onSubmit={(event) => {
        handleSubmit(event);
      }}
      className="flex flex-col items-center bg-slate-900 rounded-lg ml-4 p-7 w-fit"
    >
      <section className="flex flex-col items-center p-4 bg-slate-400 rounded-lg w-max">
        <div>
          <input
            type="text"
            placeholder="Item name"
            className="rounded-md pl-1 shadow-sm hover:shadow-lg focus:shadow-lg focus:outline-none"
            value={name}
            onChange={handleSubmit}
          ></input>
        </div>
        <div className="flex p-3 rounded-lg">
          <p className="flex items-center justify-center bg-[#F5F5F5] rounded-lg text-center font-semibold size-8 mr-3 ml-3">
            {quantity}
          </p>
          <button
            onClick={Decrement}
            className={`${
              quantity === 1
                ? "bg-gray-300 text-gray-700"
                : "bg-red-500 hover:bg-red-600 text-white"
            } rounded-lg font-semibold px-2 mr-1 size-8`}
          >
            -
          </button>
          <button
            onClick={Increment}
            className={`${
              quantity === 20
                ? "bg-gray-300 text-gray-700"
                : "bg-green-500 hover:bg-green-600 text-white"
            } rounded-lg font-semibold px-2 size-8`}
          >
            +
          </button>
          <select value={category} className="rounded-lg p-1 ml-3">
            <option value="" disabled>
              Select Category
            </option>
            <option value="Produce">Produce</option>
            <option value="Dairy">Dairy</option>
            <option value="Meat">Meat</option>
            <option value="Frozen Foods">Frozen Foods</option>
            <option value="Canned Goods">Canned Goods</option>
            <option value="Dry Goods">Dry Goods</option>
            <option value="Beverages">Beverages</option>
            <option value="Snack">Snack</option>
            <option value="Household">Household</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div>
          <button
            type="submit"
            className="bg-[#2a1abe] hover:bg-[#150d5f] text-white font-semibold rounded-lg p-1 shadow-sm hover:shadow-lg focus:shadow-lg"
            onClick={handleSubmit}
          >
            Add
          </button>
        </div>
      </section>
    </form>
  );
}
