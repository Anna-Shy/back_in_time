import React from "react";
import ScrollCarousel from "scroll-carousel-react";

import { Header } from "../../components/header/Header";
import { Link } from "../../components/link/Link";
import { Footer } from "../../components/footer/Footer";

import {
  about,
  women,
  men,
  categoryArray,
  renewalArray,
  saleArray
} from "./data";

import "./landingPage.scss";

const CarouselCard = ({ image, title, price, sale }) => (
  <div className="carousel__card">
    <img className="carousel__card-image" src={image} alt={title} />
    <h4 className="carousel__card-title">{title}</h4>
    <p className="carousel__card-price">
      {price} <span className="price-span">{sale}</span>
    </p>
  </div>
);

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
            {categoryArray.map((item, key) => (
              <Link link={item.link} img={item.image} key={key} />
            ))}
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
                {renewalArray.map((item, index) => (
                  <CarouselCard key={index} {...item} />
                ))}
              </ScrollCarousel>
            </div>

            <Link link={"#"} text={"показати ще"} classStyle="renewal__btn" />
          </div>
        </section>

        <section className="gender">
          <div className="gender__inner">
            <Link
              link={"#"}
              img={men}
              classStyleImg="gender__btn"
              classStyle="gender__btn"
            />
            <Link
              link={"#"}
              img={women}
              classStyleImg="gender__btn"
              classStyle="gender__btn"
            />
          </div>
        </section>

        <section className="sale">
          <div className="sale__inner">
            <h2 className="sale__title">розпродаж</h2>

            <div className="sale__carousel">
              <ScrollCarousel autoplay autoplaySpeed={4} speed={3}>
                {saleArray.map((item, index) => (
                  <CarouselCard key={index} {...item} />
                ))}
              </ScrollCarousel>
            </div>

            <Link link={"#"} text={"показати ще"} classStyle="sale__btn" />
          </div>
        </section>

        <section className="connect">
          <div className="connect__inner">
            <h1 className="connect__title big">
              долучайтесь до нашої спільноти в інстаграм
            </h1>

            {Array.from({ length: 8 }).map((_, index) => (
              <img
                key={index}
                className="connect__image"
                src={require(`../../source/img/landing/connect/connect${
                  index + 1
                }.png`)}
                alt={`connect${index + 1}`}
              />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};