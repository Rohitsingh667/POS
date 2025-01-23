import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { useTranslation } from "react-i18next";

const Cart = () => {
  const { cart, removeFromCart } = useContext(CartContext);
  const { t } = useTranslation();

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="cart">
      <h2>{t("cart.title")}</h2>
      {cart.map((item) => (
        <div key={item.cartItemId} className="cart-item">
          <p>
            {item.name} - {t("currency")} {item.price}
          </p>
          <button onClick={() => removeFromCart(item.cartItemId)}>
            {t("cart.remove")}
          </button>
        </div>
      ))}
      <div className="total">
        {t("cart.total")}: {t("currency")} {total}
      </div>
    </div>
  );
};

export default Cart;