import React from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";

import { Header } from "../../components/header/Header";
import { Footer } from "../../components/footer/Footer";
import { Linkin } from "../../components/linkin/Linkin";

import { useAuth } from "../../context/AuthContext";
import { MEMBER_DISCOUNT } from "../../context/CartContext";
import { formatPrice, getProduct } from "../../source/data/products";

import "../cartPage/cartPage.scss";
import "../../components/orderSummary/orderSummary.scss";
import "./accountPage.scss";

const formatDate = (iso) =>
  new Date(iso).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });

export const AccountPage = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  if (!user) return <Navigate to="/login?redirect=/account" replace />;

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div className="shop__page">
      <Header />

      <main className="shop__main">
        <h1 className="shop__title">Hello, {user.firstName}!</h1>

        <div className="shop__layout">
          <section>
            <h2 className="account__heading">Order history</h2>

            {user.orders.length === 0 ? (
              <div className="account__empty">
                <p>You haven’t placed any orders yet.</p>
                <Linkin link={"/catalog"} text={"go to catalog"} classStyle="shop__btn" />
              </div>
            ) : (
              <ul className="account__orders">
                {user.orders.map((order) => (
                  <li className="account__order" key={order.number}>
                    <div className="account__order-head">
                      <p>
                        <b>{order.number}</b> · {formatDate(order.date)}
                      </p>
                      <span
                        className={`account__order-status${order.status === "Delivered" ? " account__order-status-done" : ""}`}
                      >
                        {order.status || "Processing"}
                      </span>
                    </div>

                    <ul className="account__order-items">
                      {order.items.map((item) => {
                        const product = getProduct(item.id);
                        return (
                          <li key={item.id}>
                            <Link to={`/catalog/${item.id}`} title={item.title}>
                              {product && <img src={product.image} alt={item.title} />}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>

                    <p className="account__order-foot">
                      {order.items.length} {order.items.length === 1 ? "item" : "items"} · Nova
                      Poshta №{order.delivery.branch}, {order.delivery.city}
                      <b>{formatPrice(order.total)}</b>
                    </p>
                  </li>
                ))}
              </ul>
            )}
          </section>

          <aside className="summary account__profile">
            <h2 className="summary__title">My details</h2>
            <p className="account__name">
              {user.firstName} {user.lastName}
            </p>
            <p className="account__email">{user.email}</p>

            <p className="account__perk">
              Your personal discount: <b>{MEMBER_DISCOUNT * 100}%</b> on every order
            </p>

            <button className="account__logout" onClick={handleLogout}>
              sign out
            </button>
          </aside>
        </div>
      </main>

      <Footer />
    </div>
  );
};
