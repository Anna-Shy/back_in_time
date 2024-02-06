import React from "react";

import { Link } from "../link/Link";

import basketIcon from "../../source/svg/icons/basket.svg";
import personIcon from "../../source/svg/icons/person.svg";
import searchIcon from "../../source/svg/icons/search.svg";

import "./menu.scss";

export const Menu = ({ icons, link }) => {
  return (
    <nav className="menu">
      <ul className="menu__list">
        {link.map((item, key) => (
          <li className="menu__item" key={key}>
            <Link link={item.link} text={item.text} />
          </li>
        ))}

        {icons && (
          <>
            <li className="menu__item">
              <Link link={"#"} img={searchIcon} />
            </li>
            <li className="menu__item">
              <Link link={"#"} img={personIcon} />
            </li>
            <li className="menu__item">
              <Link link={"#"} img={basketIcon} />
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};
