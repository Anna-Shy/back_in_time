import about from "../../source/img/landing/about.png";
import menAdaptive from '../../source/img/landing/gender/men-adaptive.svg' 
import womenAdaptive from '../../source/img/landing/gender/women-adaptive.svg' 

import { saleArray } from "../../source/data/sale";
import { newArrivalsArray } from "../../source/data/newArrivals";

const headerMenuArray = [
    {
      link: "/newarrivals",
      text: "Оновлення"
    },
    {
      link: "/catalog",
      text: "Каталог"
    },
    {
      link: "/sale",
      text: "Розпродаж"
    },
    {
      link: "/contact",
      text: "Контакти"
    }
  ];

const genderArray = [
    {
        link: "#",
        image: require("../../source/img/landing/gender/men.png")
    },
    {
        link: '#',
        image: require("../../source/img/landing/gender/women.png")
    },
    {
        link: "#",
        image: menAdaptive
    },
    {
        link: '#',
        image: womenAdaptive
    }
]

const categoryArray = [
    {
        link: "/catalog",
        image: require("../../source/img/landing/category/card_category_catalog.png")
    },
    {
        link: "/sale",
        image: require("../../source/img/landing/category/card_category_sale.png")
    },
    {
        link: "/newarrivals",
        image: require("../../source/img/landing/category/card_category_new.png")
    },
    {
        link: "/catalog",
        image: require("../../source/img/landing/category/card_category_catalog-adaptive.png")
    },
    {
        link: "/sale",
        image: require("../../source/img/landing/category/card_category_sale-adaptive.png")
    },
    {
        link: "/newarrivals",
        image: require("../../source/img/landing/category/card_category_new-adaptive.png")
    }
];

export { headerMenuArray, about, genderArray, categoryArray, newArrivalsArray, saleArray };