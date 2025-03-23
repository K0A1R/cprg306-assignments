"use client";
import Item from "./item";

import { useState } from "react";

export default function ItemList({ items, onItemSelect, onItemDelete }) {
  const [sortBy, setSortBy] = useState("name");

  let sortedItems = [];

  // Sort items based on name or category
  if (sortBy === "name") {
    sortedItems = [...items].sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortBy === "category") {
    sortedItems = [...items].sort((a, b) =>
      a.category.localeCompare(b.category)
    );
  }

  // Group items based on category
  if (sortBy === "groupedCategory") {
    const groupedItems = items.reduce((groupedCategory, item) => {
      const category = item.category;
      if (!groupedCategory[category]) {
        groupedCategory[category] = [];
      }
      groupedCategory[category].push(item);
      return groupedCategory;
    }, {});
    // convert groupedItems object to an array
    sortedItems = Object.keys(groupedItems).map((category) => ({
      category,
      items: groupedItems[category],
    }));
    // Sort the array based on category
    sortedItems.sort((a, b) => a.category.localeCompare(b.category));
    // Sort items within each category
    sortedItems.forEach((group) => {
      group.items.sort((a, b) => a.name.localeCompare(b.name));
    });
  }

  return (
    <div>
      <div className="flex items-center gap-2 ml-4">
        <p>Sort By:</p>
        <button
          className={`rounded-md p-1 w-24 shadow-sm ${
            sortBy === "name"
              ? "bg-green-700 text-white shadow-md"
              : "bg-green-400"
          }`}
          onClick={() => setSortBy("name")}
        >
          Name
        </button>
        <button
          className={`rounded-md p-1 w-24 shadow-sm ${
            sortBy === "category"
              ? "bg-green-700 text-white shadow-md"
              : "bg-green-400"
          }`}
          onClick={() => setSortBy("category")}
        >
          Category
        </button>
        <button
          className={`rounded-md p-1 w-24 shadow-sm ${
            sortBy === "groupedCategory"
              ? "bg-green-700 text-white shadow-md"
              : "bg-green-400"
          }`}
          onClick={() => setSortBy("groupedCategory")}
        >
          Grouped Category
        </button>
      </div>
      <ul>
        {sortBy === "groupedCategory"
          ? sortedItems.map((group) => (
              <div key={group.category}>
                <h2 className="text-lg font-bold mt-4 ml-1 capitalize text-slate-800">
                  {group.category}
                </h2>
                {group.items.map((item) => (
                  <Item
                    key={item.id}
                    {...item}
                    onSelect={onItemSelect}
                    onDelete={onItemDelete}
                  />
                ))}
              </div>
            ))
          : sortedItems.map((item) => (
              <Item
                key={item.id}
                {...item}
                onSelect={onItemSelect}
                onDelete={onItemDelete}
              />
            ))}
      </ul>
    </div>
  );
}
