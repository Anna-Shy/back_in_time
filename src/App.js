import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  ScrollRestoration,
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
import { ForgotPassPage } from "./pages/forgotPassPage/ForgotPassPage";
import { InfoPage } from "./pages/infoPage/InfoPage";
import { FaqPage } from "./pages/infoPage/FaqPage";
import { CartPage } from "./pages/cartPage/CartPage";
import { CheckoutPage } from "./pages/checkoutPage/CheckoutPage";
import { AccountPage } from "./pages/accountPage/AccountPage";

import { AuthProvider } from "./context/AuthContext";
import { CartProvider } from "./context/CartContext";

import './styles/global.scss';

// opens every new page from the top (links in the footer are at the bottom)
const Root = () => (
  <>
    <Outlet />
    <ScrollRestoration />
  </>
);

const router = createBrowserRouter([
  {
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <LandingPage />
      },
      {
        path: "/newarrivals",
        element: <NewArrivalsPage />
      },
      {
        path: "/sale",
        element: <SalePage />
      },
      {
        path: "/contact",
        element: <ContactPage />
      },
      {
        path: "/catalog",
        element: <CatalogPage />
      },
      {
        path: "/catalog/:itemId",
        element: <ItemPage />
      },
      {
        path: "/login",
        element: <LoginPage />
      },
      {
        path: "/forgotpass",
        element: <ForgotPassPage />
      },
      {
        path: "/regist",
        element: <RegisterPage />
      },
      {
        path: "/about",
        element: <InfoPage page="about" />
      },
      {
        path: "/terms",
        element: <InfoPage page="terms" />
      },
      {
        path: "/privacy",
        element: <InfoPage page="privacy" />
      },
      {
        path: "/shipping",
        element: <InfoPage page="shipping" />
      },
      {
        path: "/returns",
        element: <InfoPage page="returns" />
      },
      {
        path: "/faq",
        element: <FaqPage />
      },
      {
        path: "/cart",
        element: <CartPage />
      },
      {
        path: "/checkout",
        element: <CheckoutPage />
      },
      {
        path: "/account",
        element: <AccountPage />
      }
    ]
  }
]);

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <RouterProvider router={router} />
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
