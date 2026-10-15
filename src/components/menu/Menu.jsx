import React from "react";
import { Link, NavLink } from "react-router-dom";

import { useAuth } from "../../context/AuthContext";
import { useCart } from "../../context/CartContext";

import basketWhiteIcon from "../../source/svg/icons/basket-white.svg";
import basketBlackIcon from "../../source/svg/icons/basket-black.svg";
import personWhiteIcon from "../../source/svg/icons/person-white.svg";
import personBlackIcon from "../../source/svg/icons/person-black.svg";

import "./menu.scss";

// dark: black links and icons for pages with a light background
export const Menu = ({ link, icons, dark }) => {
  const { user } = useAuth();
  const { count } = useCart();

  return (
    <nav className={`menu ${dark ? "menu-dark" : ""}`}>
      <ul className="menu__list">
        {link &&
          link.map((item, key) => (
            <li className="menu__item" key={key}>
              <NavLink
                to={item.link}
                end
                className={({ isActive }) =>
                  `menu__link ${isActive ? "menu__link-active" : ""}`
                }
              >
                {item.text}
              </NavLink>
            </li>
          ))}

        {icons && (
          <>
            <li className="menu__item">
              <Link
                to={user ? "/account" : "/login"}
                className="menu__icon"
                aria-label={user ? "My account" : "Sign in"}
                title={user ? `${user.firstName}, your account` : "Sign in"}
              >
                <img src={dark ? personBlackIcon : personWhiteIcon} alt="" />
                {user && <span className="menu__icon-dot" aria-hidden="true" />}
              </Link>
            </li>
            <li className="menu__item">
              <Link to="/cart" className="menu__icon" aria-label={`Cart, ${count} items`}>
                <img src={dark ? basketBlackIcon : basketWhiteIcon} alt="" />
                {count > 0 && <span className="menu__icon-badge">{count}</span>}
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};
