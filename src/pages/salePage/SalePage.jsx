import React from "react";

import { Header } from "../../components/header/Header";
import { Card } from "../../components/card/Card";
import { Linkin } from "../../components/linkin/Linkin";
import { Footer } from "../../components/footer/Footer";

import { saleArray } from "../../source/data/products";

import "./salePage.scss";

export const SalePage = () => {
  return (
    <div className="sale__page">
      <Header />

      <main className="sale__main">
        <h2 className="main__title">sale</h2>

        <div className="main__cards">
          {saleArray.map((item) => (
            <Card key={item.id} {...item} />
          ))}
        </div>

        <Linkin link={"/catalog"} text={"view full catalog"} classStyle="main__btn" />
      </main>

      <Footer />
    </div>
  );
};
