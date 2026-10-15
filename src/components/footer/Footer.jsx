import React, { useState } from "react";

import { Linkin } from "../linkin/Linkin";
import { Logo } from "../logo/Logo";
import { Menu } from "../menu/Menu";

import {
  socialIconArray,
  paymentIconArray,
  footerAboutArray,
  footerClientArray
} from "./data";

import { useAuth } from "../../context/AuthContext";
import { readJSON, writeJSON } from "../../context/storage";

import "./footer.scss";

// demo newsletter: the subscription is only remembered in this browser
const NEWSLETTER_KEY = "bit_newsletter";
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const INTERESTS = [
  { value: "women", label: "Women" },
  { value: "men", label: "Men" },
  { value: "all", label: "All" }
];

export const Footer = () => {
  const { user } = useAuth();
  const [subscribed, setSubscribed] = useState(() => readJSON(localStorage, NEWSLETTER_KEY, null));
  const [email, setEmail] = useState(user?.email || "");
  const [interest, setInterest] = useState("all");
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const value = email.trim().toLowerCase();

    if (!value) return setError("Please enter your email.");
    if (!EMAIL_PATTERN.test(value)) return setError("This doesn’t look like an email address.");

    const subscription = { email: value, interest };
    writeJSON(localStorage, NEWSLETTER_KEY, subscription);
    setSubscribed(subscription);
  };

  const handleUnsubscribe = () => {
    writeJSON(localStorage, NEWSLETTER_KEY, null);
    setSubscribed(null);
  };

  return (
    <footer className="footer">
      <div className="footer__inner">
        <section className="footer__link">
          <div className="footer__link-social">
            {socialIconArray.map((item, key) => (
              <Linkin link={item.link} img={item.image} key={key} />
            ))}
          </div>

          <div className="footer__link-payment">
            {paymentIconArray.map((item, key) => (
              <img src={item.image} alt={item.name} key={key} />
            ))}
          </div>
        </section>

        <div className="divider"></div>

        <section className="footer__info">
          <section className="footer__info-about">
            <h4 className="info__about-title">Back in time</h4>

            <Menu link={footerAboutArray} />
          </section>

          <section className="footer__info-client">
            <h4 className="info__client-title">Customers</h4>

            <Menu link={footerClientArray} />
          </section>

          <section className="footer__info-contact">
            {subscribed ? (
              <div className="form__contact form__contact-done" role="status">
                <h4 className="info__contact-title">You’re on the list!</h4>
                <p className="form__contact-text">
                  We’ll send updates on new arrivals and discounts
                  {subscribed.interest !== "all" && ` for ${subscribed.interest === "men" ? "Men" : "Women"}`} to{" "}
                  <b>{subscribed.email}</b>.
                </p>
                <button type="button" className="form__contact-link" onClick={handleUnsubscribe}>
                  unsubscribe
                </button>
              </div>
            ) : (
              <form className="form__contact" onSubmit={handleSubmit} noValidate>
                <h4 className="info__contact-title">
                  Add your email to get updates on new arrivals and discounts
                </h4>
                <div className="form__contact-email">
                  <label htmlFor="newsletter-email" className="form__contact-label">
                    Email
                  </label>
                  <input
                    id="newsletter-email"
                    className={`form__contact-input${error ? " form__contact-input-error" : ""}`}
                    type="email"
                    placeholder="Email"
                    autoComplete="email"
                    value={email}
                    onChange={(event) => {
                      setEmail(event.target.value);
                      setError("");
                    }}
                    aria-invalid={Boolean(error)}
                    aria-describedby={error ? "newsletter-error" : undefined}
                  />
                  {error && (
                    <p id="newsletter-error" className="form__contact-error">
                      {error}
                    </p>
                  )}
                </div>

                <div className="divider"></div>

                <h4 className="info__contact-title gap">What are you interested in?</h4>
                <div className="form__contact-radiobtn">
                  {INTERESTS.map(({ value, label }) => (
                    <React.Fragment key={value}>
                      <input
                        type="radio"
                        id={`interest-${value}`}
                        name="interest"
                        value={value}
                        className="form__contact-radio"
                        checked={interest === value}
                        onChange={() => setInterest(value)}
                      />
                      <label htmlFor={`interest-${value}`} className="form__contact-label">
                        {label}
                      </label>
                    </React.Fragment>
                  ))}
                </div>

                <p className="form__contact-text">
                  By subscribing to our newsletter, you agree to receive marketing
                  emails. Please see our{" "}
                  <Linkin
                    link={"/privacy"}
                    text={"Privacy Policy"}
                    classStyle={"form__contact-textLink"}
                  />{" "}
                  for more information.
                </p>
                <button type="submit" className="form__contact-link">
                  subscribe
                </button>
              </form>
            )}
          </section>

          <div className="footer__info-logo">
            <Logo footer />
            <p className="copy">© {new Date().getFullYear()} All rights reserved</p>
          </div>
        </section>
      </div>
    </footer>
  );
};
