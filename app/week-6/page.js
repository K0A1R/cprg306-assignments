import ItemList from "./item-list";

export default function Page() {
  return (
    <main>
      <h1 className="text-xl text-slate-800 font-bold p-2">Shopping List</h1>
      <ItemList />
    </main>
  );
}
