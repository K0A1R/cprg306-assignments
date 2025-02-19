"use client";
import itemsData from "./items.json";
import Item from "./item";

import { useState } from "react";

export default function ItemList() {
  const [sortBy, setSortBy] = useState("name");
  const items = [...itemsData];

  if (sortBy === "name") {
    items.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortBy === "category") {
    items.sort((a, b) => a.category.localeCompare(b.category));
  }

  return (
    <div>
      <div className="flex items-center gap-2 ml-4">
        <p>Sort By:</p>
        <button
          className={`rounded-md p-1 w-24 ${
            sortBy === "name" ? "bg-green-700 text-white" : "bg-green-400"
          }`}
          onClick={() => setSortBy("name")}
        >
          Name
        </button>
        <button
          className={`rounded-md p-1 w-24 ${
            sortBy === "category" ? "bg-green-700 text-white" : "bg-green-400"
          }`}
          onClick={() => setSortBy("category")}
        >
          Category
        </button>
      </div>
      {items.map((item) => (
        <Item key={item.id} {...item} />
      ))}
    </div>
  );
}
