"use client";
import ItemList from "./item-list";
import NewItem from "./new-item";
import MealIdeas from "./meal-ideas";

import Link from "next/link";
import { useUserAuth } from "../_utils/auth-context";
import { getItems, addItem } from "../_services/shopping-list-service";

import { useState, useEffect } from "react";

export default function Page() {
  const [items, setItems] = useState([]);
  const [selectedItemName, setSelectedItemName] = useState("");
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  const login = async () => {
    await gitHubSignIn();
  };

  const logout = async () => {
    await firebaseSignOut();
  };

  if (!user) {
    return (
      <main className="flex flex-col bg-slate-950 h-full text-white items-center">
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

  let loadItems = async () => {
    try {
      let items = await getItems(user.uid);
      setItems(items);
    } catch (error) {
      console.error(error);
    }
  };

  let handleItemSelect = (name) => {
    const selectedValue = name.replace(
      /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g,
      ""
    );
    const strippedValue = selectedValue.split(",")[0].trim();
    setSelectedItemName(strippedValue);
  };

  let handleAddItem = (newItem) => {
    const itemId = addItem(user.uid, newItem);
    newItem = { id: itemId, ...newItem };
    setItems((prevItems) => [...prevItems, newItem]);
  };

  // Use effect NOT WORKING! Only Works if I call loadItems() directly.

  //useEffect(() => {
  //  loadItems();
  //}, [user.id]);

  loadItems();

  return (
    <main className="bg-slate-950">
      <section className="flex text-white justify-between">
        <h1 className="text-3xl font-bold pl-3">Shopping List</h1>
        <div className="flex-row pr-3">
          <p>
            User: {user.displayName} Email: {user.email}
          </p>
          <button className="hover:text-green-400" onClick={logout}>
            Log Out
          </button>
        </div>
      </section>

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
