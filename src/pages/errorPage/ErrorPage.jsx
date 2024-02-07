import { useRouteError } from "react-router-dom";

import './errorPage.scss'

export const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error__page">
      <h1 className="error__title">Oops!</h1>
      <p className="error__text">Sorry, an unexpected error has occurred.</p>
      <p className="error__text">
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
};
