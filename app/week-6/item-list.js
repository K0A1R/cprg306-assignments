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
      <section className="flex gap-5">
        <p className="text-white font-bold">Sort By:</p>
        <button
          className="text-white bg-blue-500 rounded-lg h-8 px-2 hover:bg-blue-600"
          type="submit"
          onClick={() => setSortBy("name")}
        >
          Name
        </button>
        <button
          className="text-white bg-blue-500 rounded-lg h-8 px-2 hover:bg-blue-600"
          type="submit"
          onClick={() => setSortBy("category")}
        >
          Category
        </button>
      </section>
      <div>
        {items.map((item) => (
          <Item key={item.id} {...item} />
        ))}
      </div>
    </section>
  );
}
