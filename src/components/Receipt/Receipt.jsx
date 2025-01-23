// src/components/Receipt/Receipt.js
import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { useTranslation } from "react-i18next";

const Receipt = () => {
  const { cart } = useContext(CartContext);
  const { t } = useTranslation();

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div>
      <h2>{t("receipt.title")}</h2>
      {cart.map((item) => (
        <div key={item.id}>
          <p>
            {item.name} - {t("currency")} {item.price}
          </p>
        </div>
      ))}
      <h3>
        {t("receipt.total")}: {t("currency")} {total}
      </h3>
    </div>
  );
};

export default Receipt;