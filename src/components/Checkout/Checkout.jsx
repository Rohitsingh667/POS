// src/components/Checkout/Checkout.js
import React, { useState, useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { useTranslation } from "react-i18next";

const Checkout = () => {
  const { cart, clearCart } = useContext(CartContext);
  const [customerDetails, setCustomerDetails] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const { t } = useTranslation();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCustomerDetails({ ...customerDetails, [name]: value });
  };

  const handlePayment = () => {
    // Simulate payment processing
    setTimeout(() => {
      setPaymentSuccess(true);
      clearCart();
    }, 2000);
  };

  if (paymentSuccess) {
    return <div>{t("checkout.success")}</div>;
  }

  return (
    <div className="checkout">
      <h2>{t("checkout.title")}</h2>
      <div>
        <label>{t("checkout.name")}</label>
        <input
          type="text"
          name="name"
          value={customerDetails.name}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>{t("checkout.email")}</label>
        <input
          type="email"
          name="email"
          value={customerDetails.email}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>{t("checkout.phone")}</label>
        <input
          type="tel"
          name="phone"
          value={customerDetails.phone}
          onChange={handleInputChange}
        />
      </div>
      <button onClick={handlePayment}>{t("checkout.pay")}</button>
    </div>
  );
};

export default Checkout;