export default function Item({ name, quantity, category, onSelect }) {
  return (
    <li
      className="bg-slate-300 m-3 max-w-md p-2 rounded-md shadow-sm hover:bg-slate-400 hover:shadow-md cursor-pointer transition-shadow"
      onClick={() => onSelect(name)}
    >
      <h1 className="font-bold capitalize">{name}</h1>
      <p>
        Buy {quantity} in {category}
      </p>
    </li>
  );
}
