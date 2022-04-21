import React from "react";
import DeliveryItem from "../deliveryItem";
import "./deliveryCollection.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NextArrow from "../../carousal/arrows/nextArrow";
import PrevArrow from "../../carousal/arrows/prevArrow";

const DeliveryCollection = () => {
  const deliverySlideItems = [
    {
      id: 1,
      title: "Home Style",
      cover:
        "https://b.zmtcdn.com/data/dish_images/da37534e55d5f1450ea9771c0627a8d81641644205.png",
    },
    {
      id: 2,
      title: "Dosa",
      cover:
        "https://b.zmtcdn.com/data/o2_assets/8dc39742916ddc369ebeb91928391b931632716660.png",
    },
    {
      id: 3,
      title: "Vada",
      cover:
        "https://b.zmtcdn.com/data/o2_assets/bf4bde7b78d517ac8460ea03d4c64a7f1632716550.png",
    },
    {
      id: 4,
      title: "Idly",
      cover:
        "https://b.zmtcdn.com/data/dish_images/d9766dd91cd75416f4f65cf286ca84331634805483.png",
    },
    {
      id: 5,
      title: "Pongal",
      cover:
        "https://b.zmtcdn.com/data/o2_assets/fee832f6c837b40004750fb3185da6791632716576.png",
    },
    {
      id: 6,
      title: "Sizzler",
      cover:
        "https://b.zmtcdn.com/data/dish_photos/70b/9f74def40591b43a46191c99e008b70b.jpg",
    },
    {
      id: 7,
      title: "Sandwich",
      cover:
        "https://b.zmtcdn.com/data/o2_assets/fc641efbb73b10484257f295ef0b9b981634401116.png",
    },
    {
      id: 8,
      title: "Juice",
      cover:
        "https://b.zmtcdn.com/data/o2_assets/e6c74944b4d15017b51c07d5a97b34961648972347.png",
    },
    {
      id: 9,
      title: "Coffee",
      cover:
        "https://b.zmtcdn.com/data/dish_images/865258169afc30225d6747c54041e8951634966783.png",
    },
    {
      id: 10,
      title: "Chaat",
      cover:
        "https://b.zmtcdn.com/data/dish_images/1437bc204cb5c892cb22d78b4347f4651634827140.png",
    },
    {
      id: 11,
      title: "Uttapam",
      cover:
        "https://b.zmtcdn.com/data/o2_assets/7ab7679bbd422b52205ba598502674291632716549.png",
    },
    {
      id: 12,
      title: "Shake",
      cover:
        "https://b.zmtcdn.com/data/dish_images/8187d3223ac2cc42cc24f723c92877511634805403.png",
    },
  ];

  const settings = {
    infinite: false,
    slidesToShow: 6,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  // Devilevry Slides

  return (
    <div className="delivery-collection section-padding">
      <div className="max-width">
        <div className="collection-title">Eat what makes you happy </div>
        <Slider {...settings}>
          {deliverySlideItems.map((_) => {
            return <DeliveryItem key={_.id} item={_} />;
          })}
        </Slider>
      </div>
    </div>
  );
};

export default DeliveryCollection;
