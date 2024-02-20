import React, { useState } from "react";
import axios from "axios";

import { Header } from "../../components/header/Header";
import { Linkin } from "../../components/linkin/Linkin";
import { Footer } from "../../components/footer/Footer";

import sale from "../../source/svg/icons/login/sale.svg";
import history from "../../source/svg/icons/login/history.svg";
import delivery from "../../source/svg/icons/login/delivery.svg";

import "./loginPage.scss";

export const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await axios.post(`http://localhost:80/login`, { email, password });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="login__page">
      <Header icons />

      <main className="login__main">
        <div className="main__signin">
          <h2 className="signin__title">Вже проходили реєстрацію?</h2>

          <form className="form__signin" onSubmit={handleSubmit}>
            <div className="form__signin-email">
              <label htmlFor="email" className="form__signin-label">
                Email*
              </label>
              <input
                id="email"
                className="form__signin-input"
                type="email"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
                placeholder="Email"
                required
              />
            </div>

            <div className="form__signin-password">
              <label htmlFor="password" className="form__signin-label">
                Пароль*
              </label>
              <input
                id="password"
                className="form__signin-input"
                type="password"
                value={password}
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
                placeholder="Пароль"
                required
              />
            </div>

            <div className="form__signin-checkbtn">
              <input
                type="checkbox"
                id="remember"
                name="remember"
                value="remember"
                className="form__signin-check"
              />
              <label htmlFor="remember" className="form__remember-label">
                Запам`ятати мене
              </label>
            </div>

            <button type="submit" className="form__signin-btn">
              увійти
            </button>

            <Linkin
              link={"#"}
              text={"забув пароль?"}
              classStyle={"form__signin-link"}
            />
          </form>
        </div>

        <div className="main__signup">
          <h2 className="signup__title">це ваш перший візит?</h2>

          <Linkin
            link={"#"}
            text={"створити особийстий кабінет"}
            classStyle={"signup__link"}
          />

          <div className="signup__info">
            <div className="signup__info-block">
              <img className="block-img" src={sale} alt="icon" />
              <p className="blovk-text">Отримуйте персональну знижку 5%</p>
            </div>
            <div className="signup__info-block">
              <img className="block-img" src={delivery} alt="icon" />
              <p className="blovk-text">Відслідковуйте своє замовлення</p>
            </div>
            <div className="signup__info-block">
              <img className="block-img" src={history} alt="icon" />
              <p className="blovk-text">Переглядайте історію замовлень</p>
            </div>
          </div>

          <p className="signup__text">або реєстрація через</p>

          <Linkin link={"#"} text={"google"} classStyle={"signup__link long"} />
        </div>
      </main>
      <Footer />
    </div>
  );
};
