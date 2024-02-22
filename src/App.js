import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import { LandingPage } from './pages/landingPage/LandingPage';
import { NewArrivalsPage } from './pages/newArrivalsPage/NewArrivalsPage';
import { SalePage } from './pages/salePage/SalePage';
import { CatalogPage } from './pages/catalogPage/CatalogPage';
import { ContactPage } from './pages/contactPage/ContactPage';
import { ErrorPage } from "./pages/errorPage/ErrorPage";
import { ItemPage } from "./pages/itemPage/ItemPage";
import { LoginPage } from "./pages/loginPage/LoginPage";
import { RegisterPage } from "./pages/registerPage/RegisterPage";

import './styles/global.scss';

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
    errorElement: <ErrorPage />
  },
  {
    path: "/newarrivals",
    element: <NewArrivalsPage />,
    errorElement: <ErrorPage />
  },
  {
    path: "/sale",
    element: <SalePage />,
    errorElement: <ErrorPage />
  },
  {
    path: "/contact",
    element: <ContactPage />,
    errorElement: <ErrorPage />
  },
  {
    path: "/catalog",
    element: <CatalogPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/catalog/:itemId",
    element: <ItemPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/regist",
    element: <RegisterPage />,
    errorElement: <ErrorPage />,
  }
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
