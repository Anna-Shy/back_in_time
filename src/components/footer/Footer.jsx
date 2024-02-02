import React from "react";

import { Link } from "../link/Link";
import { Logo } from "../logo/Logo";

import { insta, facebook, youtube, pinterest, tiktok, visa, mastercard, applepay, googlepay } from "./data";

import "./footer.scss";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <section className="footer__link">
          <div className="footer__link-social">
            <Link link={"#"} img={insta} />
            <Link link={"#"} img={facebook} />
            <Link link={"#"} img={youtube} />
            <Link link={"#"} img={pinterest} />
            <Link link={"#"} img={tiktok} />
          </div>

          <div className="footer__link-payment">
            <Link link={"#"} img={visa} />
            <Link link={"#"} img={mastercard} />
            <Link link={"#"} img={applepay} />
            <Link link={"#"} img={googlepay} />
          </div>
        </section>

        <div className="divider"></div>

        <section className="footer__info">
          <section className="footer__info-about">
            <h4 className="info__about-title">Back in time</h4>

            <nav className="menu">
              <ul className="menu__list">
                <li className="menu__item">
                  <Link link={"#"} text={"Про нас"} />
                </li>
                <li className="menu__item">
                  <Link link={"#"} text={"Співпраця"} />
                </li>
                <li className="menu__item">
                  <Link link={"#"} text={"Блог"} />
                </li>
                <li className="menu__item">
                  <Link link={"#"} text={"Договір оферти"} />
                </li>
                <li className="menu__item">
                  <Link link={"#"} text={"Політика конфіденційності"} />
                </li>
              </ul>
            </nav>

            <Logo footer />
            <p className="copy">© 2023 All rights reserved</p>
          </section>

          <section className="footer__info-client">
            <h4 className="info__client-title">Клієнтам</h4>

            <nav className="menu">
              <ul className="menu__list">
                <li className="menu__item">
                  <Link link={"#"} text={"Особистий кабінет"} />
                </li>
                <li className="menu__item">
                  <Link link={"#"} text={"Доставка та оплата"} />
                </li>
                <li className="menu__item">
                  <Link link={"#"} text={"Обмін та повернення"} />
                </li>
                <li className="menu__item">
                  <Link link={"#"} text={"Контакти"} />
                </li>
                <li className="menu__item">
                  <Link link={"#"} text={"FAQ"} />
                </li>
                <li className="menu__item">
                  <Link link={"#"} text={"Подарункові сертифікати"} />
                </li>
              </ul>
            </nav>
          </section>

          <section className="footer__info-contact">
            <form className="form__contact" action="">
              <h4 className="info__contact-title">
                Додайте свій email, щоб отримувати інформацію про оновлення та
                знижки
              </h4>
              <div className="form__contact-email">
                <label htmlFor="email" className="form__contact-label">
                  Email
                </label>
                <input
                  id="email"
                  className="form__contact-input"
                  type="email"
                  placeholder="Email"
                />
              </div>

              <div className="divider"></div>

              <h4 className="info__contact-title gap">
                Яка інформація тебе цікавить?
              </h4>
              <div className="form__contact-radiobtn">
                <input
                  type="radio"
                  id="women"
                  name="women"
                  value="women"
                  className="form__contact-radio"
                />
                <label htmlFor="women" className="form__contact-label">
                  Жінки
                </label>

                <input
                  type="radio"
                  id="men"
                  name="men"
                  value="men"
                  className="form__contact-radio"
                />
                <label htmlFor="men" className="form__contact-label">
                  Чоловіки
                </label>

                <input
                  type="radio"
                  id="all"
                  name="all"
                  value="all"
                  className="form__contact-radio"
                />
                <label htmlFor="all" className="form__contact-label">
                  Все
                </label>
              </div>

              <p className="form__contact-text">
                Підписуючись на нашу розсилку, ти погоджуєшся з тим, що
                отримуватимеш маркетигові повідомлення через email. Будь ласка,
                звернися до нашої
                <Link
                  link={"#"}
                  text={" Політики конфіденційності "}
                  classStyle={"form__contact-textLink"}
                />
                для більшої інформації.
              </p>
              <Link
                link={"#"}
                text={"підписатись"}
                classStyle={"form__contact-link"}
              />
            </form>
          </section>
        </section>
      </div>
    </footer>
  );
};
