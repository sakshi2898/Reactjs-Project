// Step-9
import { useContext } from "react";
import "./HeaderCartButton.css";

// Step-10
import CartContext from "../Store/cart-context";

import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";

const HeaderCartButton = () => {
  // Step-11
  const cartCtx = useContext(CartContext);

  // step-12
  const numberOfCartItems = cartCtx.items.reduce((currentNumber, item) => {
    return currentNumber + item.amount; //it gives previous execution
  }, 0);

  return (
    <button className="header__optionBasket">
      <span className="header__optionBasket">{<ShoppingBasketIcon />}</span>
      <span className="header__optionLineTwo header__basketCount">
        {/* step-13 */}
        {/* Displaying Cart items */}
        {numberOfCartItems}
      </span>
    </button>
  );
};

export default HeaderCartButton;
