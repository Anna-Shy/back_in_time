import React from "react";
import { Link } from "react-router-dom";

import { Header } from "../../components/header/Header";
import { Footer } from "../../components/footer/Footer";
import { Linkin } from "../../components/linkin/Linkin";
import { OrderSummary } from "../../components/orderSummary/OrderSummary";

import { useCart } from "../../context/CartContext";
import { formatPrice } from "../../source/data/products";

import "./cartPage.scss";

export const CartPage = () => {
  const { items, remove } = useCart();

  return (
    <div className="shop__page">
      <Header />

      <main className="shop__main">
        <h1 className="shop__title">Cart</h1>

        {items.length === 0 ? (
          <div className="shop__empty">
            <p className="shop__empty-title">Your cart is empty</p>
            <p className="shop__empty-text">Every item in our store is one of a kind — find yours.</p>
            <Linkin link={"/catalog"} text={"go to catalog"} classStyle="shop__btn" />
          </div>
        ) : (
          <div className="shop__layout">
            <ul className="cart__list">
              {items.map((item) => (
                <li className="cart__item" key={item.id}>
                  <Link to={`/catalog/${item.id}`} className="cart__item-media">
                    <img src={item.image} alt={item.title} />
                  </Link>

                  <div className="cart__item-info">
                    <Link to={`/catalog/${item.id}`} className="cart__item-title">
                      {item.title}
                    </Link>
                    <p className="cart__item-details">
                      {[item.brand, `Size ${item.size}`, item.state].filter(Boolean).join(" · ")}
                    </p>
                    <button className="cart__item-remove" onClick={() => remove(item.id)}>
                      Remove
                    </button>
                  </div>

                  <p className="cart__item-price">
                    <span className={item.oldPrice ? "cart__item-price-sale" : ""}>
                      {formatPrice(item.price)}
                    </span>
                    {item.oldPrice && <s>{formatPrice(item.oldPrice)}</s>}
                  </p>
                </li>
              ))}
            </ul>

            <OrderSummary signInRedirect="/cart">
              <Linkin link={"/checkout"} text={"checkout"} classStyle="shop__btn shop__btn-wide" />
              <p className="shop__note">
                Items are one of a kind and are not reserved until you place an order.
              </p>
            </OrderSummary>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};
