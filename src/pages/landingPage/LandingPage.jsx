import React from "react";
import { Link } from "react-router-dom";

import { Header } from "../../components/header/Header";
import { Linkin } from "../../components/linkin/Linkin";
import { Card } from "../../components/card/Card";
import { Carousel } from "../../components/carousel/Carousel";
import { Footer } from "../../components/footer/Footer";

import {
  about,
  genderArray,
  categoryArray,
  newArrivalsArray,
  saleArray
} from "./data";

import "./landingPage.scss";

export const LandingPage = () => {
  return (
    <div className="landing">
      <header className="landing__header">
        <div className="header-adaptive">
          <Header light />
        </div>

        <div className="header__content">
          <h1 className="header__title">time machine</h1>
          <p className="header__text">
            for <span className="header__text-span">your wardrobe</span>
          </p>

          <Linkin link={"/catalog"} text={"shop now"} classStyle="header__btn" />
        </div>
      </header>

      <main className="landing__main">
        <section className="category">
          <div className="category__inner">
            {categoryArray.map((item) => (
              <Link to={item.link} key={item.text} className="category__link">
                <img className="category__img" src={item.image} alt="" />
                <span className="category__text">{item.text}</span>
              </Link>
            ))}
          </div>
        </section>

        <section className="about">
          <div className="about__inner">
            <div className="about__content">
              <h2 className="about__title">about us</h2>
              <p className="about__text">
                <span className="about__text-span">Back in time</span> is a
                project that helps clothes from the past get a new life with new
                owners.
              </p>
              <p className="about__text">
                Our philosophy is that every piece deserves a long life. We say
                “no” to fast fashion and work to make vintage style popular
                among modern Ukrainians.
              </p>
            </div>

            <img src={about} alt="about" className="about__img" />
          </div>
        </section>

        <section className="renewal">
          <div className="renewal__inner">
            <h2 className="renewal__title">new arrivals</h2>

            <Carousel label="New arrivals">
              {newArrivalsArray.map((item) => (
                <Card key={item.id} {...item} />
              ))}
            </Carousel>

            <Linkin
              link={"/newarrivals"}
              text={"show more"}
              classStyle="renewal__btn"
            />
          </div>
        </section>

        <section className="gender">
          <div className="gender__inner">
            {genderArray.map((item) => (
              <Link to={item.link} key={item.text} className="gender__link">
                <img className="gender__img" src={item.image} alt="" />
                <span className="gender__text">{item.text}</span>
              </Link>
            ))}
          </div>
        </section>

        <section className="sale">
          <div className="sale__inner">
            <h2 className="sale__title">sale</h2>

            <Carousel label="Sale">
              {saleArray.map((item) => (
                <Card key={item.id} {...item} />
              ))}
            </Carousel>

            <Linkin
              link={"/sale"}
              text={"show more"}
              classStyle="sale__btn"
            />
          </div>
        </section>

        <section className="connect">
          <div className="connect__inner">
            <h1 className="connect__title big">
              join our community on instagram
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
