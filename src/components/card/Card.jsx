import React from "react";

import { Link } from "react-router-dom";

import { formatPrice } from "../../source/data/products";

import "./card.scss";

export const Card = ({ id, image, title, price, oldPrice, isNew, brand, size }) => {
  const discount = oldPrice ? Math.round((1 - price / oldPrice) * 100) : 0;
  const details = [brand, size].filter(Boolean).join(" · ");

  return (
    <Link to={`/catalog/${id}`} className="card__link">
      <article className="card">
        <div className="card__media">
          <img className="card__image" src={image} alt={title} />

          {(isNew || discount > 0) && (
            <div className="card__badges">
              {isNew && <span className="card__badge">New</span>}
              {discount > 0 && (
                <span className="card__badge card__badge-sale">−{discount}%</span>
              )}
            </div>
          )}
        </div>

        <h4 className="card__title">{title}</h4>
        {details && <p className="card__details">{details}</p>}

        <p className="card__price">
          <span className={oldPrice ? "card__price-current" : ""}>{formatPrice(price)}</span>
          {oldPrice && <span className="card__price-old">{formatPrice(oldPrice)}</span>}
        </p>
      </article>
    </Link>
  );
};
