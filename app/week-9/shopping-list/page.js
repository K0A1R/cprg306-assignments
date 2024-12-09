"use client";
import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json";
import MealIdeas from "./meal-ideas";

import { useState } from "react";

export default function Page() {
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState("");

  let handleItemSelect = (name) => {
    const selectedValue = name.replace(
      /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g,
      ""
    );
    const strippedValue = selectedValue.split(",")[0].trim();
    setSelectedItemName(strippedValue);
  };

  let handleAddItem = (newItem) => {
    setItems([...items, newItem]);
  };

  return (
    <main className="bg-slate-950">
      <h1 className="text-white text-3xl font-bold m-2 pl-3">Shopping List</h1>

      <NewItem onAddItem={handleAddItem} />
      <div className="flex">
        <ItemList onItemSelect={handleItemSelect} items={items} />
        {selectedItemName !== "" ? (
          <MealIdeas ingredient={selectedItemName} />
        ) : (
          <MealIdeas />
        )}
      </div>
    </main>
  );
}
