import Item from "./item";

export default function NewItem({ itemList }) {
  return (
    <form>
      <ul>
        {itemList.map((item) => (
          <Item key={id} {...item} />
        ))}
      </ul>
    </form>
  );
}
