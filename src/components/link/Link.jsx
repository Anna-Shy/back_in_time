import React from "react";

export const Link = ({ link, text, img, classStyle }) => {
  return (
    <a href={link} className={classStyle}>
      {img ? <img src={img} alt={img} /> : text}
    </a>
  );
};
