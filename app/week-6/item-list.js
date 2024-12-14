"use client";
import itemsJson from "./items.json";
import Item from "./item";

import { useState } from "react";

export default function ItemList() {
  const items = [...itemsJson];
  const [sortBy, setSortBy] = useState("name");
  if (sortBy === "name") {
    items.sort((a, b) => a.name.localeCompare(b.name));
  }
  if (sortBy === "category") {
    items.sort((a, b) => a.category.localeCompare(b.category));
  }
  return (
    <section>
      <section className="flex">
        <p className="text-white font-bold ml-4">Sort By:</p>
        <button
          className={`${
            sortBy === "name" ? "bg-red-800" : "bg-red-500"
          } text-white rounded-lg ml-20 h-8 px-2`}
          type="submit"
          onClick={() => setSortBy("name")}
        >
          Name
        </button>
        <button
          className={`${
            sortBy === "category" ? "bg-red-800" : "bg-red-500"
          } text-white rounded-lg ml-5 h-8 px-2`}
          type="submit"
          onClick={() => setSortBy("category")}
        >
          Category
        </button>
        <button type="submit"></button>
      </section>
      <div>
        {items.map((item) => (
          <Item key={item.id} {...item} />
        ))}
      </div>
    </section>
  );
}
