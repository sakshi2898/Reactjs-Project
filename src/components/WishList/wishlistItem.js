import "./wishlistItem.css";

const WishlistItem = (props) => {
  const price = props.price.toFixed(2);

  return (
    <li className="cart-item">
      <div>
        <span>
          <img src={props.image} alt="" />
        </span>
        <span>
          <h2>{props.title}</h2>
        </span>

        <div className="cart-itemSummary">
          <span className="price">₹{price}</span>
        </div>
      </div>
      <div className="actions">
        <button>Move to Bag</button>
      </div>
    </li>
  );
};

export default WishlistItem;
