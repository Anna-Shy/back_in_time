import React, { useState } from 'react';

import { Header } from "../../components/header/Header";
import { Card } from "../../components/card/Card";
import { Select } from '../../components/select/Select';
import { Linkin } from "../../components/linkin/Linkin";
import { Footer } from "../../components/footer/Footer";

import { newArrivalsArray } from "../../source/data/newArrivals";
import { catalogArray } from "../../source/data/catalog";
import {
  typeFilterArray,
  genderFilterArray,
  sizeFilterArray,
  yearFilterArray,
  brandFilterArray
} from './data';

import './catalogPage.scss'

export const CatalogPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [typeFilter, setTypeFilter] = useState('');
  const [genderFilter, setGenderFilter] = useState('');
  const [sizeFilter, setSizeFilter] = useState('');
  const [brandFilter, setBrandFilter] = useState('');

  const filteredItems = catalogArray.filter(item => {
    return (
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (typeFilter === '' || item.type === typeFilter) &&
      (genderFilter === '' || item.sex === genderFilter) &&
      (sizeFilter === '' || item.size === sizeFilter) &&
      (brandFilter === '' || item.brand === brandFilter)
    );
  });

  return (
    <div className="catalog__page">
      <Header icons />

      <main className="catalog__main">
        <div className="main__navbar">
          <div className="main__navbar-sort">
            <p className="sort__text">{newArrivalsArray.length} товарів</p>

            <div className="divider"></div>

            <div className="sort__input">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Пошук товарів"
                className="sort__input-input" />
            </div>
          </div>

          <div className="main__navbar-filter">
            <Select
              label={"Тип товару"}
              value={typeFilter}
              setValue={setTypeFilter}
              option={typeFilterArray}
            />

            <Select
              label={"Стать"}
              value={genderFilter}
              setValue={setGenderFilter}
              option={genderFilterArray}
            />

            <Select
              label={"Розмір"}
              value={sizeFilter}
              setValue={setSizeFilter}
              option={sizeFilterArray}
            />

            <Select
              label={"Бренд"}
              value={brandFilter}
              setValue={setBrandFilter}
              option={brandFilterArray}
            />
          </div>
        </div>


        <div className="main__cards">
          {filteredItems.map((item, key) => (
            <Card key={key} {...item} />
          ))}
        </div>

        <Linkin link={"/catalog"} text={"показати ще"} classStyle="main__btn" />
      </main>

      <Footer />
    </div>
  )
}
