import React from 'react';
import { useSearchParams } from 'react-router-dom';

import { Header } from "../../components/header/Header";
import { Card } from "../../components/card/Card";
import { Select } from '../../components/select/Select';
import { Footer } from "../../components/footer/Footer";

import { catalogArray } from "../../source/data/products";
import {
  typeFilterArray,
  genderFilterArray,
  sizeFilterArray,
  brandFilterArray
} from './data';

import './catalogPage.scss'

// key — name in the URL (?gender=Men), field — property of a catalog item
const FILTERS = [
  { key: 'category', label: 'Category', field: 'type', options: typeFilterArray },
  { key: 'gender', label: 'Gender', field: 'sex', options: genderFilterArray },
  { key: 'size', label: 'Size', field: 'size', options: sizeFilterArray },
  { key: 'brand', label: 'Brand', field: 'brand', options: brandFilterArray }
];

const matchesSearch = (item, search) =>
  item.title.toLowerCase().includes(search.toLowerCase());

export const CatalogPage = () => {
  // filters live in the URL, so they survive "back" and can be shared
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get('q') || '';
  const values = Object.fromEntries(
    FILTERS.map((filter) => [filter.key, searchParams.get(filter.key) || ''])
  );

  const setParam = (key, value) => {
    const next = new URLSearchParams(searchParams);
    if (value) next.set(key, value);
    else next.delete(key);
    setSearchParams(next, { replace: true });
  };

  const clearAll = () => setSearchParams({}, { replace: true });

  // does the item pass every active filter except the skipped one
  const matches = (item, skipKey) =>
    matchesSearch(item, search) &&
    FILTERS.every(
      (filter) =>
        filter.key === skipKey ||
        values[filter.key] === '' ||
        item[filter.field] === values[filter.key]
    );

  const filteredItems = catalogArray.filter((item) => matches(item));

  // how many items each option would show together with the other filters
  const countsFor = (filter) => {
    const pool = catalogArray.filter((item) => matches(item, filter.key));
    return Object.fromEntries(
      filter.options.map((option) => [
        option.value,
        option.value === ''
          ? pool.length
          : pool.filter((item) => item[filter.field] === option.value).length
      ])
    );
  };

  const activeFilters = FILTERS.filter((filter) => values[filter.key] !== '');
  const hasActive = activeFilters.length > 0 || search !== '';

  return (
    <div className="catalog__page">
      <Header />

      <main className="catalog__main">
        <div className="main__navbar">
          <div className="main__navbar-filter">
            {FILTERS.map((filter) => (
              <Select
                key={filter.key}
                label={filter.label}
                value={values[filter.key]}
                setValue={(value) => setParam(filter.key, value)}
                option={filter.options}
                counts={countsFor(filter)}
              />
            ))}
          </div>

          <div className="main__navbar-sort">
            <p className="sort__text">{filteredItems.length} {filteredItems.length === 1 ? "item" : "items"}</p>

            <div className="sort__input">
              <input
                type="search"
                value={search}
                onChange={(e) => setParam('q', e.target.value)}
                placeholder="Search products"
                aria-label="Search products"
                className="sort__input-input" />
            </div>
          </div>
        </div>

        {hasActive && (
          <div className="main__active">
            {search && (
              <button className="active__chip" onClick={() => setParam('q', '')}>
                “{search}” <span className="active__chip-close">×</span>
              </button>
            )}

            {activeFilters.map((filter) => (
              <button
                key={filter.key}
                className="active__chip"
                onClick={() => setParam(filter.key, '')}
                aria-label={`Remove filter ${filter.label}`}
              >
                {filter.label}: {values[filter.key]}{" "}
                <span className="active__chip-close">×</span>
              </button>
            ))}

            <button className="active__clear" onClick={clearAll}>
              Clear all
            </button>
          </div>
        )}

        {filteredItems.length > 0 ? (
          <div className="main__cards">
            {filteredItems.map((item) => (
              <Card key={item.id} {...item} />
            ))}
          </div>
        ) : (
          <div className="main__empty">
            <p className="main__empty-title">Nothing found</p>
            <p className="main__empty-text">
              Try removing some filters or changing the search.
            </p>
            <button className="main__empty-btn" onClick={clearAll}>
              clear filters
            </button>
          </div>
        )}
      </main>

      <Footer />
    </div>
  )
}
