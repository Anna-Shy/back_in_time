import React from "react";

import { Logo } from "../../components/logo/Logo";
import { Menu } from "../../components/menu/Menu";
import { Link } from "../../components/link/Link";

import menuAdaptiveIcon from "../../source/svg/icons/menu-adaptive.svg";

import "./header.scss";

const headerMenuArray = [
  {
    link: "#",
    text: "Оновлення"
  },
  {
    link: "#",
    text: "Каталог"
  },
  {
    link: "#",
    text: "Розпродаж"
  },
  {
    link: "#",
    text: "Контакти"
  }
];

export const Header = ({ icons }) => {
  return (
    <header className="header">
      <Logo />
      <Menu icons={icons} link={headerMenuArray} />

      <Link link={"#"} img={menuAdaptiveIcon} classStyle={"menu__adaptive"} />
    </header>
  );
};
