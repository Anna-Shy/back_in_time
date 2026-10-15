import React from "react";
import { Link } from "react-router-dom";

import { useAuth } from "../../context/AuthContext";
import { calcTotals, MEMBER_DISCOUNT, useCart } from "../../context/CartContext";
import { formatPrice } from "../../source/data/products";

import "./orderSummary.scss";

// totals box for the cart and checkout pages; children go under the total (a button)
export const OrderSummary = ({ children, signInRedirect = "/cart" }) => {
  const { user } = useAuth();
  const { count, total: subtotal, savings } = useCart();
  const { discount, total } = calcTotals(subtotal, Boolean(user));

  return (
    <aside className="summary">
      <h2 className="summary__title">Order summary</h2>

      <dl className="summary__list">
        <div className="summary__row">
          <dt>{count} {count === 1 ? "item" : "items"}</dt>
          <dd>{formatPrice(subtotal)}</dd>
        </div>

        {savings > 0 && (
          <div className="summary__row summary__row-muted">
            <dt>Sale savings</dt>
            <dd>{formatPrice(savings)}</dd>
          </div>
        )}

        {user ? (
          <div className="summary__row summary__row-discount">
            <dt>Member discount {MEMBER_DISCOUNT * 100}%</dt>
            <dd>−{formatPrice(discount)}</dd>
          </div>
        ) : (
          <p className="summary__hint">
            <Link to={`/login?redirect=${encodeURIComponent(signInRedirect)}`}>Sign in</Link> to
            get {MEMBER_DISCOUNT * 100}% off this order
          </p>
        )}

        <div className="summary__row summary__row-muted">
          <dt>Shipping</dt>
          <dd>Nova Poshta rates</dd>
        </div>

        <div className="summary__row summary__row-total">
          <dt>Total</dt>
          <dd>{formatPrice(total)}</dd>
        </div>
      </dl>

      {children}
    </aside>
  );
};
