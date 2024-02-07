import React from "react";
import { Link } from "react-router-dom";

export const Linkin = ({ link, text, img, classStyle, classStyleImg }) => {
  return (
    <Link to={link} className={classStyle}>
      {img ? <img className={classStyleImg} src={img} alt={img} /> : text}
    </Link>
  );
};
