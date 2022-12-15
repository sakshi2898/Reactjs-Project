// step-16
import React, { useReducer } from "react";

// step-3
import CartContext from "./cart-context";

// step-18 - initial value setup
const defaultCartState = {
  items: [],
  totalAmount: 0,
};

// step-17
const cartReducer = (state, action) => {
  // step-23
  if (action.type === "ADD") {
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;

    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const existingCartItem = state.items[existingCartItemIndex];
    let updatedItems;

    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount,
      };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  if (action.type === "REMOVE") {
    // Case1: When user clicks on "-" then items should be removed from cart by -1
    // Finding cart item in a cart
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const existingItem = state.items[existingCartItemIndex];
    const updatedTotalAmount = state.totalAmount - existingItem.price;
    let updatedItems;

    // Case2: To check if cart has last item of same type by checking amount === 1
    // If item.id !== action.id -> true then we kept the item else if equal then we removed from the cart
    if (existingItem.amount === 1) {
      updatedItems = state.items.filter((item) => item.id !== action.id);
    }
    // if amount > 1
    else {
      const updatedItem = { ...existingItem, amount: existingItem.amount - 1 };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  return defaultCartState;
};

// step-2 Create CartProvider arrow fucntion component
const CartProvider = (props) => {
  // step-19
  const [cartState, dispatchcartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  // step-14
  const addItemCartHandler = (item) => {
    // step-21
    dispatchcartAction({ type: "ADD", item: item });
  };

  // step-15
  const removeItemHandler = (id) => {
    // step-22
    dispatchcartAction({ type: "REMOVE", id: id });
  };

  // Step-5 - default static values setup
  // const cartContext = {
  //   items: [],
  //   totalAmount: 0;
  //   addItem: addItemCartHandler,
  //   removeItem: removeItemHandler
  // }

  // step-20 - Update the items and totalAmount
  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemCartHandler,
    removeItem: removeItemHandler,
  };

  return (
    // step-4 //step-6 assign value prop
    // CartContext.Provider provides the data to the components
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
