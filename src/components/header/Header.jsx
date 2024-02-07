import React from "react";

import { Logo } from "../../components/logo/Logo";
import { Menu } from "../../components/menu/Menu";
import { Linkin } from "../linkin/Linkin";

import menuAdaptiveIcon from "../../source/svg/icons/menu-adaptive.svg";

import "./header.scss";

const headerMenuArray = [
  {
    link: "/newarrivals",
    text: "Оновлення"
  },
  {
    link: "/catalog",
    text: "Каталог"
  },
  {
    link: "/sale",
    text: "Розпродаж"
  },
  {
    link: "/contact",
    text: "Контакти"
  }
];

export const Header = ({ icons }) => {
  return (
    <header className="header">
      <Logo />
      <Menu icons={icons} link={headerMenuArray} />

      <Linkin link={"#"} img={menuAdaptiveIcon} classStyle={"menu__adaptive"} />
    </header>
  );
};
