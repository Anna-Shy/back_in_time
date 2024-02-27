import React, { useState } from "react";
import axios from "axios";

import { Header } from "../../components/header/Header";
import { Linkin } from "../../components/linkin/Linkin";
import { Footer } from "../../components/footer/Footer";
import { Input } from "../../components/input/Input";
import { Checkbox } from "../../components/checkbox/Checkbox";

import "./registerPage.scss";

export const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [inSystem, setInSystem] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        "https://back-in-time-shop-api.onrender.com/api/v1/auth/register",
        { email, firstname, lastname, password, rememberMe }
      );
      console.log("Allowed methods:", response.headers.allow);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="register__page">
      <Header icons />

      <main className="register__main">
        <div className="main__login">
          <h2 className="login__title">Вже проходили реєстрацію?</h2>

          <Linkin link={"/login"} text={"увійти"} classStyle={"login__link"} />
        </div>

        <div className="main__register">
          <h2 className="register__title">це ваш перший візит?</h2>

          <form className="form__register" onSubmit={handleSubmit}>
            <Input
              label={"Email"}
              type={"email"}
              value={email}
              setValue={setEmail}
            />

            <div className="form__register-block">
              <Input
                label={"Ім'я"}
                type={"text"}
                value={firstname}
                setValue={setFirstname}
              />
              <Input
                label={"Прізвище"}
                type={"text"}
                value={lastname}
                setValue={setLastname}
              />
            </div>

            <Input
              label={"Пароль"}
              type={"password"}
              value={password}
              setValue={setPassword}
            />

            <Checkbox
              label={
                "Так, я хочу підписатися на розсилку новин (необов`язково)"
              }
              id={"remember"}
              value={rememberMe}
              setValue={setRememberMe}
            />
            <Checkbox
              label={"Не виходити із системи"}
              id={"inSystem"}
              value={inSystem}
              setValue={setInSystem}
            />

            <button type="submit" className="form__register-btn">
              створити
            </button>
          </form>

          <p className="register__text">
            Натиснувши кнопку “Створити”, Ви погоджуєтесь з{" "}
            <Linkin
              link={"#"}
              text={"Правилами сайту"}
              classStyle={"register__text-textLink"}
            />{" "}
            та умовами{" "}
            <Linkin
              link={"#"}
              text={"Політики конфіденційності"}
              classStyle={"register__text-textLink"}
            />
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
};
