"use client";
import { useState } from "react";

export default function NewItem() {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
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
    let item = { name, quantity, category };
    console.log(item);
    alert(
      `Added Item: ${name} | Quantity: ${quantity} | Category: ${category}`
    );
    setName("");
    setQuantity(1);
    setCategory("produce");
  };

  return (
    <form
      className="flex flex-col items-center bg-[#ededac] rounded-lg p-7"
      onSubmit={(event) => handleSubmit(event)}
    >
      <section>
        <input
          type="text"
          placeholder="Item name"
          className="rounded-md pl-1"
          value={name}
          onChange={(event) => setName(event.target.value)}
          required
        />
      </section>
      <section className="flex p-3 m-3 bg-[#FFFFF0] rounded-lg justify-center">
        <p className="flex items-center justify-center bg-[#F5F5F5] rounded-lg text-center font-semibold size-8 mr-1">
          {quantity}
        </p>
        <button
          type="button"
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
          type="button"
          onClick={Increment}
          className={`${
            quantity === 20
              ? "bg-gray-300 text-gray-700"
              : "bg-green-500 hover:bg-green-600 text-white"
          } rounded-lg font-semibold px-2 mr-3 size-8`}
        >
          +
        </button>
        <select
          value={category}
          onChange={(event) => setCategory(event.target.value)}
          className="rounded-lg p-1"
        >
          <option value="" disabled>
            Category
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
      </section>
      <section>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg p-2"
        >
          Add
        </button>
      </section>
    </form>
  );
}