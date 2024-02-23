import React, { useState } from "react";

import { Header } from "../../components/header/Header";
import { Footer } from "../../components/footer/Footer";
import { Linkin } from "../../components/linkin/Linkin";

import "./forgotPassPage.scss";

export const ForgotPassPage = () => {
  const [email, setEmail] = useState("");

  return (
    <div className="forgotPass__page">
      <Header icons />

      <main className="forgotPass__main">
        <h2 className="main__title">відновлення паролю</h2>
        <p className="main__text">
          Забули пароль? Будь ласка, введіть вашу e-mail адресу. Ви отримаєте
          електронний лист з інструкцією для подальшого відновлення.
        </p>

        <input
          id="email"
          className="main__input"
          type="email"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
          placeholder="Email"
          required
        />

        <div className="main-block">
          <Linkin
            link={"#"}
            text={"підтвердити"}
            classStyle={"main__link-aprove"}
          />

          <Linkin
            link={"/login"}
            text={"відміна"}
            classStyle={"main__link-cancel"}
          />
        </div>
      </main>

      <Footer />
    </div>
  );
};
