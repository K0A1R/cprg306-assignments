export default function Item({ onSelect, name, quantity, category }) {
  return (
    <div>
      <li
        onClick={() => onSelect(name)}
        className="bg-slate-900 p-2 m-4 max-w-sm rounded-lg hover:bg-orange-800 cursor-pointer"
      >
        <h2 className="text-white text-xl font-bold">{name}</h2>
        <p className="text-white text-sm">
          Buy {quantity} in {category}
        </p>
      </li>
    </div>
  );
}
