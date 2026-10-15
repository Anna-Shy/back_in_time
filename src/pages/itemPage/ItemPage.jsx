import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import ImageGallery from "react-image-gallery";

import { Header } from "../../components/header/Header";
import { Breadcrumbs } from "../../components/breadcrumbs/Breadcrumbs";
import { Modal } from "../../components/modal/Modal";
import { Card } from "../../components/card/Card";
import { Carousel } from "../../components/carousel/Carousel";
import { Chevron } from "../../components/chevron/Chevron";
import { Footer } from "../../components/footer/Footer";

import { useCart } from "../../context/CartContext";
import {
  formatPrice,
  getProduct,
  getSuggestions
} from "../../source/data/products";

import "./itemPage.scss";
import "react-image-gallery/styles/css/image-gallery.css";

export const ItemPage = () => {
  const [isVisible, setIsVisible] = useState({
    description: false,
    care: false,
    delivery: false
  });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const toggleVisibility = (key) => {
    setIsVisible((prevState) => ({
      ...prevState,
      [key]: !prevState[key]
    }));
  };

  const { itemId } = useParams();
  const product = getProduct(itemId);
  const cart = useCart();

  // unknown id -> the router shows the 404 page
  if (!product) {
    throw new Response("Not found", { status: 404 });
  }

  const {
    image,
    title,
    code,
    price,
    oldPrice,
    info,
    state,
    size,
    length,
    sleeveLength,
    shoulders,
    sex,
    years,
    composition,
    care = []
  } = product;

  const images = [{ original: image, thumbnail: image }];

  return (
    <div className="itemPage__page">
      <Header />

      <main className="itemPage__main">
        <Breadcrumbs />

        <section className="chooseItem">
          <ImageGallery
            items={images}
            className="chooseItem__image"
            showThumbnails={images.length > 1}
            showNav={images.length > 1}
            showFullscreenButton={false}
            showPlayButton={false}
          />

          <div className="chooseItem__content">
            <div className="chooseItem__description">
              <h2 className="chooseItem__title">{title}</h2>
              <p className="chooseItem__code">Product code: {code}</p>
              <p className="chooseItem__price">
                {formatPrice(price)}&nbsp;
                {oldPrice && (
                  <span className="chooseItem__price-sale">{formatPrice(oldPrice)}</span>
                )}
              </p>

              {/* one of a kind: once it is in the cart, the button leads there */}
              {cart.has(product.id) ? (
                <Link to="/cart" className="chooseItem__btn chooseItem__btn-added">
                  in cart — view cart
                </Link>
              ) : (
                <button
                  className="chooseItem__btn"
                  onClick={() => {
                    cart.add(product.id);
                    openModal();
                  }}
                >
                  add to cart
                </button>
              )}
              <p className="chooseItem__unique">One of a kind — only 1 item available</p>
              <Modal isOpen={isModalOpen} onClose={closeModal} image={image} title={title} price={formatPrice(price)} />
             </div>

            <div className="divider"></div>
            <div className="chooseItem__info">
              <button
                className="chooseItem__info-btn"
                onClick={() => toggleVisibility("description")}
              >
                description
                <Chevron open={isVisible.description} />
              </button>
              {isVisible.description && (
                <div className="chooseItem__info-details">
                  {info && <h4 className="details__title">{info}</h4>}
                  {state && (
                    <p className="detail-text">
                      <span className="details-text-span">Condition</span> {state}
                    </p>
                  )}
                  {size && (
                    <p className="detail-text">
                      <span className="details-text-span">Size</span> {size}
                    </p>
                  )}
                  {length && (
                    <p className="detail-text">
                      <span className="details-text-span">Length</span>{" "}
                      {length}
                    </p>
                  )}
                  {sleeveLength && (
                    <p className="detail-text">
                      <span className="details-text-span">Sleeve length</span>{" "}
                      {sleeveLength}
                    </p>
                  )}
                  {shoulders && (
                    <p className="detail-text">
                      <span className="details-text-span">Shoulders</span>{" "}
                      {shoulders}
                    </p>
                  )}
                  {sex && (
                    <p className="detail-text">
                      <span className="details-text-span">Gender</span> {sex}
                    </p>
                  )}
                  {years && (
                    <p className="detail-text">
                      <span className="details-text-span">Era</span> {years}
                    </p>
                  )}
                </div>
              )}
            </div>
            <div className="divider"></div>
            <div className="chooseItem__info">
              <button
                className="chooseItem__info-btn"
                onClick={() => toggleVisibility("care")}
              >
                composition & care
                <Chevron open={isVisible.care} />
              </button>
              {isVisible.care && (
                <div className="chooseItem__info-details">
                  <div className="details-composition">
                    <p className="detail-text">
                      <span className="details-text-span">Composition</span>&nbsp;
                    </p>
                    <p className="detail-text">{composition}</p>
                  </div>

                  <p className="detail-text">
                    <span className="details-text-span">
                      Care instructions
                    </span>
                  </p>
                  <ul className="detail-text detail-list">
                    {care.map((careItem, index) => (
                      <li className="detail-list-item" key={index}>
                        {careItem}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
            <div className="divider"></div>
            <div className="chooseItem__info">
              <button
                className="chooseItem__info-btn"
                onClick={() => toggleVisibility("delivery")}
              >
                shipping & returns
                <Chevron open={isVisible.delivery} />
              </button>
              {isVisible.delivery && (
                <div className="chooseItem__info-details">
                  <p className="detail-text">
                    <span className="details-text-span">Nova Poshta</span>{" "}
                    within 2 business days after payment. Shipping is paid by the
                    buyer at Nova Poshta rates.
                  </p>
                  <p className="detail-text">
                    <span className="details-text-span">Returns</span> are accepted
                    within 2 business days after delivery.
                  </p>
                  <p className="detail-text">
                    Every item in our store is one of a kind, but you can exchange
                    an item that didn't fit for any other one at the same price
                    or by paying the difference.
                  </p>
                </div>
              )}
            </div>
            <div className="divider"></div>
          </div>
        </section>

        <section className="moreItem">
          <h2 className="moreItem__title">complete your look</h2>

          <Carousel label="Complete your look">
            {getSuggestions(product).map((item) => (
              <Card key={item.id} {...item} />
            ))}
          </Carousel>
        </section>
      </main>

      <Footer />
    </div>
  );
};
