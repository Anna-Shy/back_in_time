import React from "react";

import { Logo } from "../../components/logo/Logo";
import { Menu } from "../../components/menu/Menu";
import { Linkin } from "../linkin/Linkin";

import menuAdaptiveIcon from "../../source/svg/icons/menu-adaptive.svg";

import "./header.scss";

export const Header = ({ menuLink }) => {
  return (
    <header className="header">
      <div className="header__inner">
        <Logo />
        <Menu link={menuLink} />

        <Linkin
          link={"#"}
          img={menuAdaptiveIcon}
          classStyle={"menu__adaptive"}
        />
      </div>
    </header>
  );
};
