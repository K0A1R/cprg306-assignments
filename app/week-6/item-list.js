"use client";
import itemsJson from "./items.json";
import Item from "./item";

import { useState } from "react";

export default function ItemList() {
  let items = [...itemsJson];
  let [sortBy, setSortBy] = useState("name");
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
          className="text-white bg-red-500 rounded-lg ml-2 h-8 px-2 hover:bg-red-600"
          type="submit"
          onClick={() => setSortBy("name")}
        >
          Name
        </button>
        <button
          className="text-white bg-red-500 rounded-lg ml-2 h-8 px-2 hover:bg-red-600"
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
