import React from "react";

import { Header } from "../../components/header/Header";
import { Footer } from "../../components/footer/Footer";

import { infoPages } from "./data";

import "./infoPage.scss";

export const InfoLayout = ({ title, lead, children }) => {
  return (
    <div className="info__page">
      <Header />

      <main className="info__main">
        <h1 className="info__title">{title}</h1>
        <div className="divider"></div>
        {lead && <p className="info__lead">{lead}</p>}

        {children}
      </main>

      <Footer />
    </div>
  );
};

// renders one of the text pages from data.js by its key
export const InfoPage = ({ page }) => {
  const { title, lead, sections } = infoPages[page];

  return (
    <InfoLayout title={title} lead={lead}>
      {sections.map((section) => (
        <section className="info__section" key={section.title}>
          <h2 className="info__section-title">{section.title}</h2>

          {section.paragraphs &&
            section.paragraphs.map((text) => (
              <p className="info__text" key={text}>
                {text}
              </p>
            ))}

          {section.list && (
            <ul className="info__list">
              {section.list.map((text) => (
                <li className="info__text" key={text}>
                  {text}
                </li>
              ))}
            </ul>
          )}
        </section>
      ))}
    </InfoLayout>
  );
};
