import { BrowserRouter, Routes, Route } from "react-router-dom";

import { LandingPage } from './pages/landingPage/LandingPage';
import { NewArrivalsPage } from './pages/newArrivalsPage/NewArrivalsPage';
import { SalePage } from './pages/salePage/SalePage';
import { CatalogPage } from './pages/catalogPage/CatalogPage';
import { ContactPage } from './pages/contactPage/ContactPage';
import { ErrorPage } from "./pages/errorPage/ErrorPage";

import './styles/global.scss';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/newarrivals" element={<NewArrivalsPage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/sale" element={<SalePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
