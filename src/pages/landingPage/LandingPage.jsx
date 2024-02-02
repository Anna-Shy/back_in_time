import React from "react";
import ScrollCarousel from "scroll-carousel-react";

import { Header } from "../../components/header/Header";
import { Link } from "../../components/link/Link";

import "./landingPage.scss";

import about from "../../source/img/landing/about.png";

import cardCategoryCatalog from "../../source/img/landing/category/card_category_catalog.png";
import cardCategorySale from "../../source/img/landing/category/card_category_sale.png";
import cardCategoryNew from "../../source/img/landing/category/card_category_new.png";

import renewal1 from "../../source/img/landing/renewal/renewal1.png";
import renewal2 from "../../source/img/landing/renewal/renewal2.png";
import renewal3 from "../../source/img/landing/renewal/renewal3.png";
import renewal4 from "../../source/img/landing/renewal/renewal4.png";
import renewal5 from "../../source/img/landing/renewal/renewal5.png";

import women from "../../source/img/landing/gender/women.png";
import men from "../../source/img/landing/gender/men.png";

import sale1 from "../../source/img/landing/sale/sale1.png";
import sale2 from "../../source/img/landing/sale/sale2.png";
import sale3 from "../../source/img/landing/sale/sale3.png";
import sale4 from "../../source/img/landing/sale/sale4.png";
import sale5 from "../../source/img/landing/sale/sale5.png";

import connect1 from "../../source/img/landing/connect/connect1.png";
import connect2 from "../../source/img/landing/connect/connect2.png";
import connect3 from "../../source/img/landing/connect/connect3.png";
import connect4 from "../../source/img/landing/connect/connect4.png";
import connect5 from "../../source/img/landing/connect/connect5.png";
import connect6 from "../../source/img/landing/connect/connect6.png";
import connect7 from "../../source/img/landing/connect/connect7.png";
import connect8 from "../../source/img/landing/connect/connect8.png";

const renewal_array = [
  {
    id: 1,
    image: renewal1,
    title: "ВІТРОВКА ВІНТАЖНА ASICS",
    price: "900 грн"
  },
  {
    id: 2,
    image: renewal2,
    title: "ДЖИНСОВКА LEVI’S",
    price: "1400 грн"
  },
  {
    id: 3,
    image: renewal3,
    title: "вінтажний оверсайз светр",
    price: "950 грн"
  },
  {
    id: 4,
    image: renewal4,
    title: "Анорак fila",
    price: "1100 грн"
  },
  {
    id: 5,
    image: renewal5,
    title: "вінтажний оверсайз светр",
    price: "650 грн"
  }
];

const sale_array = [
  {
    id: 1,
    image: sale1,
    title: "сорочка з прапором usa",
    price: "300 грн",
    sale: "600 грн"
  },
  {
    id: 2,
    image: sale2,
    title: "футболка спортивна nike",
    price: "200 грн",
    sale: "400 грн"
  },
  {
    id: 3,
    image: sale3,
    title: "NIKE BLAZER MID 77 VINTAGE",
    price: "2500 грн",
    sale: "2800 грн"
  },
  {
    id: 4,
    image: sale4,
    title: "CONVERSE CHUCK TAYLOR LIFT RAINBOW",
    price: "2000 грн",
    sale: "2000 грн"
  },
  {
    id: 5,
    image: sale5,
    title: "СОРОЧКА З ПРИНТОМ",
    price: "200 грн",
    sale: "550 грн"
  }
];

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
                популяризацією вінтажного стилю серед сучасних українців.
              </p>
            </div>

            <img src={about} alt="about" />
          </div>
        </section>

        <section className="renewal">
          <div className="renewal__inner">
            <h2 className="renewal__title">оновлення</h2>

            <div className="renewal__carousel">
              <ScrollCarousel autoplay autoplaySpeed={4} speed={3}>
                {renewal_array.map((item, index) => (
                  <div className="carousel__card" key={index}>
                    <img
                      className="carousel__card-image"
                      src={item.image}
                      alt={item.title}
                    />
                    <h4 className="carousel__card-title">{item.title}</h4>
                    <p className="carousel__card-price">{item.price}</p>
                  </div>
                ))}
              </ScrollCarousel>
            </div>

            <Link link={"#"} text={"показати ще"} classStyle="renewal__btn" />
          </div>
        </section>

        <section className="gender">
          <div className="gender__inner">
            <Link link={"#"} img={men} classStyle="gender__btn" />
            <Link link={"#"} img={women} classStyle="gender__btn" />
          </div>
        </section>

        <section className="sale">
          <div className="sale__inner">
            <h2 className="sale__title">розпродаж</h2>

            <div className="sale__carousel">
              <ScrollCarousel autoplay autoplaySpeed={4} speed={3}>
                {sale_array.map((item, index) => (
                  <div className="carousel__card" key={index}>
                    <img
                      className="carousel__card-image"
                      src={item.image}
                      alt={item.title}
                    />
                    <h4 className="carousel__card-title">{item.title}</h4>
                    <p className="carousel__card-price">
                      {item.price}{" "}
                      <span className="price-span">{item.sale}</span>
                    </p>
                  </div>
                ))}
              </ScrollCarousel>
            </div>

            <Link link={"#"} text={"показати ще"} classStyle="sale__btn" />
          </div>
        </section>

        <section className="connect">
          <div className="connect__inner">
            <h1 className="connect__title">
              долучайтесь до нашої спільноти в інстаграм
            </h1>

            <img className="connect__image" src={connect1} alt={connect1} />
            <img className="connect__image" src={connect2} alt={connect2} />
            <img className="connect__image" src={connect3} alt={connect3} />
            <div className="connect__image-div">
              <img className="connect__image" src={connect4} alt={connect4} />
              <img className="connect__image" src={connect5} alt={connect5} />
            </div>
            <img className="connect__image" src={connect6} alt={connect6} />

            <img className="connect__image" src={connect7} alt={connect7} />
            <img className="connect__image" src={connect8} alt={connect8} />
          </div>
        </section>
      </main>
    </div>
  );
};
