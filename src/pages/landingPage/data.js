import about from "../../source/img/landing/about.png";

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
    }
]

const categoryArray = [
    {
        link: "/newarrivals",
        image: require("../../source/img/landing/category/card_category_new.png")
    },
    {
        link: "/sale",
        image: require("../../source/img/landing/category/card_category_sale.png")
    },
    {
        link: "/catalog",
        image: require("../../source/img/landing/category/card_category_catalog.png")
    },
    {
        link: "/newarrivals",
        image: require("../../source/img/landing/category/card_category_new-adaptive.png")
    },
    {
        link: "/sale",
        image: require("../../source/img/landing/category/card_category_sale-adaptive.png")
    },
    {
        link: "/catalog",
        image: require("../../source/img/landing/category/card_category_catalog-adaptive.png")
    }
];

export { headerMenuArray, about, genderArray, categoryArray, newArrivalsArray, saleArray };