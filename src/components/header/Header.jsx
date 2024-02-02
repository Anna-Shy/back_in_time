import React from "react";

import { Logo } from "../../components/logo/Logo";
import { Menu } from "../../components/menu/Menu";

import "./header.scss";

export const Header = ({ landing }) => {
  return (
    <header className="header">
      <Logo />
      <Menu landing={landing} />
    </header>
  );
};
