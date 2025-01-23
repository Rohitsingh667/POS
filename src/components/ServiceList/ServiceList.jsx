import React, { useState, useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { useTranslation } from "react-i18next";

const services = [
  { id: 1, name: "Yoga Class", price: 20, category: "fitness" },
  { id: 2, name: "Therapy Session", price: 50, category: "therapy" },
  { id: 3, name: "Workshop: Mindfulness", price: 30, category: "workshops" },
];

const ServiceList = () => {
  const [filter, setFilter] = useState("");
  const { t } = useTranslation();
  const { addToCart } = useContext(CartContext);

  return (
    <div className="service-list">
      <div className="search-bar">
      <input
        type="text"
        placeholder="Search services..."
        onChange={(e) => setFilter(e.target.value)}
      />
      </div>
      {services
        .filter((service) =>
          service.name.toLowerCase().includes(filter.toLowerCase())
        )
        .map((service) => (
          <div key={service.id} className="service-card">
            <h3>{service.name}</h3>
            <p>${service.price}</p>
            <button onClick={() => addToCart(service)}>Add to Cart</button>
          </div>
        ))}
    </div>
  );
};

export default ServiceList;