import React from "react";

import './card.scss'

export const Card = ({image, title, price, sale}) => {
  return (
    <div className="card">
      <img className="card__image" src={image} alt={title} />
      <h4 className="card__title">{title}</h4>
      <p className="card__price">
        {price} 
        {sale && <span className="price-span">{sale}</span>}
      </p>
    </div>
  );
};
