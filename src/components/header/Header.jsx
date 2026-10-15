import React, { useState } from "react";

import { Logo } from "../../components/logo/Logo";
import { Menu } from "../../components/menu/Menu";
import { Drawer } from "../drawer/Drawer";

import { headerMenuArray } from "./data";

import menuAdaptiveIcon from "../../source/svg/icons/menu-adaptive.svg";

import "./header.scss";

// light: white menu over the hero photo on the home page
export const Header = ({ light }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const openModal = () => setIsDrawerOpen(true);
  const closeModal = () => setIsDrawerOpen(false);

  return (
    <header className="header">
      <div className="header__inner">
        <Logo />
        <Menu link={headerMenuArray} icons dark={!light} />

        <button onClick={openModal} className={"menu__adaptive"}>
          <img src={menuAdaptiveIcon} alt="menu" />
        </button>

        <Drawer isOpen={isDrawerOpen} onClose={closeModal} />
      </div>
    </header>
  );
};
