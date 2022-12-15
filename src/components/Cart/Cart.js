import { useContext } from "react";

// step-23
import CartContext from "../Store/cart-context";
import CartItem from "./CartItem";

import "./Cart.css";
import "./Subtotal.css";

const Cart = () => {
  // step-24
  const cartCtx = useContext(CartContext);

  const totalAmount = cartCtx.totalAmount.toFixed(2);

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem(item);
  };

  ////
  // step-25 cartItems are rendering on the page
  // Data is pushed in the cart from contextProvider.js file
  const cartItems = (
    <ul className="cart-items">
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          image={item.image}
          title={item.title}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  //   To render number of items in subtotal
  const numberOfCartItems = cartCtx.items.reduce((currentNumber, item) => {
    return currentNumber + item.amount; //it gives previous execution
  }, 0);

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="cart-items__ad"
          src="https://tse1.mm.bing.net/th/id/OIP.raDDY7pNw3DAiP2f0OjWiwHaEQ?w=329&h=162&c=7&r=0&o=5&dpr=1.5&pid=1.7"
          alt=""
        />

        <div>
          <h2 className="cart-items__title">Your Shopping Basket</h2>

          {/* step-26 */}
          {/* cartItems are rendering on the page */}
          {cartItems}
        </div>
      </div>

      <div className="checkout__right">
        <div className="subtotal">
          {/* step-27 */}
          <span>
            <p>
              Cart Subtotal ({numberOfCartItems} items):{" "}
              <strong>₹{totalAmount}</strong>
            </p>
          </span>
          <small className="subtotal__gift">
            <input type="checkbox" />
            This order contains a gift
          </small>
          <button>Proceed to Buy</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
