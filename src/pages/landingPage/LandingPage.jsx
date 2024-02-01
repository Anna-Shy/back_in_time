import React from "react";

import { Header } from "../../components/header/Header";
import { Link } from "../../components/link/Link";

import "./landingPage.scss";

import cardCategoryCatalog from "../../source/img/landing/category/card_category_catalog.png";
import cardCategorySale from "../../source/img/landing/category/card_category_sale.png";
import cardCategoryNew from "../../source/img/landing/category/card_category_new.png";

import about from "../../source/img/landing/about.png";

export const LandingPage = () => {
  return (
    <div className="landing">
      <header className="landing__header">
        <div className="header__inner">
          <Header landing />

          <div className="header__content">
            <h1 className="header__title">машина часу</h1>
            <p className="header__text">
              в твоєму <span className="header__text-span">гардеробі</span>
            </p>

            <Link link={"#"} text={"вибрати"} classStyle="header__btn" />
          </div>
        </div>
      </header>

      <main className="landing__main">
        <section className="category">
          <div className="category__inner">
            <Link link={"#"} img={cardCategoryNew} className="category__link" />
            <Link
              link={"#"}
              img={cardCategorySale}
              className="category__link"
            />
            <Link
              link={"#"}
              img={cardCategoryCatalog}
              className="category__link"
            />
          </div>
        </section>

        <section className="about">
          <div className="about__inner">
            <div className="about__content">
              <h2 className="about__title">про нас</h2>
              <p className="about__text">
                <span className="about__text-span">Back in time</span> - це
                проект, який допомагає одягу з минулого отримати нове життя із
                новими власниками.
              </p>
              <p className="about__text">
                Наша філософія полягає у тому, що кожна річ заслуговує на
                довгострокове життя. Ми кажемо “ні” швидкій моді і працюємо над
                популяризією вінтажного стилю серед сучасних українців.
              </p>
            </div>

            <img src={about} alt="about" />
          </div>
        </section>
      </main>
    </div>
  );
};
