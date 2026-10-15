import React from "react";

import { Header } from "../../components/header/Header";
import { Card } from "../../components/card/Card";
import { Linkin } from "../../components/linkin/Linkin";
import { Footer } from "../../components/footer/Footer";

import { newArrivalsArray } from "../../source/data/products";

import "./newArrivalsPage.scss";

export const NewArrivalsPage = () => {
  return (
    <div className="newArrivals__page">
      <Header />

      <main className="newArrivals__main">
        <h2 className="main__title">new arrivals</h2>

        <div className="main__cards">
          {newArrivalsArray.map((item) => (
            <Card key={item.id} {...item} />
          ))}
        </div>

        <Linkin link={"/catalog"} text={"view full catalog"} classStyle="main__btn" />
      </main>

      <Footer />
    </div>
  );
};
