import React from "react";

export const Link = ({ link, text, img, classStyle, classStyleImg }) => {
  return (
    <a href={link} className={classStyle}>
      {img ? <img className={classStyleImg} src={img} alt={img} /> : text}
    </a>
  );
};
