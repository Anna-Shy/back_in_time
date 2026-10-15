import React from "react";

import { Linkin } from "../linkin/Linkin";

import { useAuth } from "../../context/AuthContext";
import { useCart } from "../../context/CartContext";

import cancel from "../../source/svg/icons/cancel.svg";
import basketBlack from "../../source/svg/icons/basket-black.svg";
import personBlack from "../../source/svg/icons/person-black.svg";
import { menuArray } from "./data";

import "./drawer.scss";

export const Drawer = ({ isOpen, onClose }) => {
  const { user } = useAuth();
  const { count } = useCart();

  if (!isOpen) return null;

  const items = [
    ...menuArray,
    { link: "/cart", text: count ? `Cart (${count})` : "Cart", icon: basketBlack },
    user
      ? { link: "/account", text: user.firstName, icon: personBlack }
      : { link: "/login", text: "Sign in / Sign up", icon: personBlack }
  ];

  return (
    <div className={"drawer-overlay"}>
      <div className="drawer">
        <ul className="drawer__menu">
          <li className="menu__item">
            <button className="item-btn" onClick={onClose} aria-label="Close menu">
              <img className="icon" src={cancel} alt="" />
            </button>
          </li>

          {items.map((item) => (
            <li className="menu__item" key={item.link} onClick={onClose}>
              <Linkin
                link={item.link}
                text={item.text}
                classStyle={"item-text"}
              />

              {item.icon && (
                <img src={item.icon} alt="" className="item-icon" />
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
