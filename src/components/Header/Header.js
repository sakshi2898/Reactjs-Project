import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
import HeaderCartButton from "./HeaderCartButton";
import CartIcon from "@mui/icons-material/ShoppingCart";

import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      {/* Logo */}
      <Link to="/">
        {/* <img
          className="header__logo"
          src="https://tse3.mm.bing.net/th/id/OIP.4ikh3ksKJNzU_TE8_JLQoQHaD8?w=338&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7"
          alt="" */}
        <span className="header__logo">
          <CartIcon />
        </span>
      </Link>
      <Link style={{ textDecoration: "none" }} to="/">
        <h1 className="header__logoName">ReactMart</h1>
      </Link>

      {/* Search Bar */}
      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__SearchIcon" />
      </div>

      {/* Nav bar */}
      <div className="header__nav">
        <div>
          <Link className="header__option" to="/SignIn">
            <span className="header__optionLineOne">Hello Guest</span>
            <span className="header__optionLineTwo">Sign In</span>
          </Link>
        </div>
        <div className="header__option">
          <span className="header__optionLineOne">Returns</span>
          <span className="header__optionLineTwo">& Orders</span>
        </div>

        <Link className="header__option" to="/wishlist">
          <span className="header__optionLineTwo">Wishlist</span>
        </Link>

        <Link to="/cart">
          <div className="header__optionBasket">
            <HeaderCartButton />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
