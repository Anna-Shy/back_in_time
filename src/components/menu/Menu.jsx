import React from "react";

import { Link } from "../link/Link";

import basketIcon from "../../source/svg/icons/basket.svg";
import personIcon from "../../source/svg/icons/person.svg";
import searchIcon from "../../source/svg/icons/search.svg";

import "./menu.scss";

export const Menu = ({ landing }) => {
  return (
    <nav className="menu">
      <ul className="menu__list">
        {landing && (
          <>
            <li className="menu__item">
              <Link link={"#"} text={"Оновлення"} />
            </li>
            <li className="menu__item">
              <Link link={"#"} text={"Каталог"} />
            </li>
            <li className="menu__item">
              <Link link={"#"} text={"Розпродаж"} />
            </li>
            <li className="menu__item">
              <Link link={"#"} text={"Контакти"} />
            </li>
          </>
        )}
        <li className="menu__item">
          <Link link={"#"} img={searchIcon} />
        </li>
        <li className="menu__item">
          <Link link={"#"} img={personIcon} />
        </li>
        <li className="menu__item">
          <Link link={"#"} img={basketIcon} />
        </li>
      </ul>
    </nav>
  );
};