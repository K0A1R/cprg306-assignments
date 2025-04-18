"use client";
import itemsData from "./items.json";
import ItemList from "./item-list";
import NewItem from "./new-item";
import MealIdeas from "./meal-ideas";

import { useState } from "react";
import { useUserAuth } from "../_utils/auth-context";

export default function Page() {
  const [items, setItems] = useState([...itemsData]);
  const [selectedItem, setSelectedItem] = useState("");
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

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

  const handleSignIn = async () => {
    try {
      await gitHubSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  const handleSignOut = async () => {
    try {
      await firebaseSignOut();
    } catch (error) {
      console.log(error);
    }
  };

  if (!user) {
    return (
      <main className="flex flex-col h-screen justify-center items-center">
        <h1 className="text-6xl text-slate-800 font-semibold mb-10">
          Sign-In to view your shopping list!
        </h1>
        <button
          className="hover:underline hover:text-green-500 font-semibold"
          onClick={handleSignIn}
        >
          Sign-In
        </button>
      </main>
    );
  }

  return (
    <main>
      <div className="flex justify-between p-2">
        <h1 className="text-xl text-slate-800 font-bold">Shopping List</h1>
        {user && (
          <div className="flex items-center gap-1">
            <img
              src={user.photoURL}
              alt={user.displayName}
              className="w-6 h-6 rounded-full"
            />
            <p className="font-semibold">
              <span>{user.displayName}</span>
              <span className="text-slate-700">({user.email})</span>
            </p>
            <p>|</p>
            <button
              className="hover:underline hover:text-green-500 font-semibold"
              onClick={handleSignOut}
            >
              Sign Out
            </button>
          </div>
        )}
      </div>
      <NewItem onAddItems={handleAddItems} />
      <div className="flex">
        <ItemList items={items} onItemSelect={handleSelectItem} />
        <MealIdeas ingredient={selectedItem} />
      </div>
    </main>
  );
}
