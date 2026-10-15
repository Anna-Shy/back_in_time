// Content of the simple text pages linked from the footer.
// Each section has a title and paragraphs and/or a bullet list.

export const infoPages = {
    about: {
        title: "About us",
        lead: "Back in time is a project that helps clothes from the past get a new life with new owners.",
        sections: [
            {
                title: "Our philosophy",
                paragraphs: [
                    "We believe every piece deserves a long life. We say “no” to fast fashion and work to make vintage style popular among modern Ukrainians.",
                    "Buying vintage means less waste and fewer new clothes produced, and it also means owning something nobody else has."
                ]
            },
            {
                title: "How we choose clothes",
                list: [
                    "We hand-pick every item from vintage markets and private collections.",
                    "Each piece is checked for defects, cleaned and, if needed, carefully repaired.",
                    "We describe the real condition and measurements so there are no surprises."
                ]
            },
            {
                title: "One of a kind",
                paragraphs: [
                    "Every item in our store exists in a single copy. If you like something, don’t wait too long — it won’t come back in another size."
                ]
            }
        ]
    },

    terms: {
        title: "Terms of sale",
        lead: "These terms apply to all orders placed on the Back in time website.",
        sections: [
            {
                title: "Orders",
                paragraphs: [
                    "An order is accepted once you receive a confirmation by email or phone. Since every item is one of a kind, we may cancel an order if the item has already been sold — in that case any payment is fully refunded."
                ]
            },
            {
                title: "Prices and payment",
                paragraphs: [
                    "All prices are listed in Ukrainian hryvnias (UAH). Delivery is not included in the price of the item.",
                    "You can pay by Visa or Mastercard, Apple Pay or Google Pay."
                ]
            },
            {
                title: "Delivery",
                paragraphs: [
                    "We ship with Nova Poshta within 2 business days after payment. Shipping is paid by the buyer at Nova Poshta rates."
                ]
            },
            {
                title: "Returns and exchanges",
                paragraphs: [
                    "You can return or exchange an item within 2 business days after delivery. Details are on the Exchanges & returns page."
                ]
            },
            {
                title: "Item condition",
                paragraphs: [
                    "Vintage clothes may have small signs of wear that match their age. We always mention noticeable defects in the item description."
                ]
            }
        ]
    },

    privacy: {
        title: "Privacy Policy",
        lead: "We respect your privacy and only collect the data we need to process your orders.",
        sections: [
            {
                title: "What data we collect",
                list: [
                    "Your name, phone number and email.",
                    "Delivery details: city and Nova Poshta branch.",
                    "Your order history if you create an account."
                ]
            },
            {
                title: "How we use it",
                list: [
                    "To process and deliver your orders.",
                    "To contact you about your order.",
                    "To send you news and discounts — only if you subscribed to our newsletter."
                ]
            },
            {
                title: "Sharing your data",
                paragraphs: [
                    "We never sell your data. We only share delivery details with Nova Poshta so they can deliver your parcel."
                ]
            },
            {
                title: "Your rights",
                paragraphs: [
                    "You can unsubscribe from the newsletter at any time using the link in any email, or ask us to update or delete your data by writing to info@backvintage.com.ua."
                ]
            }
        ]
    },

    shipping: {
        title: "Shipping & payment",
        lead: "We ship across Ukraine with Nova Poshta.",
        sections: [
            {
                title: "Shipping",
                list: [
                    "We send your order within 2 business days after payment.",
                    "Delivery to a Nova Poshta branch, parcel locker or by courier.",
                    "Shipping is paid by the buyer at Nova Poshta rates.",
                    "You will receive a tracking number as soon as the parcel is sent."
                ]
            },
            {
                title: "Payment",
                list: [
                    "Visa and Mastercard cards.",
                    "Apple Pay and Google Pay."
                ]
            }
        ]
    },

    returns: {
        title: "Exchanges & returns",
        lead: "If an item doesn’t fit, you can return or exchange it.",
        sections: [
            {
                title: "Returns",
                paragraphs: [
                    "You can return an item within 2 business days after you receive it. The item must be in the same condition as when it was delivered."
                ]
            },
            {
                title: "Exchanges",
                paragraphs: [
                    "Every item in our store is one of a kind, so we can’t send the same item in another size. But you can exchange an item that didn’t fit for any other one at the same price or by paying the difference."
                ]
            },
            {
                title: "How to return an item",
                list: [
                    "Write to us in Telegram @backintimevintage or call 0 99 198 05 21.",
                    "Send the item back with Nova Poshta.",
                    "We refund the money within 3 business days after we receive the item."
                ]
            }
        ]
    }
};

export const faqArray = [
    {
        question: "Are the clothes new?",
        answer: "No, all our clothes are vintage — they had previous owners. We check, clean and, if needed, repair every item before selling it."
    },
    {
        question: "How do I choose the right size?",
        answer: "Vintage sizes often differ from modern ones, so check the measurements in the item description: length, sleeve length and shoulders. If you are not sure, write to us and we will help."
    },
    {
        question: "Can I reserve an item?",
        answer: "Yes, we can hold an item for you for 24 hours. Just write to us in Telegram @backintimevintage."
    },
    {
        question: "How long does delivery take?",
        answer: "We send orders within 2 business days after payment. Nova Poshta usually delivers within 1–3 days."
    },
    {
        question: "Can I return an item?",
        answer: "Yes, within 2 business days after you receive it. You can also exchange it for any other item at the same price or by paying the difference."
    },
    {
        question: "Do you ship outside Ukraine?",
        answer: "Not yet — we currently ship only within Ukraine."
    }
];
