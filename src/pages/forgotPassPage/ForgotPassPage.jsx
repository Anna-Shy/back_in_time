import React, { useState } from "react";

import { Header } from "../../components/header/Header";
import { Footer } from "../../components/footer/Footer";
import { Linkin } from "../../components/linkin/Linkin";

import "./forgotPassPage.scss";

const REG_EXP_EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export const ForgotPassPage = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [isSent, setIsSent] = useState(false);

  // demo only: there is no mail server, we just show the confirmation
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!REG_EXP_EMAIL.test(email.trim())) {
      setError("Enter a valid email, e.g. name@mail.com");
      return;
    }
    setIsSent(true);
  };

  return (
    <div className="forgotPass__page">
      <Header />

      <main className="forgotPass__main">
        <h2 className="main__title">password recovery</h2>

        {isSent ? (
          <>
            <p className="main__text">
              If an account exists for <b>{email.trim()}</b>, you will receive an
              email with instructions to reset your password.
            </p>

            <div className="main-block main-block-sent">
              <Linkin link={"/login"} text={"back to sign in"} classStyle={"main__link-aprove"} />
            </div>
          </>
        ) : (
          <form onSubmit={handleSubmit} noValidate>
            <p className="main__text">
              Forgot your password? Please enter your email address. You will
              receive an email with instructions to reset it.
            </p>

            <input
              id="email"
              className={`main__input ${error ? "main__input-error" : ""}`}
              type="email"
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
                setError("");
              }}
              placeholder="Email"
              aria-label="Email"
              aria-invalid={Boolean(error)}
              autoComplete="email"
            />
            {error && <p className="main__error">{error}</p>}

            <div className="main-block">
              <button type="submit" className="main__link-aprove">
                confirm
              </button>

              <Linkin
                link={"/login"}
                text={"cancel"}
                classStyle={"main__link-cancel"}
              />
            </div>
          </form>
        )}
      </main>

      <Footer />
    </div>
  );
};
