import { useContext } from "react";

// step-23
import CartContext from "../Store/cart-context";
import WishlistItem from "./wishlistItem";

import "./wishlist.css";

const Wishlist = () => {
  // step-24
  const cartCtx = useContext(CartContext);

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem(item);
  };

  ////
  // step-25 cartItems are rendering on the page
  // Data is pushed in the cart from contextProvider.js file
  const wishlistItems = (
    <ul className="cart-items">
      {cartCtx.items.map((item) => (
        <WishlistItem
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

  return <div className="product">{wishlistItems}</div>;
};

export default Wishlist;
