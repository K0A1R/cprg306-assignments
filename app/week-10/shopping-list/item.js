export default function Item({
  id,
  name,
  quantity,
  category,
  onSelect,
  onDelete,
}) {
  return (
    <li
      onClick={() => onSelect(name)}
      className="bg-slate-300 m-2 max-w-md p-2 rounded-md shadow-sm hover:bg-slate-400 hover:shadow-md cursor-pointer transition-shadow"
    >
      <div className="flex justify-between items-center">
        <h1 className="font-bold capitalize">{name}</h1>
        <p>
          Buy {quantity} in {category}
        </p>
        <button
          onClick={(e) => {
            e.stopPropagation();
            onDelete(id);
          }}
          className="bg-red-500 text-white px-2 py-1 rounded-md hover:bg-red-600"
        >
          Delete
        </button>
      </div>
    </li>
  );
}
