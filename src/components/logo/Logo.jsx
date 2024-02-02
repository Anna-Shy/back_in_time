import React from "react";

import logo from "../../source/svg/logo.svg";
import logoFooter from "../../source/svg/logo-footer.svg";

import "./logo.scss";

export const Logo = ({ footer }) => {
  return <img className="logo" src={footer ? logoFooter : logo} alt="Logo" />;
};
