import items from "../data/items.json";

export default function Shop() {
  return (
    <div className="view p-4">
      <div className="shop">
        {items.map((item) => (
          <div key={item.id} className="item">
            <h4>{item.name}</h4>
            <p>{item.category}</p>
            <p>{item.description}</p>
            <div>
              <span>${item.price.toFixed(2)}</span>
              <button>Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
