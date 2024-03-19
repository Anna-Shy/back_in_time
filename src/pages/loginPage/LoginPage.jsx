import React, { useState } from "react";
import axios from "axios";

import { Header } from "../../components/header/Header";
import { Linkin } from "../../components/linkin/Linkin";
import { Footer } from "../../components/footer/Footer";
import { Input } from "../../components/input/Input";
import { Checkbox } from "../../components/checkbox/Checkbox";

import google from "../../source/svg/icons/login/google.svg";

import sale from "../../source/svg/icons/login/sale.svg";
import history from "../../source/svg/icons/login/history.svg";
import delivery from "../../source/svg/icons/login/delivery.svg";
import alertIcon from "../../source/svg/icons/alert.svg";

import "./loginPage.scss";

// eslint-disable-next-line no-useless-escape
const REG_EXP_EMAIL = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,}$/);

const REG_EXP_PASSWORD = new RegExp(
  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/
);

export const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const [alert, setAlert] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!REG_EXP_EMAIL.test(email) || !REG_EXP_PASSWORD.test(password)) {
      setAlert(true);
      return;
    }

    try {
      const response = await axios.post(
        "https://backintimeshopapi-1-2-1.onrender.com/api/v1/auth/login",
        {
          email: email,
          password: password
        }
      );
      console.log("Allowed methods:", response.headers.allow);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="login__page">
      <Header icons />

      <main className="login__main">
        <div className="main__signin">
          <h2 className="signin__title">Вже проходили реєстрацію?</h2>

          {alert && (
            <div className="alert">
              <img className="alert-icon" src={alertIcon} alt="alert" />
              <h2 className="alert-text">Недійсний email або пароль.</h2>
            </div>
          )}

          <form className="form__signin" onSubmit={handleSubmit}>
            <Input
              label={"Email"}
              type={"email"}
              value={email}
              setValue={setEmail}
              alert={alert ? alert : null}
            />
            <Input
              label={"Пароль"}
              type={"password"}
              value={password}
              setValue={setPassword}
              alert={alert ? alert : null}
            />

            <Checkbox
              label={"Запам`ятати мене"}
              id={"remember"}
              value={rememberMe}
              setValue={setRememberMe}
            />

            <button type="submit" className="form__signin-btn">
              увійти
            </button>

            <Linkin
              link={"/forgotpass"}
              text={"забув пароль?"}
              classStyle={"form__signin-link"}
            />
          </form>
        </div>

        <div className="main__signup">
          <h2 className="signup__title">це ваш перший візит?</h2>

          <Linkin
            link={"/regist"}
            text={"створити кабінет"}
            classStyle={"signup__link"}
          />

          <div className="signup__info">
            <div className="signup__info-block">
              <img className="block-img" src={sale} alt="icon" />
              <p className="block-text">Отримуйте персональну знижку 5%</p>
            </div>
            <div className="signup__info-block">
              <img className="block-img" src={delivery} alt="icon" />
              <p className="block-text">Відслідковуйте своє замовлення</p>
            </div>
            <div className="signup__info-block">
              <img className="block-img" src={history} alt="icon" />
              <p className="block-text">Переглядайте історію замовлень</p>
            </div>
          </div>

          <p className="signup__text">або реєстрація через</p>

          <Linkin
            link={"#"}
            img={google}
            classStyle={"signup__link long"}
            classStyleImg={"google-icon"}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
};
