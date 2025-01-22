export default function Item({ name, quantity, category }) {
  return (
    <ul className="bg-slate-300 m-3 max-w-md p-2 rounded-md">
      <li className="font-bold">{name}</li>
      <li>
        Buy {quantity} in {category}
      </li>
    </ul>
  );
}
