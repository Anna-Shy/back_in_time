import React from "react";

import { Link } from "react-router-dom";

import "./card.scss";

// id
// image
// title
// code
// price
// description: info, state, size, length, sleeveLength, shoulders, sex, years
// composition: string
// care: []

export const Card = ({
  id,
  image,
  title,
  code,
  price,
  sale,
  info,
  state,
  size,
  length,
  sleeveLength,
  shoulders,
  sex,
  years,
  composition,
  care
}) => {
  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    // images=images.join(",")
    <Link
      to={`/catalog/${id}?image=${encodeURIComponent(
        image
      )}&title=${encodeURIComponent(title)}&code=${encodeURIComponent(
        code
      )}&price=${encodeURIComponent(price)}&sale=${encodeURIComponent(
        sale
      )}&info=${encodeURIComponent(info)}&state=${encodeURIComponent(
        state
      )}&size=${encodeURIComponent(size)}&length=${encodeURIComponent(
        length
      )}&sleeveLength=${encodeURIComponent(
        sleeveLength
      )}&shoulders=${encodeURIComponent(shoulders)}&sex=${encodeURIComponent(
        sex
      )}&years=${encodeURIComponent(
        years
      )}&composition=${composition}&care=${encodeURIComponent(
        JSON.stringify(care)
      )}`}
      onClick={handleClick}
    >
      <div className="card">
        <img className="card__image" src={image} alt={title} />
        <h4 className="card__title">{title}</h4>
        <p className="card__price">
          {price}&nbsp;
          {sale && <span className="price-span">{sale}</span>}
        </p>
      </div>
    </Link>
  );
};
