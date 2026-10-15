import React, { useState } from "react";
import { Navigate, useNavigate, useSearchParams } from "react-router-dom";

import { Header } from "../../components/header/Header";
import { Linkin } from "../../components/linkin/Linkin";
import { Footer } from "../../components/footer/Footer";
import { Input } from "../../components/input/Input";
import { Checkbox } from "../../components/checkbox/Checkbox";

import { DEMO_EMAIL, DEMO_PASSWORD, useAuth } from "../../context/AuthContext";

import sale from "../../source/svg/icons/login/sale.svg";
import history from "../../source/svg/icons/login/history.svg";
import delivery from "../../source/svg/icons/login/delivery.svg";
import alertIcon from "../../source/svg/icons/alert.svg";

import "./loginPage.scss";

export const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const { user, login } = useAuth();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  // e.g. /login?redirect=/checkout — go back there after signing in
  const redirect = searchParams.get("redirect") || "/account";

  if (user) return <Navigate to={redirect} replace />;

  const signIn = async (userEmail, userPassword) => {
    setIsLoading(true);

    const result = await login(userEmail, userPassword, rememberMe);

    setIsLoading(false);
    if (result.error) {
      setError(result.error);
      return;
    }
    navigate(redirect, { replace: true });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    signIn(email, password);
  };

  const registerLink = searchParams.get("redirect")
    ? `/regist?redirect=${encodeURIComponent(redirect)}`
    : "/regist";

  return (
    <div className="login__page">
      <Header />

      <main className="login__main">
        <div className="main__signin">
          <h2 className="signin__title">Already have an account?</h2>

          <div className="demo">
            <p className="demo__text">
              Just looking around? Use the demo account —{" "}
              <b>{DEMO_EMAIL}</b> / <b>{DEMO_PASSWORD}</b>
            </p>
            <button
              type="button"
              className="demo__btn"
              disabled={isLoading}
              onClick={() => signIn(DEMO_EMAIL, DEMO_PASSWORD)}
            >
              sign in as demo
            </button>
          </div>

          {error && (
            <div className="alert" role="alert">
              <img className="alert-icon" src={alertIcon} alt="" />
              <p className="alert-text">{error}</p>
            </div>
          )}

          <form className="form__signin" onSubmit={handleSubmit}>
            <Input
              label={"Email"}
              id={"login-email"}
              type={"email"}
              value={email}
              setValue={setEmail}
              alert={Boolean(error)}
              autoComplete={"email"}
            />
            <Input
              label={"Password"}
              id={"login-password"}
              type={"password"}
              value={password}
              setValue={setPassword}
              alert={Boolean(error)}
              autoComplete={"current-password"}
            />

            <Checkbox
              label={"Remember me"}
              id={"remember"}
              value={rememberMe}
              setValue={setRememberMe}
            />

            <button type="submit" className="form__signin-btn" disabled={isLoading}>
              sign in
            </button>

            <Linkin
              link={"/forgotpass"}
              text={"forgot password?"}
              classStyle={"form__signin-link"}
            />
          </form>
        </div>

        <div className="main__signup">
          <h2 className="signup__title">first time here?</h2>

          <Linkin
            link={registerLink}
            text={"create account"}
            classStyle={"signup__link"}
          />

          <div className="signup__info">
            <div className="signup__info-block">
              <img className="block-img" src={sale} alt="" />
              <p className="block-text">Get a personal 5% discount on every order</p>
            </div>
            <div className="signup__info-block">
              <img className="block-img" src={delivery} alt="" />
              <p className="block-text">Checkout faster with saved details</p>
            </div>
            <div className="signup__info-block">
              <img className="block-img" src={history} alt="" />
              <p className="block-text">View your order history</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};
