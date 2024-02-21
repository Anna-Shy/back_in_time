import React from "react";

import check from "../../source/svg/icons/check.svg";
import cancel from "../../source/svg/icons/cancel.svg";

import "./modal.scss";
import { Linkin } from "../linkin/Linkin";

export const Modal = ({ isOpen, onClose, image, title, price }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal__header">
          <div className="modal__header-block">
            <img className="block-icon" src={check} alt="check" />
            <p className="block-text">Товар додано до кошика</p>
          </div>

          <button className="modal__header-btn" onClick={onClose}>
            <img src={cancel} alt="cancel" />
          </button>
        </div>

        <div className="modal__main">
          <img className="modal__main-img" src={image} alt="cloth" />

          <div className="modal__main-content">
            <h2 className="content-title">{title}</h2>
            <p className="content-price">{price}</p>
          </div>
        </div>

        <div className="modal__btn">
          <Linkin link={"/"} text={"в кошик"} classStyle="modal__btn-basket" />
          <Linkin link={"/"} text={"оформити"} classStyle="modal__btn-buy" />
          <button className="modal__btn-continue" onClick={onClose}>
            продовжити покупки
          </button>
        </div>
      </div>
    </div>
  );
};
