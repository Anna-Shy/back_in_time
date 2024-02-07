import React from "react";

import { Linkin } from "../linkin/Linkin";
import { Logo } from "../logo/Logo";
import { Menu } from "../menu/Menu";

import {
  socialIconArray,
  paymentIconArray,
  footerAboutArray,
  footerClientArray
} from "./data";

import "./footer.scss";

export const Footer = () => {
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
              <Linkin link={item.link} img={item.image} key={key} />
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
            <h4 className="info__client-title">Клієнтам</h4>

            <Menu link={footerClientArray} />
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
                  name="gender"
                  value="women"
                  className="form__contact-radio"
                />
                <label htmlFor="women" className="form__contact-label">
                  Жінки
                </label>

                <input
                  type="radio"
                  id="men"
                  name="gender"
                  value="men"
                  className="form__contact-radio"
                />
                <label htmlFor="men" className="form__contact-label">
                  Чоловіки
                </label>

                <input
                  type="radio"
                  id="all"
                  name="gender"
                  value="all"
                  className="form__contact-radio"
                  defaultChecked
                />
                <label htmlFor="all" className="form__contact-label">
                  Все
                </label>
              </div>

              <p className="form__contact-text">
                Підписуючись на нашу розсилку, ти погоджуєшся з тим, що
                отримуватимеш маркетингові повідомлення через email. Будь ласка,
                звернися до нашої
                <Linkin
                  link={"#"}
                  text={" Політики конфіденційності "}
                  classStyle={"form__contact-textLink"}
                />
                для більшої інформації.
              </p>
              <Linkin
                link={"#"}
                text={"підписатись"}
                classStyle={"form__contact-link"}
              />
            </form>
          </section>

          <div className="footer__info-logo">
            <Logo footer />
            <p className="copy">© 2023 All rights reserved</p>
          </div>
        </section>
      </div>
    </footer>
  );
};
