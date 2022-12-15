import "./CartItem.css";

const CartItem = (props) => {
  const price = props.price.toFixed(2);

  return (
    <div className="cart-item">
      <div>
        <img className=".cart-item__image" src={props.image} alt="" />
        <div className="cartProduct__info">
          <p className="checkoutProduct__title ">{props.title}</p>

          <p className="cart-itemSummary">
            <small className="price">₹{price}</small>{" "}
          </p>
          <span className="amount">x {props.amount}</span>
        </div>
        <div className="actions">
          <button onClick={props.onRemove}>-</button>
          <button onClick={props.onAdd}>+</button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
