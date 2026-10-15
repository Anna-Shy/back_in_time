import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";

import { Header } from "../../components/header/Header";
import { Footer } from "../../components/footer/Footer";
import { Input } from "../../components/input/Input";
import { Linkin } from "../../components/linkin/Linkin";
import { OrderSummary } from "../../components/orderSummary/OrderSummary";

import { useAuth } from "../../context/AuthContext";
import { calcTotals, useCart } from "../../context/CartContext";
import { formatPrice } from "../../source/data/products";

import "../cartPage/cartPage.scss";
import "./checkoutPage.scss";

const REG_EXP_EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
// Ukrainian numbers: 0XX XXX XX XX or +380 XX XXX XX XX, spaces and dashes allowed
const REG_EXP_PHONE = /^(\+?38)?0\d{9}$/;

const PAYMENT_METHODS = [
  { value: "card", label: "Card online", text: "Visa, Mastercard, Apple Pay or Google Pay" },
  { value: "cod", label: "Cash on delivery", text: "Pay at the Nova Poshta branch" }
];

const validate = (form) => {
  const errors = {};
  if (!form.firstName.trim()) errors.firstName = "Enter your first name";
  if (!form.lastName.trim()) errors.lastName = "Enter your last name";
  if (!REG_EXP_PHONE.test(form.phone.replace(/[\s()-]/g, ""))) errors.phone = "Enter a phone number like 0 99 198 05 21";
  if (!REG_EXP_EMAIL.test(form.email.trim())) errors.email = "Enter a valid email, e.g. name@mail.com";
  if (!form.city.trim()) errors.city = "Enter your city";
  if (!/^\d{1,5}$/.test(form.branch.trim())) errors.branch = "Enter the branch number, e.g. 12";
  return errors;
};

export const CheckoutPage = () => {
  const { user, addOrder } = useAuth();
  const cart = useCart();

  const [form, setForm] = useState({
    firstName: user?.firstName || "",
    lastName: user?.lastName || "",
    phone: "",
    email: user?.email || "",
    city: "",
    branch: "",
    payment: "card"
  });
  const [errors, setErrors] = useState({});
  const [placedOrder, setPlacedOrder] = useState(null);

  const field = (key) => ({
    value: form[key],
    setValue: (value) => setForm((prev) => ({ ...prev, [key]: value })),
    error: errors[key]
  });

  // the order is placed — show the confirmation
  if (placedOrder) {
    return (
      <div className="shop__page">
        <Header />

        <main className="shop__main">
          <div className="checkout__done">
            <p className="checkout__done-icon" aria-hidden="true">✓</p>
            <h1 className="checkout__done-title">Thank you, your order is placed!</h1>
            <p className="checkout__done-text">
              Order <b>{placedOrder.number}</b> for {formatPrice(placedOrder.total)}. We will call
              you at {placedOrder.delivery.phone} to confirm it and send the parcel to Nova Poshta
              branch №{placedOrder.delivery.branch}, {placedOrder.delivery.city}.
            </p>

            <div className="checkout__done-actions">
              {user && <Linkin link={"/account"} text={"my orders"} classStyle="shop__btn" />}
              <Linkin link={"/catalog"} text={"continue shopping"} classStyle="checkout__link" />
            </div>
          </div>
        </main>

        <Footer />
      </div>
    );
  }

  if (cart.count === 0) return <Navigate to="/cart" replace />;

  const handleSubmit = (event) => {
    event.preventDefault();

    const nextErrors = validate(form);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) {
      document.getElementById(`checkout-${Object.keys(nextErrors)[0]}`)?.focus();
      return;
    }

    const { total } = calcTotals(cart.total, Boolean(user));
    const order = {
      number: `BT-${String(Date.now()).slice(-6)}`,
      date: new Date().toISOString(),
      items: cart.items.map(({ id, title, price }) => ({ id, title, price })),
      total,
      payment: form.payment,
      delivery: { city: form.city.trim(), branch: form.branch.trim(), phone: form.phone.trim() }
    };

    addOrder(order);
    setPlacedOrder(order);
    cart.clear();
    window.scrollTo(0, 0);
  };

  return (
    <div className="shop__page">
      <Header />

      <main className="shop__main">
        <h1 className="shop__title">Checkout</h1>

        <form className="shop__layout" onSubmit={handleSubmit} noValidate>
          <div className="checkout__form">
            {!user && (
              <p className="checkout__signin">
                Have an account?{" "}
                <Link to="/login?redirect=/checkout">Sign in</Link> to fill in your details and get
                5% off.
              </p>
            )}

            <fieldset className="checkout__section">
              <legend className="checkout__section-title">Contact details</legend>
              <div className="checkout__grid">
                <Input label="First name" id="checkout-firstName" autoComplete="given-name" {...field("firstName")} />
                <Input label="Last name" id="checkout-lastName" autoComplete="family-name" {...field("lastName")} />
                <Input label="Phone" id="checkout-phone" type="tel" autoComplete="tel" placeholder="0 99 198 05 21" {...field("phone")} />
                <Input label="Email" id="checkout-email" type="email" autoComplete="email" {...field("email")} />
              </div>
            </fieldset>

            <fieldset className="checkout__section">
              <legend className="checkout__section-title">Delivery — Nova Poshta</legend>
              <div className="checkout__grid">
                <Input label="City" id="checkout-city" autoComplete="address-level2" placeholder="Kyiv" {...field("city")} />
                <Input label="Branch number" id="checkout-branch" placeholder="12" {...field("branch")} />
              </div>
            </fieldset>

            <fieldset className="checkout__section">
              <legend className="checkout__section-title">Payment</legend>
              <div className="checkout__payment">
                {PAYMENT_METHODS.map((method) => (
                  <label
                    key={method.value}
                    className={`checkout__option ${form.payment === method.value ? "checkout__option-active" : ""}`}
                  >
                    <input
                      type="radio"
                      name="payment"
                      value={method.value}
                      checked={form.payment === method.value}
                      onChange={() => setForm((prev) => ({ ...prev, payment: method.value }))}
                    />
                    <span>
                      <span className="checkout__option-label">{method.label}</span>
                      <span className="checkout__option-text">{method.text}</span>
                    </span>
                  </label>
                ))}
              </div>
            </fieldset>
          </div>

          <OrderSummary signInRedirect="/checkout">
            <ul className="checkout__items">
              {cart.items.map((item) => (
                <li key={item.id}>
                  <img src={item.image} alt="" />
                  <span>{item.title}</span>
                  <b>{formatPrice(item.price)}</b>
                </li>
              ))}
            </ul>
            <button type="submit" className="shop__btn shop__btn-wide">
              place order
            </button>
            <p className="shop__note">
              This is a demo store — no payment is taken and nothing will be shipped.
            </p>
          </OrderSummary>
        </form>
      </main>

      <Footer />
    </div>
  );
};
