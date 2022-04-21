import React from "react";
import "./cardItem.css";
import CardRating from "./cardRating";

const CardItem = ({ foodCards, cardHead }) => {
  return (
    <div className="max-width">
      <h3 className="collection-title">{cardHead}</h3>
      <div className="card-container">
        {foodCards &&
          foodCards.map((_) => {
            return (
              <div key={_.id} className="card-wrapper">
                <img src={_.img} alt={_.title} className="card-img" />
                <div className="card-title">
                  <p>{_.title}</p>
                  <CardRating value="3.5" />
                </div>
                <div className="card-description">
                  <p>{_.descp}</p>
                  <span>&#x20B9; {_.offerPrice}</span>
                </div>
                <div className="card-footer">
                  <p>{_.location}</p>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default CardItem;
