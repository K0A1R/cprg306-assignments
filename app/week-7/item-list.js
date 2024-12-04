import Item from "./item";

import { useState } from "react";

export default function ItemList({ items }) {
  const [sortBy, setSortBy] = useState("name");
  if (sortBy === "name") {
    items.sort((a, b) => a.name.localeCompare(b.name));
  }
  if (sortBy === "category") {
    items.sort((a, b) => a.category.localeCompare(b.category));
  }
  return (
    <section>
      <section className="flex justify-center bg-slate-900 p-2 m-4 max-w-sm rounded-lg">
        <p className="text-white font-bold">Sort By:</p>
        <button
          className="text-white bg-red-500 rounded-lg ml-20 h-8 px-2 hover:bg-red-600"
          type="button"
          onClick={() => setSortBy("name")}
        >
          Name
        </button>
        <button
          className="text-white bg-red-500 rounded-lg ml-5 h-8 px-2 hover:bg-red-600"
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
