import useBreadcrumbs from "use-react-router-breadcrumbs";

import { Link } from "react-router-dom";

import "./breadcrumbs.scss";

const routes = [
  { path: "/", breadcrumb: "Головна" },
  { path: "/catalog", breadcrumb: "Каталог" },
  { path: "/catalog/:itemId", breadcrumb: "Одяг" }
];

export const Breadcrumbs = () => {
  const breadcrumbs = useBreadcrumbs(routes);

  return (
    <>
      {breadcrumbs.map(({ match, breadcrumb }, index) => (
        <Link
          to={match.pathname}
          className="breadcrumbs"
          key={index}
          style={{
            color:
              index === breadcrumbs.length - 1
                ? "#000"
                : "rgba(47, 47, 47, 0.35)"
          }}
        >
          {breadcrumb}
          {index < breadcrumbs.length - 1 && " > "}
        </Link>
      ))}
    </>
  );
};
