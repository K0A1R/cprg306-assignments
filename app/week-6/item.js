export default function Item({ name, quantity, category }) {
  return (
    <ul>
      <li className="bg-slate-900 p-2 m-4 max-w-sm rounded-lg">
        <h2 className="text-white text-xl font-bold">{name}</h2>
        <p className="text-white text-sm">
          Buy {quantity} in {category}
        </p>
      </li>
    </ul>
  );
}
