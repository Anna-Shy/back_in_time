import React from "react";

import { Header } from "../../components/header/Header";
import { Card } from "../../components/card/Card";
import { Linkin } from "../../components/linkin/Linkin";
import { Footer } from "../../components/footer/Footer";

import { newArrivalsArray } from "./data";

import "./newArrivalsPage.scss";

export const NewArrivalsPage = () => {
  return (
    <div className="newArrivals">
      <Header icons />

      <main className="newArrivals__main">
        <h2 className="main__title">оновлення</h2>

        <div className="main__cards">
          {newArrivalsArray.map((item, key) => (
            <Card key={key} {...item} />
          ))}
        </div>

        <Linkin link={"/catalog"} text={"показати ще"} classStyle="main__btn" />
      </main>

      <Footer />
    </div>
  );
};
