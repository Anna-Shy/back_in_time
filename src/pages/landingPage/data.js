import about from "../../source/img/landing/about.png";

import { saleArray, newArrivalsArray } from "../../source/data/products";

const genderArray = [
    {
        link: "/catalog?gender=Men",
        text: "Menswear",
        image: require("../../source/img/landing/gender/men.png")
    },
    {
        link: "/catalog?gender=Women",
        text: "Womenswear",
        image: require("../../source/img/landing/gender/women.png")
    }
];

const categoryArray = [
    {
        link: "/newarrivals",
        text: "New arrivals",
        image: require("../../source/img/landing/category/card_category_new.png")
    },
    {
        link: "/sale",
        text: "Sale",
        image: require("../../source/img/landing/category/card_category_sale.png")
    },
    {
        link: "/catalog",
        text: "Catalog",
        image: require("../../source/img/landing/category/card_category_catalog.png")
    }
];

export { about, genderArray, categoryArray, newArrivalsArray, saleArray };