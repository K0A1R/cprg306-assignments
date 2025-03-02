export default function Item({ name, quantity, category }) {
  return (
    <li className="bg-slate-300 m-3 max-w-md p-2 rounded-md shadow-sm">
      <h1 className="font-bold">{name}</h1>
      <p>
        Buy {quantity} in {category}
      </p>
    </li>
  );
}
