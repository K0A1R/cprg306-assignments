import ItemList from "./item-list";
export default function Page() {
  return (
    <body className="bg-slate-950">
      <main>
        <h1 className="text-white text-3xl font-bold m-2 pl-3">
          Shopping List
        </h1>
        <ItemList />
      </main>
    </body>
  );
}