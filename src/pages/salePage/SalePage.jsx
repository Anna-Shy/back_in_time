import React from "react";

import { Header } from "../../components/header/Header";
import { Card } from "../../components/card/Card";
import { Linkin } from "../../components/linkin/Linkin";
import { Footer } from "../../components/footer/Footer";

import { saleArray } from "../../source/data/sale";

import "./salePage.scss";

export const SalePage = () => {
  return (
    <div className="sale">
      <Header icons />

      <main className="sale__main">
        <h2 className="main__title">розпродаж</h2>

        <div className="main__cards">
          {saleArray.map((item, key) => (
            <Card key={key} {...item} />
          ))}
        </div>

        <Linkin link={"/catalog"} text={"показати ще"} classStyle="main__btn" />
      </main>

      <Footer />
    </div>
  );
};
