import React, { useState } from "react";

import { Logo } from "../../components/logo/Logo";
import { Menu } from "../../components/menu/Menu";
import { Drawer } from "../drawer/Drawer";

import menuAdaptiveIcon from "../../source/svg/icons/menu-adaptive.svg";

import "./header.scss";

export const Header = ({ menuLink, icons }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const openModal = () => setIsDrawerOpen(true);
  const closeModal = () => setIsDrawerOpen(false);

  return (
    <header className="header">
      <div className="header__inner">
        <Logo />
        <Menu link={menuLink} icons />

        <button onClick={openModal} className={"menu__adaptive"}>
          <img src={menuAdaptiveIcon} alt="menu" />
        </button>

        <Drawer isOpen={isDrawerOpen} onClose={closeModal} />
      </div>
    </header>
  );
};
