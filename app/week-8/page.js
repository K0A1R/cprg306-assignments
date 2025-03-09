"use client";
import itemsData from "./items.json";
import ItemList from "./item-list";
import NewItem from "./new-item";
import MealIdeas from "./meal-ideas";

import { useState } from "react";

export default function Page() {
  const [items, setItems] = useState([...itemsData]);
  const [selectedItem, setSelectedItem] = useState("");

  const handleAddItems = (newItem) => {
    setItems([...items, newItem]);
  };

  const handleSelectItem = (name) => {
    const selectedValue = name.replace(
      /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g,
      ""
    );
    const strippedValue = selectedValue.split(",")[0].trim();
    setSelectedItem(strippedValue);
  };
  return (
    <main>
      <h1 className="text-xl text-slate-800 font-bold p-2">Shopping List</h1>
      <NewItem onAddItems={handleAddItems} />
      <div className="flex">
        <ItemList items={items} onItemSelect={handleSelectItem} />
        {selectedItem !== "" ? (
          <MealIdeas ingredient={selectedItem} />
        ) : (
          <MealIdeas />
        )}
      </div>
    </main>
  );
}
