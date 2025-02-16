import itemsData from "./items.json";
import Item from "./item";

export default function ItemList() {
  return (
    <div>
      {itemsData.map((item) => (
        <Item
          key={item.div}
          name={item.name}
          quantity={item.quantity}
          category={item.category}
        />
      ))}
    </div>
  );
}
