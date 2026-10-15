import React, { useState } from "react";

import { Linkin } from "../../components/linkin/Linkin";
import { Chevron } from "../../components/chevron/Chevron";
import { InfoLayout } from "./InfoPage";

import { faqArray } from "./data";

export const FaqPage = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <InfoLayout title="FAQ" lead="Answers to the questions we hear most often.">
      <div className="faq">
        {faqArray.map((item, index) => (
          <div className="faq__item" key={item.question}>
            <button
              className="faq__question"
              onClick={() => toggle(index)}
              aria-expanded={openIndex === index}
            >
              {item.question}
              <Chevron open={openIndex === index} />
            </button>

            {openIndex === index && (
              <p className="faq__answer info__text">{item.answer}</p>
            )}
          </div>
        ))}
      </div>

      <p className="info__text faq__more">
        Didn’t find an answer?{" "}
        <Linkin link={"/contact"} text={"Contact us"} classStyle="info__link" />
      </p>
    </InfoLayout>
  );
};
