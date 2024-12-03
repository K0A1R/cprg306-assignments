"use client";
import ItemList from "./item-list";
import itemsJson from "./items.json";

import { useState } from "react";

export default function Page() {
  const [items, setItems] = useState(itemsJson);
  return (
    <main className="bg-slate-950">
      <h1 className="text-white text-3xl font-bold m-2 pl-3">Shopping List</h1>
      <ItemList items={items} />
    </main>
  );
}
