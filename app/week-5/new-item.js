"use client";
import { useState } from "react";

export default function NewItem() {
  const [quantity, setQuantity] = useState(1);
  const [name, setName] = useState("");
  const [category, setCategory] = useState("produce");

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

  function handleSubmit(event) {
    event.preventDefault();
    const item = { name, quantity, category };
    console.log(item);
    alert(
      `Added Item: ${name} | Quantity: ${quantity} | Category: ${category}`
    );
    setQuantity(1);
    setName("");
    setCategory("produce");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 border-2 bg-slate-700 border-gray-300 p-4 rounded-lg"
    >
      {/* Textbox */}
      <input
        type="text"
        placeholder="Item Name"
        value={name}
        onChange={(event) => setName(event.target.value)}
        className="rounded-sm hover:shadow-xl focus:shadow-xl focus:outline-none pl-1"
      ></input>
      {/* Counter + Drop Down Container */}
      <div className="flex items-center justify-center gap-4">
        {/* Counter */}
        <div className="flex items-center justify-center gap-2 rounded-lg bg-slate-100 w-32 h-12">
          <p className="bg-[#F5F5F5] size-8 rounded-lg flex items-center justify-center font-bold">
            {quantity}
          </p>
          <button
            type="button"
            onClick={decrement}
            className={`${
              quantity === 1
                ? "bg-gray-300 text-gray-700"
                : "bg-red-500 hover:bg-red-600"
            } rounded-lg size-8 font-bold`}
            disabled={quantity === 1}
          >
            -
          </button>
          <button
            type="button"
            onClick={increment}
            className={`${
              quantity === 20
                ? "bg-gray-300 text-gray-700"
                : "bg-green-500 hover:bg-green-600"
            } rounded-lg size-8 font-bold`}
            disabled={quantity === 20}
          >
            +
          </button>
        </div>
        {/* Drop Down */}
        <select
          id="category"
          value={category}
          onChange={(event) => setCategory(event.target.value)}
          className="rounded-sm pl-1 bg-slate-100 hover:shadow-xl"
        >
          <option value={""} disabled>
            Select Category
          </option>
          <option value={"produce"}>Produce</option>
          <option value={"dairy"}>Dairy</option>
          <option value={"bakery"}>Bakery</option>
          <option value={"meat"}>Meat</option>
          <option value={"frozen food"}>Frozen Foods</option>
          <option value={"canned goods"}>Canned Goods</option>
          <option value={"dry goods"}>Dry Goods</option>
          <option value={"beverages"}>Beverages</option>
          <option value={"snacks"}>Snacks</option>
          <option value={"household"}>Household</option>
          <option value={"other"}>Other</option>
        </select>
      </div>
      <button
        type="submit"
        className="bg-blue-400 rounded-lg w-full text-grey hover:bg-blue-500 hover:text-white hover:shadow-xl"
      >
        Add Item
      </button>
    </form>
  );
}
