import Item from "./item";

import { useState } from "react";

export default function ItemList({ items }) {
  const [sortBy, setSortBy] = useState("name");

  if (sortBy === "name") {
    items = [...items].sort((a, b) => a.name.localeCompare(b.name));
  }
  if (sortBy === "category") {
    items = [...items].sort((a, b) => a.category.localeCompare(b.category));
  }

  return (
    <section>
      <section className="flex justify-center bg-slate-900 p-2 m-4 max-w-sm rounded-lg">
        <p className="text-white font-bold">Sort By:</p>
        <button
          className={`${
            sortBy === "name" ? "bg-red-800" : "bg-red-500"
          } text-white rounded-lg ml-20 h-8 px-2`}
          type="button"
          onClick={() => setSortBy("name")}
        >
          Name
        </button>
        <button
          className={`${
            sortBy === "category" ? "bg-red-800" : "bg-red-500"
          } text-white rounded-lg ml-5 h-8 px-2`}
          type="button"
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
