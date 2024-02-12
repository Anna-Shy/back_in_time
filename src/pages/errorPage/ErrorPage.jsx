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
          Схоже щось пішло не за планом, <br />
          сторінки не знайдено.
        </p>

        <Linkin
          link={"/"}
          text={"повернутись на головну"}
          classStyle="error__btn"
        />
      </main>
    </div>
  );
};
