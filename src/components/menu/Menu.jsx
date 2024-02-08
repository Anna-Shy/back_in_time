import React from "react";

import { Linkin } from "../linkin/Linkin";

import basketIcon from "../../source/svg/icons/basket.svg";
import personIcon from "../../source/svg/icons/person.svg";
import searchIcon from "../../source/svg/icons/search.svg";

import "./menu.scss";

export const Menu = ({ link }) => {
  return (
    <nav className="menu">
      <ul className="menu__list">
        {link &&
          link.map((item, key) => (
            <li className="menu__item" key={key}>
              <Linkin link={item.link} text={item.text} />
            </li>
          ))}

        <li className="menu__item">
          <Linkin link={"#"} img={searchIcon} />
        </li>
        <li className="menu__item">
          <Linkin link={"#"} img={personIcon} />
        </li>
        <li className="menu__item">
          <Linkin link={"#"} img={basketIcon} />
        </li>
      </ul>
    </nav>
  );
};
