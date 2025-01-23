import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import ServiceList from "./components/ServiceList/ServiceList.jsx";
import Cart from "./components/Cart/Cart.jsx";
import Checkout from "./components/Checkout/Checkout.jsx";
import Receipt from "./components/Receipt/Receipt.jsx";
import Analytics from "./components/Analytics/Analytics.jsx";
import "./App.css";
import { CartProvider } from "./context/CartContext.jsx";

const App = () => {
  const { t, i18n } = useTranslation();
  const [currentPage, setCurrentPage] = useState("services");

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <CartProvider>
    <div>
      <nav>
        <button onClick={() => setCurrentPage("services")}>{t("serviceList.title")}</button>
        <button onClick={() => setCurrentPage("cart")}>{t("cart.title")}</button>
        <button onClick={() => setCurrentPage("checkout")}>{t("checkout.title")}</button>
        <button onClick={() => setCurrentPage("analytics")}>{t("analytics.title")}</button>
        <button onClick={() => changeLanguage("en")}>English</button>
        <button onClick={() => changeLanguage("hi")}>हिंदी</button>
      </nav>

      {currentPage === "services" && <ServiceList />}
      {currentPage === "cart" && <Cart />}
      {currentPage === "checkout" && <Checkout />}
      {currentPage === "receipt" && <Receipt />}
      {currentPage === "analytics" && <Analytics />}
    </div>
    </CartProvider>
  );
};

export default App;