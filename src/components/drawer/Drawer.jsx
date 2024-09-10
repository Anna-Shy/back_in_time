import React from "react";

import { Linkin } from "../linkin/Linkin";

import cancel from "../../source/svg/icons/cancel.svg";
import search from "../../source/svg/icons/search-black.svg";
import { menuArray } from "./data";

import "./drawer.scss";

export const Drawer = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className={"drawer-overlay"}>
      <div className="drawer">
        <ul className="drawer__menu">
          <li className="menu__item">
            <button className="item-btn" onClick={onClose}>
              <img className="icon" src={cancel} alt="cancel" />
            </button>
          </li>

          {menuArray.map((item, key) => (
            <li className="menu__item" key={key}>
              <Linkin
                link={item.link}
                text={item.text}
                classStyle={"item-text"}
              />

              {item.icon && (
                <img src={item.icon} alt="icon" className="item-icon" />
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
