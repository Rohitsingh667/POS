// src/components/Analytics/Analytics.js
import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { useTranslation } from "react-i18next";

const Analytics = () => {
  const { cart } = useContext(CartContext);
  const { t } = useTranslation();

  const totalRevenue = cart.reduce((sum, item) => sum + item.price, 0);
  const totalServicesSold = cart.length;

  return (
    <div>
      <h2>{t("analytics.title")}</h2>
      <p>
        {t("analytics.revenue")}: {t("currency")} {totalRevenue}
      </p>
      <p>
        {t("analytics.servicesSold")}: {totalServicesSold}
      </p>
    </div>
  );
};

export default Analytics;