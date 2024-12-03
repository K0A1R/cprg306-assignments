import Item from "./item";

export default function ItemList({ items }) {
  return (
    <form>
      <ul>
        {items.map((item) => (
          <Item key={item.id} {...item} />
        ))}
      </ul>
    </form>
  );
}
