import about from "../../source/img/landing/about.png";
import menAdaptive from '../../source/img/landing/gender/men-adaptive.svg' 
import womenAdaptive from '../../source/img/landing/gender/women-adaptive.svg' 

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
        link: "/new-arrivals",
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
        link: "/new-arrivals",
        image: require("../../source/img/landing/category/card_category_new-adaptive.png")
    }
];

const renewalArray = [
    {
        id: 1,
        image: require("../../source/img/landing/renewal/renewal1.png"),
        title: "ВІТРОВКА ВІНТАЖНА ASICS",
        price: "900 грн"
    },
    {
        id: 2,
        image: require("../../source/img/landing/renewal/renewal2.png"),
        title: "ДЖИНСОВКА LEVI’S",
        price: "1400 грн"
    },
    {
        id: 3,
        image: require("../../source/img/landing/renewal/renewal3.png"),
        title: "вінтажний оверсайз светр",
        price: "950 грн"
    },
    {
        id: 4,
        image: require("../../source/img/landing/renewal/renewal4.png"),
        title: "Анорак fila",
        price: "1100 грн"
    },
    {
        id: 5,
        image: require("../../source/img/landing/renewal/renewal5.png"),
        title: "вінтажний оверсайз светр",
        price: "650 грн"
    }
];

const saleArray = [
    {
        id: 1,
        image: require("../../source/img/landing/sale/sale1.png"),
        title: "сорочка з прапором usa",
        price: "300 грн",
        sale: "600 грн"
    },
    {
        id: 2,
        image: require("../../source/img/landing/sale/sale2.png"),
        title: "футболка спортивна nike",
        price: "200 грн",
        sale: "400 грн"
    },
    {
        id: 3,
        image: require("../../source/img/landing/sale/sale3.png"),
        title: "NIKE BLAZER MID 77 VINTAGE",
        price: "2500 грн",
        sale: "2800 грн"
    },
    {
        id: 4,
        image: require("../../source/img/landing/sale/sale4.png"),
        title: "CONVERSE CHUCK TAYLOR LIFT RAINBOW",
        price: "2000 грн",
        sale: "2000 грн"
    },
    {
        id: 5,
        image: require("../../source/img/landing/sale/sale5.png"),
        title: "СОРОЧКА З ПРИНТОМ",
        price: "200 грн",
        sale: "550 грн"
    }
];

export { headerMenuArray, about, genderArray, categoryArray, renewalArray, saleArray };