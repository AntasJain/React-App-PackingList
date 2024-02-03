export function Stats({ items }) {
  const itemsPacked =
    items.length !== 0 ? items.filter((item) => item.packed).length : 0;
  const itemsPackedPercent =
    items.length !== 0 ? (itemsPacked * 100) / items.length : 0;
  return (
    <footer className="stats">
      <em>
        {itemsPackedPercent !== 100
          ? `You have ${items.length} Items on your list and you already packed
        ${itemsPacked} (${itemsPackedPercent.toFixed(0)} %)`
          : "You got everything! Ready to go✈️"}
      </em>
    </footer>
  );
}
