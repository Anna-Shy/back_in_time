import React, { useState } from "react";
import axios from "axios";

import { Header } from "../../components/header/Header";
import { Linkin } from "../../components/linkin/Linkin";
import { Footer } from "../../components/footer/Footer";
import { Input } from "../../components/input/Input";
import { Checkbox } from "../../components/checkbox/Checkbox";

import "./registerPage.scss";

export const RegisterPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    firstname: "",
    lastname: "",
    password: "",
    rememberMe: false,
    inSystem: false
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        "https://back-in-time-shop-api.onrender.com/api/v1/auth/register",
        formData
      );
      console.log("Allowed methods:", response.headers.allow);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value
    }));
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
              name={"email"}
              type={"email"}
              value={formData.email}
              onChange={handleChange}
            />

            <div className="form__register-block">
              <Input
                label={"Ім’я"}
                name={"firstname"}
                type={"text"}
                value={formData.firstname}
                onChange={handleChange}
              />
              <Input
                label={"Прізвище"}
                name={"lastname"}
                type={"text"}
                value={formData.lastname}
                onChange={handleChange}
              />
            </div>

            <Input
              label={"Пароль"}
              name={"password"}
              type={"password"}
              value={formData.password}
              onChange={handleChange}
            />

            <Checkbox
              label={
                "Так, я хочу підписатися на розсилку новин (необов`язково)"
              }
              name={"rememberMe"}
              checked={formData.rememberMe}
              onChange={handleChange}
            />
            <Checkbox
              label={"Не виходити із системи"}
              name={"inSystem"}
              checked={formData.inSystem}
              onChange={handleChange}
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
            та умовами
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
