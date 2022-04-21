import React from "react";
import "./carousal.css";

const SliderComponent = ({ item }) => {
  return (
    <div className="slider-item-wrapper">
      <div className="slider-item-cover">
        <img
          src={item.cover}
          className="slider-item-image"
          alt={item.title}
        />
      </div>
      <div className="slider-item-title">{item.title}</div>
      {item.descp && <div className="slider-item-descp">{item.descp}</div>}
    </div>
  );
};

export default SliderComponent;
