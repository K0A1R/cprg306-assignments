"use client";
import { useState } from "react";

export default function NewItem({ onAddItem }) {
  const [quantity, setQuantity] = useState(1);
  const [name, setName] = useState("");
  const [category, setCategory] = useState("produce");

  const Increment = (event) => {
    event.preventDefault();
    if (quantity < 20) {
      setQuantity(quantity + 1);
    }
  };

  const Decrement = (event) => {
    event.preventDefault();
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  let handleSubmit = (event) => {
    event.preventDefault();
    const newId = Math.random().toString(36).substr(2, 15);
    const newItem = { id: newId, name, quantity, category };
    onAddItem(newItem);
    setName("");
    setQuantity(1);
    setCategory("produce");
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
            onChange={(event) => setName(event.target.value)}
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
            disabled={quantity === 1}
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
            disabled={quantity === 20}
          >
            +
          </button>
          <select
            value={category}
            className="rounded-lg p-1 ml-3"
            onChange={(event) => {
              setCategory(event.target.value);
            }}
          >
            <option value="" disabled>
              Select Category
            </option>
            <option value="produce">Produce</option>
            <option value="dairy">Dairy</option>
            <option value="meat">Meat</option>
            <option value="frozen foods">Frozen Foods</option>
            <option value="canned goods">Canned Goods</option>
            <option value="dry goods">Dry Goods</option>
            <option value="beverages">Beverages</option>
            <option value="snack">Snack</option>
            <option value="household">Household</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div>
          <button
            type="submit"
            className="bg-blue-700 hover:bg-blue-950 text-white font-semibold rounded-lg p-1 shadow-sm hover:shadow-xl focus:shadow-lg"
            onClick={handleSubmit}
          >
            Add
          </button>
        </div>
      </section>
    </form>
  );
}
