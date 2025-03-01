"use client";
import itemsData from "./items.json";
import ItemList from "./item-list";
import NewItem from "./new-item";

import { useState } from "react";

export default function Page() {
  const [items, setItems] = useState([...itemsData]);
  const handleAddItems = (newItem) => {
    setItems([...items, newItem]);
  };
  return (
    <main>
      <h1 className="text-xl text-slate-800 font-bold p-2">Shopping List</h1>
      <NewItem onAddItems={handleAddItems} />
      <ItemList items={items} />
    </main>
  );
}
