"use client";
import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json";
import MealIdeas from "./meal-ideas";
import Link from "next/link";

import { useUserAuth } from "../_utils/auth-context";

import { useState } from "react";

export default function Page() {
  const [items, setItems] = useState([...itemsData]);
  const [selectedItemName, setSelectedItemName] = useState("");

  const { user } = useUserAuth();

  if (!user) {
    return (
      <main className="flex flex-col bg-slate-950 h-screen text-white justify-center items-center">
        <h1 className="text-6xl mb-10">Log-In to view your shopping list!</h1>
        <Link
          className="hover:text-green-400 hover:underline text-xl"
          href="/week-9"
        >
          Log-In
        </Link>
      </main>
    );
  }

  const handleItemSelect = (name) => {
    const selectedValue = name.replace(
      /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g,
      ""
    );
    const strippedValue = selectedValue.split(",")[0].trim();
    setSelectedItemName(strippedValue);
  };

  const handleAddItem = (newItem) => {
    setItems([...items, newItem]);
  };

  return (
    <main className="bg-slate-950 h-full">
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
