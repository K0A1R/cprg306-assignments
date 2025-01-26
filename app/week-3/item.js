export default function Item({ name, quantity, category }) {
  return (
    <ul>
      <li className="bg-slate-300 m-3 max-w-md p-2 rounded-md">
        <p className="font-bold">{name}</p>
        <p>
          Buy {quantity} in {category}
        </p>
      </li>
    </ul>
  );
}
