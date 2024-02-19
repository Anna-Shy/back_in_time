import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import ScrollCarousel from "scroll-carousel-react";
import ImageGallery from "react-image-gallery";

import { Header } from "../../components/header/Header";
import { Breadcrumbs } from "../../components/breadcrumbs/Breadcrumbs";
import { Linkin } from "../../components/linkin/Linkin";
import { Card } from "../../components/card/Card";
import { Footer } from "../../components/footer/Footer";

import arrowDownIcon from "../../source/svg/icons/arrow-down.svg";
import arrowUpIcon from "../../source/svg/icons/arrow-up.svg";

import { suggestionArray } from "../../source/data/suggestion";

import "./itemPage.scss";
import "react-image-gallery/styles/css/image-gallery.css";

// id
// image
// title
// code
// price
// details: info, state, size, length, sleeveLength, shoulders, sex, years
// composition: string
// care: []

export const ItemPage = () => {
  const [isVisible, setIsVisible] = useState({
    description: false,
    care: false,
    delivery: false
  });

  const toggleVisibility = (key) => {
    setIsVisible((prevState) => ({
      ...prevState,
      [key]: !prevState[key]
    }));
  };

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  const {
    image,
    title,
    code,
    price,
    info,
    state,
    size,
    length,
    sleeveLength,
    shoulders,
    sex,
    years,
    composition,
    care: careString
  } = Object.fromEntries(searchParams.entries());

  const care = careString ? JSON.parse(decodeURIComponent(careString)) : [];
  const images = [
    {
      original: image,
      thumbnail: image
    },
    {
      original: "https://picsum.photos/id/1018/626/662/",
      thumbnail: "https://picsum.photos/id/1018/134/134/"
    },
    {
      original: "https://picsum.photos/id/1015/626/662/",
      thumbnail: "https://picsum.photos/id/1015/134/134/"
    },
    {
      original: "https://picsum.photos/id/1019/626/662/",
      thumbnail: "https://picsum.photos/id/1019/134/134/"
    }
  ];

  return (
    <div className="itemPage__page">
      <Header icons />

      <main className="itemPage__main">
        <Breadcrumbs />

        <section className="chooseItem">
          <ImageGallery
            items={images}
            className="chooseItem__image"
            showThumbnails={true}
            showNav={true}
            showFullscreenButton={false}
            showPlayButton={false}
          />

          <div className="chooseItem__content">
            <div className="chooseItem__description">
              <h2 className="chooseItem__title">{title}</h2>
              <p className="chooseItem__code">Код товару: {code}</p>
              <p className="chooseItem__price">{price}</p>

              <Linkin text={"додати"} classStyle={"chooseItem__btn"} />
            </div>

            <div className="divider"></div>
            <div className="chooseItem__info">
              <button
                className="chooseItem__info-btn"
                onClick={() => toggleVisibility("description")}
              >
                опис
                <img
                  className="chooseItem__info-arrow"
                  src={isVisible.description ? arrowUpIcon : arrowDownIcon}
                  alt="arrow"
                />
              </button>
              {isVisible.description && (
                <div className="chooseItem__info-details">
                  {info && <h4 className="details__title">{info}</h4>}
                  {state && (
                    <p className="detail-text">
                      <span className="details-text-span">Стан</span> {state}
                    </p>
                  )}
                  {size && (
                    <p className="detail-text">
                      <span className="details-text-span">Розмір</span> {size}
                    </p>
                  )}
                  {length && (
                    <p className="detail-text">
                      <span className="details-text-span">Довжина</span>{" "}
                      {length}
                    </p>
                  )}
                  {sleeveLength && (
                    <p className="detail-text">
                      <span className="details-text-span">Довжина рукава</span>{" "}
                      {sleeveLength}
                    </p>
                  )}
                  {shoulders && (
                    <p className="detail-text">
                      <span className="details-text-span">Плечі</span>{" "}
                      {shoulders}
                    </p>
                  )}
                  {sex && (
                    <p className="detail-text">
                      <span className="details-text-span">Стать</span> {sex}
                    </p>
                  )}
                  {years && (
                    <p className="detail-text">
                      <span className="details-text-span">Роки</span> {years}
                    </p>
                  )}
                </div>
              )}
            </div>
            <div className="divider"></div>
            <div className="chooseItem__info">
              <button
                className="chooseItem__info-btn"
                onClick={() => toggleVisibility("care")}
              >
                склад і догляд
                <img
                  className="chooseItem__info-arrow"
                  src={isVisible.care ? arrowUpIcon : arrowDownIcon}
                  alt="arrow"
                />
              </button>
              {isVisible.care && (
                <div className="chooseItem__info-details">
                  <div className="details-composition">
                    <p className="detail-text">
                      <span className="details-text-span">Склад</span>&nbsp;
                    </p>
                    <p className="detail-text">{composition}</p>
                  </div>

                  <p className="detail-text">
                    <span className="details-text-span">
                      Рекомендації щодо догляду
                    </span>
                  </p>
                  <ul className="detail-text detail-list">
                    {care.map((careItem, index) => (
                      <li className="detail-list-item" key={index}>
                        {careItem}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
            <div className="divider"></div>
            <div className="chooseItem__info">
              <button
                className="chooseItem__info-btn"
                onClick={() => toggleVisibility("delivery")}
              >
                доставка і повернення
                <img
                  className="chooseItem__info-arrow"
                  src={isVisible.delivery ? arrowUpIcon : arrowDownIcon}
                  alt="arrow"
                />
              </button>
              {isVisible.delivery && (
                <div className="chooseItem__info-details">
                  <p className="detail-text">
                    <span className="details-text-span">Новою поштою</span>{" "}
                    протягом 2 робочих днів після оплати. Доставка здійснюється
                    за рахунок покупця за тарифами НП.
                  </p>
                  <p className="detail-text">
                    <span className="details-text-span">Повернення</span> товару
                    можна здійснити протягом 2-х робочих днів після отримання.
                  </p>
                  <p className="detail-text">
                    Весь одяг та взуття в нашому магазині в єдиному екземплярі,
                    але ви можете обміняти річ, яка не підійшла, на будь-яку
                    іншу за такою ж ціною або з доплатою.
                  </p>
                </div>
              )}
            </div>
            <div className="divider"></div>
          </div>
        </section>

        <section className="moreItem">
          <h2 className="moreItem__title">доповни свій образ</h2>

          <div className="moreItem__carousel">
            <ScrollCarousel autoplay autoplaySpeed={4} speed={3}>
              {suggestionArray.map((item, index) => (
                <Card key={index} {...item} />
              ))}
            </ScrollCarousel>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};
