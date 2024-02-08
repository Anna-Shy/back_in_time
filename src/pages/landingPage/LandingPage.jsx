import React from "react";
import ScrollCarousel from "scroll-carousel-react";

import { Header } from "../../components/header/Header";
import { Linkin } from "../../components/linkin/Linkin";
import { Card } from "../../components/card/Card";
import { Footer } from "../../components/footer/Footer";

import {
  headerMenuArray,
  about,
  genderArray,
  categoryArray,
  renewalArray,
  saleArray
} from "./data";

import "./landingPage.scss";

export const LandingPage = () => {
  return (
    <div className="landing">
      <header className="landing__header">
        <Header menuLink={headerMenuArray} icons />

        <div className="header__content">
          <h1 className="header__title">машина часу</h1>
          <p className="header__text">
            в твоєму <span className="header__text-span">гардеробі</span>
          </p>

          <Linkin link={"/catalog"} text={"вибрати"} classStyle="header__btn" />
        </div>
      </header>

      <main className="landing__main">
        <section className="category">
          <div className="category__inner">
            {categoryArray.map((item, key) => (
              <Linkin
                link={item.link}
                img={item.image}
                key={key}
                classStyleImg={"category__img"}
                classStyle={"category__link"}
              />
            ))}
          </div>
        </section>

        <section className="about">
          <div className="about__inner">
            <div className="about__content">
              <h2 className="about__title">про нас</h2>
              <p className="about__text">
                <span className="about__text-span">Back in time</span> - це
                проєкт, який допомагає одягу з минулого отримати нове життя із
                новими власниками.
              </p>
              <p className="about__text">
                Наша філософія полягає у тому, що кожна річ заслуговує на
                довгострокове життя. Ми кажемо “ні” швидкій моді та працюємо над
                популяризацією вінтажного стилю серед сучасних українців.
              </p>
            </div>

            <img src={about} alt="about" className="about__img" />
          </div>
        </section>

        <section className="renewal">
          <div className="renewal__inner">
            <h2 className="renewal__title">оновлення</h2>

            <div className="renewal__carousel">
              <ScrollCarousel autoplay autoplaySpeed={4} speed={3}>
                {renewalArray.map((item, index) => (
                  <Card key={index} {...item} />
                ))}
              </ScrollCarousel>
            </div>

            <Linkin
              link={"/newarrivals"}
              text={"показати ще"}
              classStyle="renewal__btn"
            />
          </div>
        </section>

        <section className="gender">
          <div className="gender__inner">
            {genderArray.map((item, key) => (
              <Linkin
                key={key}
                link={"#"}
                img={item.image}
                classStyleImg="gender__img"
                classStyle="gender__link"
              />
            ))}
          </div>
        </section>

        <section className="sale">
          <div className="sale__inner">
            <h2 className="sale__title">розпродаж</h2>

            <div className="sale__carousel">
              <ScrollCarousel autoplay autoplaySpeed={4} speed={3}>
                {saleArray.map((item, index) => (
                  <Card key={index} {...item} />
                ))}
              </ScrollCarousel>
            </div>

            <Linkin
              link={"/sale"}
              text={"показати ще"}
              classStyle="sale__btn"
            />
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
