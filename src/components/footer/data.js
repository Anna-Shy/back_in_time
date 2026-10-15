import insta from "../../source/img/footer/insta.svg";
import facebook from "../../source/img/footer/facebook.svg";
import youtube from "../../source/img/footer/youtube.svg";
import pinterest from "../../source/img/footer/pinterest.svg";
import tiktok from "../../source/img/footer/tiktok.svg";

import visa from "../../source/img/footer/visa.svg";
import mastercard from "../../source/img/footer/mastercard.svg";
import applepay from "../../source/img/footer/applepay.svg";
import googlepay from "../../source/img/footer/googlepay.svg";


const socialIconArray = [
    {
        image: insta,
        link: '#'
    },
    {
        image: facebook,
        link: '#'
    },
    {
        image: youtube,
        link: '#'
    },
    {
        image: pinterest,
        link: '#'
    },
    {
        image: tiktok,
        link: '#'
    }
]

const paymentIconArray = [
    {
        image: visa,
        name: "Visa"
    },
    {
        image: mastercard,
        name: "Mastercard"
    },
    {
        image: applepay,
        name: "Apple Pay"
    },
    {
        image: googlepay,
        name: "Google Pay"
    }
]

const footerAboutArray = [
    {
        link: "/about",
        text: "About us"
    },
    {
        link: "/terms",
        text: "Terms of sale"
    },
    {
        link: "/privacy",
        text: "Privacy Policy"
    }
];

const footerClientArray = [
    {
        link: "/login",
        text: "My account"
    },
    {
        link: "/shipping",
        text: "Shipping & payment"
    },
    {
        link: "/returns",
        text: "Exchanges & returns"
    },
    {
        link: "/contact",
        text: "Contacts"
    },
    {
        link: "/faq",
        text: "FAQ"
    }
];


export { socialIconArray, paymentIconArray, footerAboutArray, footerClientArray }