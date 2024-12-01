import itemsJson from "./items.json";
import Item from "./item";

export default function ItemList() {
  return (
    <div>
      {itemsJson.map((item) => (
        <Item id={item.id} {...item} />
      ))}
    </div>
  );
}
