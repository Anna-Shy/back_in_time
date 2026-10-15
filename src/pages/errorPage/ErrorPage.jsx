import { useRouteError } from "react-router-dom";

import { Header } from "../../components/header/Header";
import { Linkin } from "../../components/linkin/Linkin";

import "./errorPage.scss";

export const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error" className="error">
      <Header />

      <main className="error__main">
        <h1 className="error__title">404</h1>
        <p className="error__text">
          Looks like something went wrong, <br />
          page not found.
        </p>

        <Linkin
          link={"/"}
          text={"back to home page"}
          classStyle="error__btn"
        />
      </main>
    </div>
  );
};
