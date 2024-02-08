import React from "react";

import { Header } from "../../components/header/Header";
import { Footer } from "../../components/footer/Footer";

import {
  contactImg,
  phoneIcon,
  telegramIcon,
  emailIcon,
  hourIcon,
  attentionIcon
} from "./data";

import "./contactPage.scss";

export const ContactPage = () => {
  return (
    <div className="contact">
      <Header icons />

      <main className="contact__main">
        <div className="main__content">
          <h2 className="main__title">Контакти</h2>
          <div className="divider"></div>

          <div className="content">
            <h4 className="content__title">Телефон</h4>

            <div className="content__block">
              <img className="content__block-img" src={phoneIcon} alt="phone" />

              <div className="content__block-info">
                <a className="block-link" href="tel:380991980521">
                  0 99 198 05 21
                </a>
                <a className="block-link" href="tel:380671980522">
                  0 67 198 05 22
                </a>
              </div>
            </div>
          </div>

          <div className="content">
            <h4 className="content__title">Зв`язатися в чаті онлайн</h4>

            <div className="content__block">
              <img
                className="content__block-img"
                src={telegramIcon}
                alt="telegram"
              />
              <a className="block-link" href="https://t.me/backintimevintage">
                @backintimevintage
              </a>
            </div>
          </div>

          <div className="content">
            <h4 className="content__title">Email</h4>

            <div className="content__block">
              <img className="content__block-img" src={emailIcon} alt="email" />

              <a className="block-link" href="mailto:info@backvintage.com.ua">
                info@backvintage.com.ua
              </a>
            </div>
          </div>

          <div className="content">
            <h4 className="content__title">Режим роботи</h4>

            <div className="content__block">
              <img className="content__block-img" src={hourIcon} alt="hour" />

              <div className="content__block-info">
                <p className="block-text">Пн - Пт: 10:00 - 18:00</p>
                <p className="block-text">Сб - Нд: 11:00 - 18:00</p>
              </div>
            </div>

            <div className="content__block">
              <img
                className="content__block-img"
                src={attentionIcon}
                alt="attention"
              />

              <p className="block-text-attention">
                <span className="block-attention-span">Увага:</span> У зв`язку з
                військовим становищем - можливі відхилання у графіку
              </p>
            </div>
          </div>
        </div>

        <img className="main__img" src={contactImg} alt="Contact" />
      </main>
      <Footer />
    </div>
  );
};
