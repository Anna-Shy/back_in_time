import React from "react";

import { Linkin } from "../linkin/Linkin";

import basketWhiteIcon from "../../source/svg/icons/basket-white.svg";
import basketBlackIcon from "../../source/svg/icons/basket-black.svg";
import personWhiteIcon from "../../source/svg/icons/person-white.svg";
import personBlackIcon from "../../source/svg/icons/person-black.svg";
import searchWhiteIcon from "../../source/svg/icons/search-white.svg";
import searchBlackIcon from "../../source/svg/icons/search-black.svg";

import "./menu.scss";

export const Menu = ({ link, icons }) => {
  return (
    <nav className="menu">
      <ul className="menu__list">
        {link &&
          link.map((item, key) => (
            <li className="menu__item" key={key}>
              <Linkin link={item.link} text={item.text} />
            </li>
          ))}

        {icons && (
          <>
            <li className="menu__item">
              <Linkin
                link={"#"}
                img={link ? searchWhiteIcon : searchBlackIcon}
              />
            </li>
            <li className="menu__item">
              <Linkin
                link={"#"}
                img={link ? personWhiteIcon : personBlackIcon}
              />
            </li>
            <li className="menu__item">
              <Linkin
                link={"#"}
                img={link ? basketWhiteIcon : basketBlackIcon}
              />
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};
