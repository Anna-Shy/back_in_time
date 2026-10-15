import useBreadcrumbs from "use-react-router-breadcrumbs";

import { Link } from "react-router-dom";

import { getProduct } from "../../source/data/products";

import "./breadcrumbs.scss";

const routes = [
  { path: "/", breadcrumb: "Home" },
  { path: "/catalog", breadcrumb: "Catalog" },
  {
    path: "/catalog/:itemId",
    breadcrumb: ({ match }) => getProduct(match.params.itemId)?.title || "Product"
  }
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
                : "#707070"
          }}
        >
          {breadcrumb}
          {index < breadcrumbs.length - 1 && " > "}
        </Link>
      ))}
    </>
  );
};
