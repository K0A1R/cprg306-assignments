"use client";
import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json";

import { useState } from "react";

export default function Page() {
  const [items, setItems] = useState([...itemsData]);

  let handleAddItem = (newItem) => {
    setItems([...items, newItem]);
  };

  return (
    <main className="bg-slate-950">
      <h1 className="text-white text-3xl font-bold m-2 pl-3">Shopping List</h1>
      <NewItem onAddItem={handleAddItem} />
      <ItemList items={items} />
    </main>
  );
}
